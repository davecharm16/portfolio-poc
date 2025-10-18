import type { Image } from './image';

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar: Image | null;
  linkedinUrl: string | null;
  order: number;
  featured: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
