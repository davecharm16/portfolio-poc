import { ReactNode } from 'react';

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  target?: string;
  rel?: string;
  enableNeon?: boolean;
}

export function NeonButton({ href, children, variant = 'primary', target, rel, enableNeon = false }: NeonButtonProps) {
  const isPrimary = variant === 'primary';

  if (!enableNeon) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl min-h-[44px] ${
          isPrimary
            ? 'bg-gray-900 dark:bg-slate-200 text-white dark:text-slate-900'
            : 'border border-gray-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 text-gray-900 dark:text-slate-200 backdrop-blur-sm hover:border-gray-400 dark:hover:border-slate-500'
        }`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[2px] min-h-[44px]"
    >
      {/* Animated rotating neon border - always visible */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-500" style={{ animation: 'spin-slow 25s linear infinite' }}></div>
      <div className="absolute inset-[2px] rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity duration-500" style={{ animation: 'spin-slower 35s linear infinite reverse' }}></div>

      {/* Button content */}
      <span
        className={`relative z-10 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all group-hover:scale-[0.98] min-h-[40px] ${
          isPrimary
            ? 'bg-gray-900 dark:bg-slate-900 text-white'
            : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-200'
        }`}
      >
        {children}
      </span>
    </a>
  );
}
