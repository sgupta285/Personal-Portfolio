#!/usr/bin/env node

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const fixes = {
  versioned: 0,
  nodeProtocol: 0,
};

async function* walkFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
      yield* walkFiles(path);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      yield path;
    }
  }
}

async function fixImports(filePath) {
  let content = await readFile(filePath, 'utf-8');
  let modified = false;

  // Remove version suffixes from imports (e.g., package@1.2.3 → package)
  const versionedImportRegex = /from\s+(['"])([^'"]+)@[\d.]+(['"])/g;
  if (versionedImportRegex.test(content)) {
    content = content.replace(versionedImportRegex, (match, q1, pkg, q2) => {
      fixes.versioned++;
      modified = true;
      return `from ${q1}${pkg}${q2}`;
    });
  }

  // Remove node: protocol from imports where applicable
  const nodeProtocolRegex = /from\s+(['"])node:([^'"]+)(['"])/g;
  if (nodeProtocolRegex.test(content)) {
    content = content.replace(nodeProtocolRegex, (match, q1, pkg, q2) => {
      fixes.nodeProtocol++;
      modified = true;
      return `from ${q1}${pkg}${q2}`;
    });
  }

  if (modified) {
    await writeFile(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

async function main() {
  console.log('🔍 Scanning for import issues...\n');
  
  const srcDir = join(process.cwd(), 'src');
  let filesFixed = 0;

  for await (const file of walkFiles(srcDir)) {
    const wasFixed = await fixImports(file);
    if (wasFixed) {
      filesFixed++;
      console.log(`✓ Fixed: ${file.replace(process.cwd(), '')}`);
    }
  }

  console.log('\n📊 Summary:');
  console.log(`   Files modified: ${filesFixed}`);
  console.log(`   Versioned imports removed: ${fixes.versioned}`);
  console.log(`   Node protocol imports fixed: ${fixes.nodeProtocol}`);
  console.log('\n✅ Import fixes complete!\n');
}

main().catch(console.error);
