import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/blog.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "/components/layout";
import Link from 'next/link'
import Orb from '../components/Orb';
import usePosts from '../components/usePosts'
import { formatDate, sortedPosts } from '../utility/blog-utility';

export default function Blog() {
  const { data: posts = [], isLoading, isError } = usePosts()

  if (isLoading) return (
    <Layout>
      <div className={styles.page}><main className={styles.main}><Container>Loading posts...</Container></main></div>
    </Layout>
  )

  if (isError) return (
    <Layout>
      <div className={styles.page}><main className={styles.main}><Container>Error loading posts.</Container></main></div>
    </Layout>
  )

  const sortedPostsData = sortedPosts(posts)
  return (
    <>
    <Layout>
      <div className={styles.page}>


        <main className={styles.main}>
          <Container>
            <h1 className={styles.title}>Blog</h1>

            {sortedPostsData.map((post) => {
              return (
                <Link href={{ pathname: '/single-post', query: { id: post.id } }} key={post.id}>
                  <a className={styles.postLink}>
                    <article className={styles.post}>
                      <Row className="align-items-center">
                        <Col xs={12}>
                          <div className={styles.heroImage}>
                            <Image src="/fsjourney.png" alt="blog hero" layout='fill'/>
                          </div>
                        </Col>
                        <Col xs={12}>
                          <h2 className={styles.postTitle}>{post.title}</h2>
                          <time className={styles.date}>{formatDate(post.createdAt)}</time>
                        </Col>
                      </Row>
                    </article>
                  </a>
                </Link>
              )
            })}
          </Container>
        </main>
                 <Orb variant={1} />
                 <Orb variant={2} />
      </div>
      </Layout>
    </>
  )
}
