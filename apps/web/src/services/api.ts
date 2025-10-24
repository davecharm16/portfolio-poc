import type { Image } from '@portfolio/types';
import type { StrapiImage } from '@/types/strapi';

const STRAPI_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

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

/**
 * Transform Strapi image to our Image type
 */
export function transformStrapiImage(strapiImage: StrapiImage | null | undefined): Image | null {
  if (!strapiImage) return null;

  // Handle both absolute and relative URLs
  const imageUrl = strapiImage.url.startsWith('http')
    ? strapiImage.url
    : `${STRAPI_URL}${strapiImage.url}`;

  return {
    id: strapiImage.id,
    url: imageUrl,
    alternativeText: strapiImage.alternativeText || '',
    width: strapiImage.width,
    height: strapiImage.height,
    formats: strapiImage.formats || {},
  };
}

/**
 * Generic transform function - no longer needed as we handle types properly
 */
export function transformStrapiResponse<T>(data: any): T {
  return data.data as T;
}

/**
 * Base API fetch wrapper with error handling
 */
export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = endpoint.startsWith('http') ? endpoint : `${STRAPI_URL}${endpoint}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // Add Strapi API token if available
  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  // Merge with any additional headers from options
  if (options?.headers) {
    Object.assign(headers, options.headers);
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}
