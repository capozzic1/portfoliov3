import { useEffect } from 'react';
import Layout from '/components/layout';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import BlogTable from '../components/blogtable';

function useMe() {
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

export default function Cms() {
      const { data: me, isLoading, isError } = useMe()
      const router = useRouter()
            useEffect(() => {
                if (!isLoading && me === null) {
                    router.push('/login')
                }
            }, [isLoading, me, router])
      
            if (isLoading) {
                return (
                    <Layout>
                        Loading...
                    </Layout>
                )
            }

            if (isError) {
                return (
                    <Layout>
                        Error loading account.
                    </Layout>
                )
            }
    return (
        <Layout>
            {me && <BlogTable />}
        </Layout>
    )
}