import type { Image } from './image';

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  featured: boolean;
  order: number;
  technologies: string[];
  category: string;
  githubUrl: string | null;
  liveUrl: string | null;
  caseStudyUrl: string | null;
  images: Image[];
  thumbnail: Image;
  startDate: Date;
  endDate: Date | null;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
