import { useEffect } from 'react';
import Layout from '/components/layout';
import { useRouter } from 'next/router';
import BlogTable from '../components/blogtable';
import ExperienceTable from '../components/experiencetable';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../page-styles/cms.module.scss';
import useMe from '../utility/login-utility';
import { Col, Row } from 'react-bootstrap';


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
            {me && (
                <Row>
                    <Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }} className="mt-4 mb-2">
                <Tabs
                    defaultActiveKey="blog"
                    id="cms-tabs"
                    className="mb-3"
                >
                    <Tab eventKey="blog" title="Blog">
                        <BlogTable />
                    </Tab>
                    <Tab eventKey="experience" title="Experience">
                        <ExperienceTable />
                    </Tab>
                </Tabs>
                </Col>
                </Row>
            )}
            </div>
        </Layout>
    )
}
