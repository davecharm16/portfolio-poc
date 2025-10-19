'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ContainerScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardTransformedProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  index: number;
  arrayLength: number;
}

const ContainerScrollContext = React.createContext<{
  scrollYProgress: any;
} | null>(null);

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  children,
  className,
  ...props
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start center', 'end end'],
  });

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn('relative min-h-[200vh] w-full', className)}
        style={{ perspective: '1000px' }}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
};

export const CardsContainer: React.FC<CardsContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('sticky top-1/2 -translate-y-1/2 mx-auto', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTransformed: React.FC<CardTransformedProps> = ({
  children,
  index,
  arrayLength,
  className,
  ...props
}) => {
  const context = React.useContext(ContainerScrollContext);

  if (!context) {
    throw new Error('CardTransformed must be used within ContainerScroll');
  }

  const { scrollYProgress } = context;

  // Calculate transforms based on scroll
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1 - (arrayLength - index) * 0.05, 1 - (arrayLength - index) * 0.05, 1]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0, -10 * (arrayLength - index)]
  );

  const translateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0, -50 * (arrayLength - index)]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1, index === 0 ? 1 : 0.5]
  );

  return (
    <motion.div
      className={cn(
        'absolute will-change-transform',
        'flex size-full flex-col gap-6 rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 p-6 backdrop-blur-md',
        className
      )}
      style={{
        scale,
        rotateX,
        translateY,
        opacity,
        transformStyle: 'preserve-3d',
        zIndex: arrayLength - index,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
