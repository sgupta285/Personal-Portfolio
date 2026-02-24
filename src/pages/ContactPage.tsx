import { motion } from 'motion/react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { AnimatedPage } from '../components/AnimatedPage';

export function ContactPage() {
  return (
    <AnimatedPage>
      <div className="min-h-screen pt-24 pb-20">
        <div className="container">
          {/* Header */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="font-bold"
              style={{
                fontSize: 'var(--text-display)',
                lineHeight: 'var(--text-display-lh)',
                color: 'var(--ink-primary)'
              }}
            >
              Contact
            </h1>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-6 rounded-2xl relative group overflow-hidden"
                style={{
                  backgroundColor: 'var(--surface-elevated)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--muted)',
                  display: 'flex'
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'var(--gradient-accent)',
                    opacity: 0.05
                  }}
                />
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl"
                  style={{ background: 'var(--gradient-accent)' }}
                >
                  <Mail size={24} style={{ color: 'white' }} />
                </div>
                <div className="relative z-10">
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: 'var(--text-body)',
                      lineHeight: 'var(--text-body-lh)',
                      color: 'var(--ink-primary)'
                    }}
                  >
                    Email
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-small)',
                      lineHeight: 'var(--text-small-lh)',
                      color: 'var(--ink-secondary)'
                    }}
                  >
                    {contactInfo.email}
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-6 rounded-2xl relative group overflow-hidden"
                style={{
                  backgroundColor: 'var(--surface-elevated)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--muted)',
                  display: 'flex'
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    opacity: 0.05
                  }}
                />
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
                >
                  <Phone size={24} style={{ color: 'white' }} />
                </div>
                <div className="relative z-10">
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: 'var(--text-body)',
                      lineHeight: 'var(--text-body-lh)',
                      color: 'var(--ink-primary)'
                    }}
                  >
                    Phone
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-small)',
                      lineHeight: 'var(--text-small-lh)',
                      color: 'var(--ink-secondary)'
                    }}
                  >
                    {contactInfo.phone}
                  </p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl relative group overflow-hidden"
                style={{
                  backgroundColor: 'var(--surface-elevated)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--muted)',
                  display: 'flex'
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)',
                    opacity: 0.05
                  }}
                />
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)' }}
                >
                  <Linkedin size={24} style={{ color: 'white' }} />
                </div>
                <div className="relative z-10">
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: 'var(--text-body)',
                      lineHeight: 'var(--text-body-lh)',
                      color: 'var(--ink-primary)'
                    }}
                  >
                    LinkedIn
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-small)',
                      lineHeight: 'var(--text-small-lh)',
                      color: 'var(--ink-secondary)'
                    }}
                  >
                    Connect with me
                  </p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
