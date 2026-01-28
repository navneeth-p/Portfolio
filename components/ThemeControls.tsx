'use client';

import { useEffect, useMemo, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { cn } from './ui/cn';

type Theme = 'light' | 'dark' | 'system';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  // Tailwind uses `.dark` class strategy.
  root.classList.remove('dark');
  if (theme === 'dark') root.classList.add('dark');
  if (theme === 'system') {
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
    if (prefersDark) root.classList.add('dark');
  }
}

export default function ThemeControls({
  className,
}: {
  className?: string;
}) {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme | null) ?? 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }, [theme]);

  const resolvedTheme = useMemo(() => {
    if (theme !== 'system') return theme;
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
  }, [theme]);

  const nextTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        type="button"
        onClick={() => setTheme(nextTheme)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        {resolvedTheme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

