import { Col, Row } from "react-bootstrap";
import ImageHeader from "./image-header";
import styles from './developer-card.module.scss'
import Orb from "./Orb";
import ProjectCard from "./project-card";

export default function DeveloperCard(props) {
    const data = props.developerCardData || {};
    const frontend = data.frontend || [];
    const backend = data.backend || [];
    const ai = data.ai || [];
    const projectCardData = props.projectCardData || {}
    return (
        <Row className={styles.container}>


            <Col lg={{ span: 12 }} xs={{ span: 12 }} >
                <Col xl={{ span: 12, offset: 0 }} lg={{ span: 10, offset: 1 }}>
                    <Row className={styles.innerRow}>
                        {/* Left: Icon + title */}
                        <Col xxxl={{ span: 2, offset: 2 }} xl={{ span: 2, offset: 1 }} lg={{ span: 12 }} md={{ span: 12 }} className={styles.iconCol}>
                            <div className={styles.iconWrap}>
                                <ImageHeader imgSrc={data.imgSrc} header={data.header} />
                            </div>
                        </Col>

                        {/* Middle: Description */}
                        <Col xxxl={{span:4}} xl={{ span: 5 }} lg={{ span: 12 }} md={{ span: 8 }} className={styles.descCol}>
                            <div className={styles.description}>
                                <p >{data.description}</p>
                            </div>

                            <div className={styles.dottedDivider}></div>

                            <ProjectCard cardData={projectCardData} />


                        </Col>

                        {/* Right: Tools lists */}
                        <Col xxxl={{ span: 3,offset:1 }} xl={{ span: 4,offset:0 }} lg={{ span: 6, offset: 3 }} md={{ span: 6 }} className={styles.toolsCol}>
                            <h2 className={styles.toolsIntro}>{data.toolDescription}</h2>
                            <div className={styles.toolsGrid}>
                                <div className={styles.toolsSection}>
                                    <h6 className={styles.toolsHeading}>Frontend</h6>
                                    <ul>
                                        {frontend.map((it, i) => <li key={i}>{it}</li>)}
                                    </ul>
                                </div>
                                <div className={styles.toolsSection}>
                                    <h6 className={styles.toolsHeading}>Backend</h6>
                                    <ul>
                                        {backend.map((it, i) => <li key={i}>{it}</li>)}
                                    </ul>
                                </div>
                                <div className={styles.toolsSection}>
                                    <h6 className={styles.toolsHeading}>AI</h6>
                                    <ul>
                                        {ai.map((it, i) => <li key={i}>{it}</li>)}
                                    </ul>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Col>

            </Col>
            <Orb variant={1} />
            <Orb variant={2} />
        </Row>
    )
}