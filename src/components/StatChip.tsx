import { useEffect, useState, useRef } from 'react';

interface StatChipProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatChip({ value, label, suffix = '', delay = 0 }: StatChipProps) {
  const [count, setCount] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 1500;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className="inline-flex flex-col items-center justify-center px-6 py-4 rounded-lg transition-transform hover:scale-105"
      style={{
        backgroundColor: 'white',
        boxShadow: 'var(--shadow-sm)',
        borderRadius: 'var(--r-md)'
      }}
    >
      <div
        className="font-medium"
        style={{
          fontSize: 'var(--text-h2)',
          lineHeight: 'var(--text-h2-lh)',
          color: 'var(--accent)'
        }}
      >
        {count}{suffix}
      </div>
      <div
        className="mt-1"
        style={{
          fontSize: 'var(--text-small)',
          lineHeight: 'var(--text-small-lh)',
          color: 'var(--ink-secondary)'
        }}
      >
        {label}
      </div>
    </div>
  );
}