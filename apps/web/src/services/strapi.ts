import { apiFetch, transformStrapiImage } from './api';
import type { Project, BlogPost, Category, Tag, Testimonial } from '@portfolio/types';
import type { StrapiProject, StrapiCollectionResponse } from '@/types/strapi';

/**
 * Transform Strapi project to our Project type
 */
function transformProject(strapiProject: StrapiProject): Project {
  // Handle description - can be string or rich text array
  let description = '';
  if (typeof strapiProject.description === 'string') {
    description = strapiProject.description;
  } else if (Array.isArray(strapiProject.description)) {
    // Extract text from rich text blocks
    description = strapiProject.description
      .map((block: any) => {
        if (block.children) {
          return block.children.map((child: any) => child.text || '').join('');
        }
        return '';
      })
      .join('\n');
  }

  // Transform images - handle both direct objects and null/undefined
  const thumbnail = strapiProject.thumbnail ? transformStrapiImage(strapiProject.thumbnail) : null;
  const images = Array.isArray(strapiProject.images)
    ? strapiProject.images.map(transformStrapiImage).filter((img): img is NonNullable<typeof img> => img !== null)
    : [];

  return {
    id: strapiProject.id,
    title: strapiProject.title,
    slug: strapiProject.slug,
    shortDescription: strapiProject.shortDescription,
    description,
    category: strapiProject.category,
    githubUrl: strapiProject.githubUrl,
    liveUrl: strapiProject.liveUrl,
    caseStudyUrl: strapiProject.caseStudyUrl,
    order: strapiProject.order,
    featured: strapiProject.featured ?? false,
    technologies: strapiProject.technologies,
    startDate: new Date(strapiProject.startDate),
    endDate: strapiProject.endDate ? new Date(strapiProject.endDate) : null,
    thumbnail: thumbnail!,
    images,
    publishedAt: strapiProject.publishedAt ? new Date(strapiProject.publishedAt) : null,
    createdAt: new Date(strapiProject.createdAt),
    updatedAt: new Date(strapiProject.updatedAt),
  };
}

/**
 * Fetch projects from Strapi
 */
export async function getProjects(filters?: { featured?: boolean }): Promise<Project[]> {
  try {
    let endpoint = '/api/projects?filters[publishedAt][$notNull]=true&populate=*&sort=order:asc';

    if (filters?.featured) {
      endpoint += '&filters[featured][$eq]=true';
    }

    console.log('Fetching projects from:', endpoint);

    const response = await apiFetch<StrapiCollectionResponse<StrapiProject>>(endpoint);

    console.log('Strapi Response:', response);
    console.log('Number of projects:', response.data.length);

    if (!response.data || response.data.length === 0) {
      console.warn('No projects found in Strapi');
      return [];
    }

    const projects = response.data.map((project, index) => {
      console.log(`Transforming project ${index + 1}:`, project.title);
      return transformProject(project);
    });

    console.log('Transformed projects:', projects);
    return projects;
  } catch (error) {
    console.error('Error fetching projects from Strapi:', error);
    throw error;
  }
}

/**
 * Fetch single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const endpoint = `/api/projects?filters[slug][$eq]=${slug}&populate=*`;
  const response = await apiFetch<StrapiCollectionResponse<StrapiProject>>(endpoint);

  if (response.data.length === 0) {
    return null;
  }

  return transformProject(response.data[0]);
}

/**
 * Fetch blog posts with pagination
 */
export async function getBlogPosts(options?: {
  page?: number;
  pageSize?: number;
  featured?: boolean;
}): Promise<{ posts: BlogPost[]; pagination: any }> {
  const { page = 1, pageSize = 10, featured } = options || {};

  let endpoint = `/api/blog-posts?filters[publishedAt][$notNull]=true&populate=*&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

  if (featured) {
    endpoint += '&filters[featured][$eq]=true';
  }

  const data = await apiFetch<any>(endpoint);

  return {
    posts: data.data || [],
    pagination: data.meta?.pagination || {},
  };
}

/**
 * Fetch single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const endpoint = `/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`;
  const data = await apiFetch<any>(endpoint);
  return data.data?.[0] || null;
}

/**
 * Fetch all categories
 */
export async function getCategories(): Promise<Category[]> {
  const endpoint = '/api/categories?sort=name:asc';
  const data = await apiFetch<any>(endpoint);
  return data.data || [];
}

/**
 * Fetch all tags
 */
export async function getTags(): Promise<Tag[]> {
  const endpoint = '/api/tags?sort=name:asc';
  const data = await apiFetch<any>(endpoint);
  return data.data || [];
}

/**
 * Fetch testimonials
 */
export async function getTestimonials(filters?: { featured?: boolean }): Promise<Testimonial[]> {
  let endpoint = '/api/testimonials?filters[publishedAt][$notNull]=true&populate=*&sort=order:asc';

  if (filters?.featured) {
    endpoint += '&filters[featured][$eq]=true';
  }

  const data = await apiFetch<any>(endpoint);
  return data.data || [];
}
