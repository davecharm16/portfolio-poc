import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/services/strapi';

export function useProjects(filters?: { featured?: boolean }) {
  return useQuery({
    queryKey: ['projects', filters],
    queryFn: () => getProjects(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
