import { Section } from '@/components/layout/Section';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { BlurredInfiniteSlider } from '@/components/ui/infinite-slider';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    ],
    speed: 40,
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    ],
    speed: 35,
  },
  {
    title: 'Architecture & DevOps',
    skills: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    ],
    speed: 38,
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-gray-50 dark:bg-gray-900">
      <ScrollReveal variant="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
      </ScrollReveal>

      <div className="space-y-16">
        {skillCategories.map((category, index) => (
          <ScrollReveal key={category.title} variant="fade-up" delay={index * 100}>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>

              <BlurredInfiniteSlider
                speed={category.speed}
                gap={48}
                fadeWidth={80}
                reverse={index % 2 === 1}
                className="py-6"
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex-shrink-0 flex items-center gap-4 px-8 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 object-contain dark:invert-0"
                    />
                    <span className="text-base font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </BlurredInfiniteSlider>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
