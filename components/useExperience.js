import { useQuery } from '@tanstack/react-query'

export default function useExperience() {
  const isClient = typeof window !== 'undefined'

  return useQuery({
    queryKey: ['experience'],
    queryFn: async () => {
      const res = await fetch('/api/experience')
      if (!res.ok) {
        const txt = await res.text()
        throw new Error(txt || 'Failed to fetch experience')
      }
      return res.json()
    },
    staleTime: 5 * 60 * 1000,
    retry: false,
    refetchOnWindowFocus: false,
    enabled: isClient,
  })
}
