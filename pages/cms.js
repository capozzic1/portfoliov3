import { useEffect } from 'react';
import Layout from '/components/layout';
import { useRouter } from 'next/router';
import BlogTable from '../components/blogtable';
import styles from '../page-styles/cms.module.scss';
import useMe from '../utility/login-utility';


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
            <div className={styles.cmsContainer}>
            {me && <BlogTable />}
            </div>
        </Layout>
    )
}