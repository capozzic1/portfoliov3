import Banner from "/components/banner";
import Layout from "/components/layout";
import Carousel from "/components/carousel";
import { Row, Col } from 'react-bootstrap';
import projectsData from '../data/projects.json';
import homeData from '../data/index.json';
import styles from '../styles/projects.module.scss';
import Orb from '/components/Orb';
export async function getStaticProps() {
    const projectPageContent = projectsData.projectPageContent;

    return {
        props: {
            projectPageContent
        }
    }
}

export default function Projects( { projectPageContent }) {
    const projectData = projectPageContent.projects;
    return (
        <Layout>

            <main className={styles.main}>
                <Row>
                    <Col xl={{span:10, offset: 1}} xxxl={{span:10, offset: 2}} className={styles.colPadRight}>
                        <h2 className={styles.recentTitle} >Recent Projects</h2>
                        <div className={styles.recentProjectsContainer}>
                            <div className={styles.videoContainer}>
                                <div className={styles.videoInner}>
                                    <iframe src="https://www.youtube.com/embed/KJ-bnvzZUms?si=5AqgPahpMUUGQnSl" title="Hospital demo" className={styles.fillFrame} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                </div>
                            </div>
                            <div className={styles.projectText}>
                                <h3 className={styles.projectTitle}>Hospital management system</h3>
                                <p className={styles.projectParagraph}>A full-stack healthcare management platform supporting patient records, scheduling, authentication, and role-based access.</p>
                                <p>Tech stack: Java, Spring, Angular</p>
                            </div>
                        </div>
                    </Col>

                    <Col xxl={{span:10, offset: 1}} xxxl={{span:10, offset: 2}} className={styles.olderSection}>
                        <h2 className={styles.olderTitle}>Older Projects</h2>
                        <div className={styles.recentProjectsContainer}>
                            <div className={styles.videoContainer}>
                                <div className={styles.videoInner}>
                                    <div className={styles.mediaInner}>
                                        <Carousel headerData={homeData.homePageContent && homeData.homePageContent.homePageContent ? homeData.homePageContent.homePageContent.carouselContent : homeData.homePageContent && homeData.homePageContent.carouselContent ? homeData.homePageContent.carouselContent : []}>
                                            <img src="/checkingoverview.png" alt="slide 1" className={styles.fillMedia} />
                                            <img src="/savingsoverview.png" alt="slide 2" className={styles.fillMedia} />
                                            <img src="/cdoverview.png" alt="slide 3" className={styles.fillMedia} />
                                        </Carousel>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.projectText}>
                                <h3 className={styles.projectTitle}>Citi Marketing Pages</h3>
                                <p className={styles.projectParagraph}>Angular app where I helped the team create UI components and integrate front-end designs into production pages.</p>
                                <p>Tech stack: Angular, Javascript, HTML, CSS, Content Management System</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Orb variant={1} />
                <Orb variant={2} />
            </main>
        </Layout>
    )
}