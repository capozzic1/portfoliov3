import { Col, Row } from "react-bootstrap";
import Button from "./button";

import ImageHeader from "./image-header";
import styles from './project-card.module.scss';

export default function ProjectCard(props) {
    return (
        <div className={styles.projectCard}>
            <Row className={styles.projectRow}>
                <Col xxxl={{ span: 12 }} xl={{ span: 12 }} xs={{ span: 10 }}>
                    <div className={styles.cardContent}>
                        <Col xl={12} className={styles.projectContainer}>
                            
                                    {/* xxxl={{ span: 6 }} xl={{ span: 6, offset: 1 }} */}
                                    <Col >
                                        <ImageHeader imgSrc={props.cardData.imgSrc} header={props.cardData.header} />
                                    </Col>
                                    <div className={styles.btnContainer}>
             
                                        <Button ctaText={props.cardData.ctaText} />
                                    </div>
                            
                            
                        </Col>
                    </div>

                </Col>
            </Row>
        </div>
    )
}
