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
                    <Col xl={{span:10, offset: 1}} xxxl={{span:10, offset: 2}} style={{paddingRight: '2rem'}}>
                        <h2 style={{fontSize: '4rem', marginBottom: '1rem', textShadow: '2px 2px 0 #000'}}>Recent Projects</h2>
                        <div style={{display: 'flex', alignItems: 'flex-start', gap: '2rem', marginTop: '1rem'}}>
                            <div style={{flex: '0 0 640px', maxWidth: 640}}>
                                <div style={{position: 'relative', paddingTop: '56.25%'}}>
                                    <iframe src="https://www.youtube.com/embed/KJ-bnvzZUms?si=5AqgPahpMUUGQnSl" title="Hospital demo" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%', objectFit: 'cover'}} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                </div>
                            </div>
                            <div className="project-text" style={{flex: '1'}}>
                                <h3 style={{fontSize: '2rem', marginTop: 0}}>Hospital management system</h3>
                                <p style={{lineHeight: 1.6}}>A full-stack healthcare management platform supporting patient records, scheduling, authentication, and role-based access.</p>
                                <p>Tech stack: Java, Spring, Angular</p>
                            </div>
                        </div>
                    </Col>

                    <Col xxl={{span:10, offset: 1}} xxxl={{span:10, offset: 2}} style={{paddingTop: '2rem'}}>
                        <h2 style={{fontSize: '3.2rem', marginBottom: '1rem', textShadow: '2px 2px 0 #000'}}>Older Projects</h2>
                        <div style={{marginTop: '1rem', display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>
                            <div style={{flex: '0 0 640px', maxWidth: 640}}>
                                <div style={{position: 'relative', paddingTop: '56.25%'}}>
                                    <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                                        <Carousel headerData={homeData.homePageContent && homeData.homePageContent.homePageContent ? homeData.homePageContent.homePageContent.carouselContent : homeData.homePageContent && homeData.homePageContent.carouselContent ? homeData.homePageContent.carouselContent : []}>
                                            <img src="/checkingoverview.png" alt="slide 1" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                            <img src="/savingsoverview.png" alt="slide 2" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                            <img src="/cdoverview.png" alt="slide 3" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                                        </Carousel>
                                    </div>
                                </div>
                            </div>  

                            <div className="project-text" style={{flex: '1'}}>
                                <h3 style={{fontSize: '2rem', marginTop: 0}}>Citi Marketing Pages</h3>
                                <p style={{lineHeight: 1.6}}>Angular app where I helped the team create UI components and integrate front-end designs into production pages.</p>
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