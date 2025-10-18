import { Section } from '@/components/layout/Section';
import { useProjects } from '@/hooks/useProjects';
import { LoadingSkeleton } from '@/components/common/LoadingSkeleton';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { ProjectCard } from './ProjectCard';

// Mock data - used as fallback if Strapi is not running
const mockProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    shortDescription:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    shortDescription:
      'Collaborative task management tool with real-time updates, team workspaces, and productivity analytics.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'tRPC'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Content Management System',
    shortDescription:
      'Headless CMS with custom content types, media management, and multi-language support.',
    technologies: ['Strapi', 'React', 'GraphQL', 'Cloudinary'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export function Projects() {
  const { data: projects, isLoading, error } = useProjects();

  // Use mock data if Strapi is not available
  const displayProjects = projects && projects.length > 0 ? projects : mockProjects;
  const isUsingMockData = !projects || projects.length === 0;

  return (
    <Section id="projects" className="bg-white dark:bg-gray-950">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Featured Projects
      </h2>

      {isUsingMockData && !isLoading && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          Showing sample projects. Connect Strapi to display your real projects.
        </p>
      )}

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <LoadingSkeleton className="h-64" count={3} />
        </div>
      )}

      {error && !isUsingMockData && (
        <div className="mb-8">
          <ErrorMessage
            title="Failed to load projects"
            message="Using sample data. Please check if Strapi is running."
          />
        </div>
      )}

      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}
