import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import { Github, Linkedin, Mail } from 'lucide-react';
import { NeonButton } from '@/components/ui/neon-button';

export function Hero() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center text-center pt-16 md:pt-32"
      >
        {/* Animated heading with gradient */}
        <h1 className="mt-8 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-slate-300 dark:to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mb-6">
          Dave Charm Bulaquena
        </h1>

        {/* Animated subtitle */}
        <p className="text-xl md:text-2xl mb-4 text-gray-700 dark:text-slate-400">
          Full Stack Developer & Solutions Designer
        </p>

        <p className="text-base md:text-lg text-gray-600 dark:text-slate-500 max-w-2xl mb-8">
          Architecting scalable web applications with type-safe code, modern tooling, and
          user-centered design thinking
        </p>

        {/* Animated CTA buttons */}
        <div className="flex gap-4 mb-12">
          <NeonButton href="#contact" variant="primary" enableNeon={false}>
            Get in touch
          </NeonButton>
          <NeonButton href="#projects" variant="secondary" enableNeon={true}>
            View projects
          </NeonButton>
        </div>

        {/* Animated social links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/davebulaquena"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 transition-transform group-hover:rotate-12" />
          </a>
          <a
            href="https://linkedin.com/in/davebulaquena"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 transition-transform group-hover:rotate-12" />
          </a>
          <a
            href="mailto:dave@davebulaquena.com"
            className="group relative text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 transition-transform group-hover:rotate-12" />
          </a>
        </div>
      </motion.div>
    </LampContainer>
  );
}
