import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/blog.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "/components/layout";
import Link from 'next/link'
import Orb from '../components/Orb';

export default function Blog() {

  return (
    <>
    <Layout>
      <div className={styles.page}>


        <main className={styles.main}>
          <Container>
            <h1 className={styles.title}>Blog</h1>

            <Link href="/single-post">
              <a className={styles.postLink}>
                <article className={styles.post}>
                  <Row className="align-items-center">
                    <Col xs={12}>
                      <div className={styles.heroImage}>
                        <Image src="/fsjourney.png" alt="blog hero" layout='fill'/>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h2 className={styles.postTitle}>From UI Developer to Full-Stack: My Level Up Journey</h2>
                      <time className={styles.date}>Jan 16 2026</time>
                    </Col>
                  </Row>
                </article>
              </a>
            </Link>
          </Container>
        </main>
                 <Orb variant={1} />
                            <Orb variant={2} />
      </div>
      </Layout>
    </>
  )
}
