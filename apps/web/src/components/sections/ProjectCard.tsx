import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@portfolio/types';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine thumbnail and images for the carousel
  const allImages = project.thumbnail
    ? [project.thumbnail, ...project.images]
    : project.images;

  const hasMultipleImages = allImages.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const currentImage = allImages[currentImageIndex];

  return (
    <CardContainer className="w-full h-full">
      <CardBody className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-xl transition-all relative group/card w-full h-full flex flex-col">
        {/* Image Carousel */}
        {currentImage && (
          <CardItem translateZ="50" className="w-full">
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden group">
              <img
                src={currentImage.url}
                alt={currentImage.alternativeText || project.title}
                className="w-full h-full object-cover"
              />

              {/* Carousel Controls */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </CardItem>
        )}

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <CardItem translateZ="40" className="w-full">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
          </CardItem>

          {project.category && (
            <CardItem translateZ="30" className="w-full">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.category}</p>
            </CardItem>
          )}

          <CardItem translateZ="30" className="w-full">
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {project.shortDescription}
            </p>
          </CardItem>

          {/* Technologies */}
          <CardItem translateZ="20" className="w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardItem>

          {/* Links */}
          <CardItem translateZ="30" className="flex gap-4 w-full mt-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
