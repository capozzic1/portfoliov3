import Head from 'next/head'
import Layout from '/components/layout'
import styles from '../styles/blog.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

async function fetchPostById(id) {
  const res = await fetch(`api/posts/${id}`)
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(txt || 'Failed to fetch post')
  }
  return res.json()
}

export default function SinglePost() {
  const router = useRouter()
  const { id } = router.query

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
    enabled: !!id,
  })

  if (isLoading) return (
    <Layout>
      <div className={styles.singlePage}><main className={styles.main}><Container>Loading post...</Container></main></div>
    </Layout>
  )

  if (isError || !post) return (
    <Layout>
      <div className={styles.singlePage}><main className={styles.main}><Container>Error loading post.</Container></main></div>
    </Layout>
  )

  const pretty = post?.createdAt ? new Date(post.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : ''
  // split content into paragraphs separated by one or more blank lines
  const paragraphs = post?.content
    ? post.content
        .split(/\r?\n\s*\r?\n/) // split on blank line(s)
        .map((s) => s.trim())
        .filter(Boolean)
    : []

  return (
    <Layout>
      <div className={styles.singlePage}>
        <main className={styles.main}>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={{ span: 10 }} lg={{ span: 8 }}>
                <h1 className={styles.title}>Blog</h1>

                <article className={styles.post}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <time className={styles.date}>{pretty}</time>

                  <div style={{ marginTop: 18, color: '#c9d9ee' }}>
                    {paragraphs.map((para, idx) => (
                      <p key={idx} style={{ marginBottom: '1rem' }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </article>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </Layout>
  )
}
