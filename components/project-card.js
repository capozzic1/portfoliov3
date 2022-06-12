import { Col, Row } from "react-bootstrap";
import Button from "./button";
import Card from "./card";
import ImageHeader from "./image-header";
import styles from './project-card.module.scss';

export default function ProjectCard(props) {
    const borderColor = "3px solid #7A8DC7";
    return (
        <Row className={styles.projectRow}>
            <Col xl={{ span: 8, offset: 2 }} xs={{ span: 10 , offset: 1}}>
                <Card cardData={props.cardData} bgColor="#3E518C" border={borderColor}>
                <Col xl={12} className={styles.projectContainer}>
                <Col xl={{ span: 5, offset: 2}}>
                <ImageHeader imgSrc={props.cardData.imgSrc} header={props.cardData.header} />
                </Col>
                <div className={styles.btnContainer}>
                <Button ctaText={props.cardData.ctaText} bgColor="#3E518C" border={borderColor} />
                </div>
                </Col>
                </Card>
            </Col>
        </Row>
    )
}