/**
 * Strapi v5 API Response Types
 */

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiProject {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  githubUrl: string | null;
  liveUrl: string | null;
  caseStudyUrl: string | null;
  description: any; // Rich text content
  order: number;
  featured: boolean | null;
  startDate: string;
  endDate: string | null;
  technologies: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: StrapiImage | null;
  images: StrapiImage[];
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
