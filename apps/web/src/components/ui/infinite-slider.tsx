'use client';

import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfiniteSliderProps {
  children: ReactNode;
  gap?: number;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 40,
  reverse = false,
  pauseOnHover = false,
}: InfiniteSliderProps) {
  const [hovering, setHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useAnimationFrame((_t, delta) => {
    if (pauseOnHover && hovering) return;

    const directionMultiplier = reverse ? 1 : -1;
    const movement = (speed / 1000) * delta * directionMultiplier;

    let newX = x.get() + movement;

    // Get the width of one set of children
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth / 2; // Divide by 2 because we duplicate children

      // Reset position when scrolled past one full width
      if (!reverse && newX <= -contentWidth) {
        newX = 0;
      } else if (reverse && newX >= 0) {
        newX = -contentWidth;
      }
    }

    x.set(newX);
  });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        ref={contentRef}
        className="flex gap-4"
        style={{
          x,
          gap: `${gap}px`,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

interface BlurredInfiniteSliderProps {
  children: ReactNode;
  gap?: number;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export function BlurredInfiniteSlider({
  children,
  gap = 16,
  speed = 40,
  reverse = false,
  pauseOnHover = true,
  className,
}: BlurredInfiniteSliderProps) {
  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <InfiniteSlider gap={gap} speed={speed} reverse={reverse} pauseOnHover={pauseOnHover}>
        {children}
      </InfiniteSlider>
    </div>
  );
}
