import { useQuery } from '@tanstack/react-query'

export default function usePosts() {
  const isClient = typeof window !== 'undefined'

  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('/api/posts')
      if (!res.ok) {
        const txt = await res.text()
        throw new Error(txt || 'Failed to fetch posts')
      }
      return res.json()
    },
    staleTime: 5 * 60 * 1000,
    retry: 1,
    enabled: isClient,
  })
}
