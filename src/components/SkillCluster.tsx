import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

interface SkillClusterProps {
  category: string;
  skills: Array<{
    name: string;
    proficiency?: string;
  }>;
}

export function SkillCluster({ category, skills }: SkillClusterProps) {
  return (
    <div
      className="p-6 rounded-lg"
      style={{
        backgroundColor: 'white',
        boxShadow: 'var(--shadow-sm)',
        borderRadius: 'var(--r-lg)'
      }}
    >
      <h3
        className="font-medium mb-4"
        style={{
          fontSize: 'var(--text-h3)',
          lineHeight: 'var(--text-h3-lh)',
          color: 'var(--ink-primary)'
        }}
      >
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        <TooltipProvider>
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <button
                  className="px-3 py-1.5 rounded transition-all hover:scale-105"
                  style={{
                    fontSize: 'var(--text-small)',
                    lineHeight: 'var(--text-small-lh)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--ink-primary)',
                    borderRadius: 'var(--r-sm)',
                    border: '1px solid var(--muted)'
                  }}
                >
                  {skill.name}
                </button>
              </TooltipTrigger>
              {skill.proficiency && (
                <TooltipContent
                  side="top"
                  className="max-w-xs"
                  style={{
                    backgroundColor: 'var(--ink-primary)',
                    color: 'white',
                    borderRadius: 'var(--r-md)',
                    padding: '12px 16px'
                  }}
                >
                  <p style={{ fontSize: 'var(--text-small)' }}>
                    {skill.proficiency}
                  </p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}