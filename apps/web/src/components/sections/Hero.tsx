import { Section } from '@/components/layout/Section';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <Section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Dave Charm Bulaquena
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
          Full Stack Developer & Solutions Designer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mb-8">
          Architecting scalable web applications with type-safe code, modern tooling, and
          user-centered design thinking
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 transition-colors"
          >
            View projects
          </a>
        </div>

        <div className="flex gap-6 mt-12">
          <a
            href="https://github.com/davebulaquena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/davebulaquena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:dave@davebulaquena.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
}
