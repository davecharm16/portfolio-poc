import { useInView } from 'react-intersection-observer';
import { ReactNode, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in';
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
}: ScrollRevealProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView} = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getAnimationClasses = () => {
    if (prefersReducedMotion) {
      return 'opacity-100'; // No animation for reduced motion
    }

    const baseClasses = hasAnimated ? 'animate-fade-in' : 'opacity-0';

    const variantClasses = {
      'fade-up': hasAnimated ? 'animate-slide-in-from-bottom-4' : 'translate-y-4',
      'fade-down': hasAnimated ? 'animate-slide-in-from-top-4' : '-translate-y-4',
      'fade-left': hasAnimated ? 'animate-slide-in-from-right-4' : 'translate-x-4',
      'fade-right': hasAnimated ? 'animate-slide-in-from-left-4' : '-translate-x-4',
      'fade-in': '',
    };

    return `${baseClasses} ${variantClasses[variant] || ''}`;
  };

  const style = prefersReducedMotion
    ? {}
    : {
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
      };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`} style={style}>
      {children}
    </div>
  );
}
