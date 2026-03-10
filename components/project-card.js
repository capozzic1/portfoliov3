import { Col, Row } from "react-bootstrap";
import Button from "./button";

import ImageHeader from "./image-header";
import styles from './project-card.module.scss';

export default function ProjectCard(props) {
    return (
        <div className={styles.projectCard}>
            <Row className={styles.projectRow}>
                <Col xxxl={{ span: 4, offset: 4 }} xl={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
                    <div className={styles.cardContent}>
                        <Col xl={12} className={styles.projectContainer}>
                            {(
                                <>
                                    <Col xxxl={{ span: 7 }} xl={{ span: 6, offset: 1 }}>
                                        <ImageHeader imgSrc={props.cardData.imgSrc} header={props.cardData.header} />
                                    </Col>
                                    <div className={styles.btnContainer}>
             
                                        <Button ctaText={props.cardData.ctaText} />
                                    </div>
                                </>
                            )}
                        </Col>
                    </div>

                </Col>
            </Row>
        </div>
    )
}