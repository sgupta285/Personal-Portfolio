import { useEffect, useRef, useState } from 'react';
import type { Experience } from '../data/experience';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <ExperienceNode key={exp.id} experience={exp} index={index} />
      ))}
    </div>
  );
}

function ExperienceNode({ experience, index }: { experience: Experience; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex gap-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-4 h-4 rounded-full mt-1.5"
          style={{
            backgroundColor: 'var(--accent)',
            boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)'
          }}
        />
        {index < 3 && (
          <div
            className="w-0.5 h-full mt-2"
            style={{ backgroundColor: 'var(--muted)' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: 'white',
            boxShadow: 'var(--shadow-sm)',
            borderRadius: 'var(--r-lg)'
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div>
              <h3
                className="font-medium"
                style={{
                  fontSize: 'var(--text-h3)',
                  lineHeight: 'var(--text-h3-lh)',
                  color: 'var(--ink-primary)'
                }}
              >
                {experience.role}
              </h3>
              <p
                className="mt-1"
                style={{
                  fontSize: 'var(--text-body)',
                  lineHeight: 'var(--text-body-lh)',
                  color: 'var(--accent)'
                }}
              >
                {experience.company}
              </p>
            </div>
            <div
              className="flex-shrink-0 px-3 py-1 rounded"
              style={{
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--text-small-lh)',
                backgroundColor: 'var(--surface)',
                color: 'var(--ink-secondary)',
                borderRadius: 'var(--r-sm)'
              }}
            >
              {experience.period}
            </div>
          </div>

          <ul className="space-y-3">
            {experience.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
                style={{
                  fontSize: 'var(--text-body)',
                  lineHeight: 'var(--text-body-lh)',
                  color: 'var(--ink-secondary)'
                }}
              >
                <span
                  className="flex-shrink-0 mt-1.5"
                  style={{ color: 'var(--accent)' }}
                >
                  •
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
