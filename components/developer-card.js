import { Col, Row } from "react-bootstrap";
import ImageHeader from "./image-header";
import styles from './developer-card.module.scss'

export default function DeveloperCard(props) {
    const data = props.developerCardData || {};
    const frontend = data.frontend || [];
    const backend = data.backend || [];
    const ai = data.ai || [];

    return (
        <Row className={styles.container}>
            <Col lg={{ span: 12 }} xs={{ span: 12 }} >
                    <Col xl={{span: 12, offset: 0}} lg={{ span: 10, offset: 1 }}>
                        <Row className={styles.innerRow}>
                            {/* Left: Icon + title */}
                            <Col xl={{ span: 2, offset: 2 }} lg={{ span: 3 }} md={{ span: 12 }} className={styles.iconCol}>
                                <div className={styles.iconWrap}>
                                    <ImageHeader imgSrc={data.imgSrc} header={data.header} />
                                </div>
                            </Col>

                            {/* Middle: Description */}
                            <Col xl={{ span: 4 }} lg={{ span: 4 }} md={{ span: 6 }} className={styles.descCol}>
                                <p className={styles.description}>{data.description}</p>
                            </Col>

                            {/* Right: Tools lists */}
                            <Col xl={{ span: 4 }} lg={{ span: 5 }} md={{ span: 6 }} className={styles.toolsCol}>
                                <h3 className={styles.toolsIntro}>{data.toolDescription}</h3>
                                <div className={styles.toolsGrid}>
                                    <div className={styles.toolsSection}>
                                        <div className={styles.toolsHeading}>Frontend</div>
                                        <ul>
                                            {frontend.map((it, i) => <li key={i}>{it}</li>)}
                                        </ul>
                                    </div>
                                    <div className={styles.toolsSection}>
                                        <div className={styles.toolsHeading}>Backend</div>
                                        <ul>
                                            {backend.map((it, i) => <li key={i}>{it}</li>)}
                                        </ul>
                                    </div>
                                    <div className={styles.toolsSection}>
                                        <div className={styles.toolsHeading}>AI</div>
                                        <ul>
                                            {ai.map((it, i) => <li key={i}>{it}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
            
            </Col>
        </Row>
    )
}