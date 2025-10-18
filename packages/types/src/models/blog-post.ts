import type { Image } from './image';
import type { Category } from './category';
import type { Tag } from './tag';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: Image;
  author: string;
  publishedAt: Date | null;
  readingTime: number;
  featured: boolean;
  tags: Tag[];
  categories: Category[];
  seoTitle: string | null;
  seoDescription: string | null;
  createdAt: Date;
  updatedAt: Date;
}
