import { Section } from '@/components/layout/Section';
import { Timeline } from '@/components/ui/timeline';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Oct 2024 - Present',
    company: 'Stratpoint Global Outsourcing Inc.',
    role: 'Solutions Designer',
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
    title: 'Jul 2024 - Oct 2024',
    company: 'Clear Minds Algorithmic Inc, (Universal Storefront Service Corporation)',
    role: 'Software Engineer - Mobile',
    description:
      'As a Mobile App Developer, I maintained and developed features for the USSC and U Mobile App, while also contributing to key projects such as the U Business Solution App and Go Salads POS. I was responsible for building interactive and responsive user interfaces across both iOS and Android platforms using React Native. I led major bug-fixing initiatives that significantly improved app stability, directly enhancing user satisfaction and business performance. Additionally, I optimized frontend performance by analyzing and refactoring code, which led to increased user engagement and smoother app experiences.',
    technologies: ['React Native', 'iOS', 'Android', 'Java', 'Expo', 'RealmDB', 'Git'],
  },
  {
    title: 'Feb 2024 - Jun 2024',
    company: 'Stratpoint Global Outsourcing',
    role: 'Software Engineering Intern',
    description:
      'Built multiple mobile apps during a tech bootcamp using Flutter, applying DDD, Modular DDD, and clean Git workflows. Contributed to a real-world project, Wookie, collaborating with developers to deliver production-ready features.',
    technologies: ['Flutter', 'iOS', 'Android', 'Git', 'Gitlab', 'Domain Driven Design', 'Modular DDD'],
  },
  {
    title: 'July 2023 - Jan 2024',
    company: 'Coromar Group of Companies',
    role: 'Frontend Developer',
    description:
      'Created responsive web applications and implemented modern UI/UX designs for various clients.',
    technologies: ['Next.js', 'QA/UAT', 'Business Analyst', 'React Native', 'Git'],
  },
];

const timelineData = experiences.map((exp) => ({
  title: exp.title,
  content: (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="bg-gray-900 dark:bg-white p-2 rounded-full flex-shrink-0">
          <Briefcase size={20} className="text-white dark:text-gray-900" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-1">
            {exp.role}
          </h3>
          <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-3">{exp.company}</h4>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>

      <div className="flex flex-wrap gap-2 pt-2">
        {exp.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm text-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  ),
}));

export function Experience() {
  return (
    <Section id="experience" className="bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Experience
        </h2>
        <Timeline data={timelineData} />
      </div>
    </Section>
  );
}
