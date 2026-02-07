import { useQuery } from '@tanstack/react-query';


export default function useMe() {
    const isClient = typeof window !== 'undefined'

    return useQuery({
        queryKey: ['me'],
        queryFn: async () => {
            const res = await fetch('/api/auth/me', { credentials: "include" })
            if (res.status === 401) return null
            if (!res.ok) throw new Error("Failed to fetch /me")
            return res.json()
        },
            retry: false,
            enabled: isClient,
    })
}