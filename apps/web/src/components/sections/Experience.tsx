import { Section } from '@/components/layout/Section';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Solutions Designer',
    company: 'Stratpoint Global Outsourcing Inc.',
    period: 'Oct 2024 - Present',
    description:
      'In the Architecture and Governance Team, I played a key role in architecting scalable enterprise applications, leveraging modern frameworks and cloud-native technologies to meet complex client requirements. I actively contributed to pre-sales efforts by crafting technical proposals, system blueprints, and integration strategies—directly influencing deal closures and onboarding new enterprise clients. My work bridged technical feasibility with business value, ensuring alignment between stakeholder goals and system capabilities.',
    technologies: [
      'Software Architecture',
      'AWS',
      'SDLC',
      'SCRUM',
      'AGILE',
      'Technical Architecture',
      'Product Development',
    ],
  },
  {
    title: 'Software Engineer - Mobile',
    company: 'Clear Minds Algorithmic Inc, (Universal Storefront Service Corporation)',
    period: 'Jul 2024 - Oct 2024',
    description:
      'As a Mobile App Developer, I maintained and developed features for the USSC and U Mobile App, while also contributing to key projects such as the U Business Solution App and Go Salads POS. I was responsible for building interactive and responsive user interfaces across both iOS and Android platforms using React Native. I led major bug-fixing initiatives that significantly improved app stability, directly enhancing user satisfaction and business performance. Additionally, I optimized frontend performance by analyzing and refactoring code, which led to increased user engagement and smoother app experiences.',
    technologies: ['React Native', 'iOS', 'Android', 'Java', 'Expo', 'RealmDB', 'Git'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Stratpoint Global Outsourcing',
    period: 'Feb 2024 - Jun 2024',
    description:
      'Built multiple mobile apps during a tech bootcamp using Flutter, applying DDD, Modular DDD, and clean Git workflows. Contributed to a real-world project, Wookie, collaborating with developers to deliver production-ready features.',
    technologies: ['Flutter', 'iOS', 'Android', 'Git', 'Gitlab', 'Domain Driven Design', 'Modular DDD'],
  },
  {
    title: 'Frontend Developer',
    company: 'Coromar Group of Companies',
    period: 'July 2023 - Jan 2024',
    description:
      'Created responsive web applications and implemented modern UI/UX designs for various clients.',
    technologies: ['Next.js', 'QA/UAT', 'Business Analyst', 'React Native', 'Git'],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-white dark:bg-gray-950">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-12 relative pl-8 border-l-2 border-gray-200 dark:border-gray-800 last:mb-0"
          >
            <div className="absolute -left-3 top-0">
              <div className="bg-gray-900 dark:bg-white p-2 rounded-full">
                <Briefcase size={20} className="text-white dark:text-gray-900" />
              </div>
            </div>

            <div className="mb-2 flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar size={16} />
              <span className="text-sm">{exp.period}</span>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {exp.title}
            </h3>
            <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-3">{exp.company}</h4>

            <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
