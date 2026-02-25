import { useEffect } from 'react';

import { useRouter } from 'next/router';
import BlogTable from '../components/blogtable';
import ExperienceTable from '../components/experiencetable';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../page-styles/cms.module.scss';
import useMe from '../utility/login-utility';
import { Col, Row, Spinner } from 'react-bootstrap';
import styles2 from '../styles/spinner.module.scss'

export default function Cms() {
    const { data: me, isError, isInitialLoading } = useMe()
    const router = useRouter()
    useEffect(() => {
        if (!isInitialLoading && !me) {
            router.push('/login')
        }
    }, [isInitialLoading, me, router])

    if (isInitialLoading) {
        return (
            <div className={styles2.spinnerContainer}><Spinner animation="grow" variant="primary" />
            </div>

        )
    }
    if (isError) {
        return (
            <div>
                Error loading account.
            </div>
        )
    }
    return (

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

    )
}
