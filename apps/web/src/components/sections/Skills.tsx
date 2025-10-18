import { Section } from '@/components/layout/Section';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React 18',
      'TypeScript',
      'Next.js',
      'Vue.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Vite',
      'TanStack Query',
      'Framer Motion',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express',
      'Strapi CMS',
      'tRPC',
      'REST APIs',
      'GraphQL',
      'PostgreSQL',
      'Prisma',
      'Serverless Functions',
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      'Vercel',
      'Railway',
      'AWS',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Monorepo (pnpm)',
      'Cloudinary',
    ],
  },
  {
    title: 'Testing & Quality',
    skills: [
      'Vitest',
      'Playwright',
      'Testing Library',
      'Cypress',
      'Jest',
      'ESLint',
      'Prettier',
      'TypeScript Strict',
    ],
  },
  {
    title: 'Design & Tools',
    skills: [
      'Figma',
      'Design Systems',
      'Component Libraries',
      'Accessibility (WCAG)',
      'Responsive Design',
      'Git',
      'VS Code',
    ],
  },
  {
    title: 'Architecture',
    skills: [
      'Jamstack',
      'Microservices',
      'Monorepo',
      'Component-Based',
      'Type-Safe APIs',
      'State Management',
      'Performance Optimization',
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
