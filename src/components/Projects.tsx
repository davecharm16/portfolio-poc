import React, { memo } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with product management, cart functionality, and payment processing.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Task Management System',
    description: 'A collaborative project management tool with real-time updates, task assignment, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Firebase', 'Material UI', 'Chart.js'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Travel Companion App',
    description: 'A mobile-friendly application that helps users plan trips, discover local attractions, and save memories.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['React Native', 'Express', 'MongoDB', 'Google Maps API'],
    liveLink: '#',
    githubLink: '#'
  }];
  return <section id="projects" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => <span key={techIndex} className="bg-gray-100 px-2 py-1 text-xs rounded">
                      {tech}
                    </span>)}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLinkIcon size={16} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center text-gray-700 hover:text-gray-900">
                    <GithubIcon size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md transition-colors">
            View All Projects
          </a>
        </div>
      </div>
    </section>;
};