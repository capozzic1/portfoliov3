import Head from 'next/head'
import Layout from '/components/layout'
import styles from '../styles/blog.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

export default function SinglePost() {
  return (
    <Layout>

      <div className={styles.singlePage}>
        <main className={styles.main}>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={{ span: 10 }} lg={{ span: 8 }}>
                <h1 className={styles.title}>Blog</h1>

                <article className={styles.post}>
                  <h2 className={styles.postTitle}>From UI Developer to Full-Stack: My Level Up Journey</h2>
                  <time className={styles.date}>Jan 16 2026</time>

                  <div style={{ marginTop: 18, color: '#c9d9ee' }}>
                    <p>
                      Ever since getting laid off in April 2025, I felt this strong urge to level up. For a few years, I had been working as a user interface developer across multiple companies, often using the same front-end stack. When I suddenly had time on my hands, I decided to use it intentionally—to push beyond UI work and start building toward becoming a full-stack developer.
                    </p>

                    <p>
                      I kicked off that journey by diving into the IBM Java Developer Professional Certificate. For about three months, I focused heavily on backend fundamentals, building projects with Java, Spring MVC, Spring Boot, Docker, MySQL, and MongoDB. This program is where I completed the capstone project featured on my projects page. After wrapping it up, I didn’t want to leave it there—I went back and modernized the application by rewriting the Spring MVC frontend in Angular.
                    </p>

                    <p>
                      Along the way, platforms like Coursera and Pluralsight became essential. They gave me fast access to high-quality courses and let me explore topics deeply without friction. Over time, I completed 26 additional courses covering Java data structures, SQL, software architecture and design, and AWS. I also leaned into modern tools like ChatGPT and GitHub Copilot—not as shortcuts, but as learning partners that helped me reason through problems, explore alternatives, and move faster while still understanding the “why” behind the code.
                    </p>
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
