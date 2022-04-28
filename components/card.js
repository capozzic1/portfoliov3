import  Col  from "react-bootstrap/Col";
import  Row  from "react-bootstrap/Row";
import styles from './card.module.scss';

export default function Card(props) {

    const header = props.projectCard.header;
    const ctaText = props.projectCard.ctaText;

    return (
        <Row>
            <Col xs={10} className={styles.cardContainer}>
                <img src="" alt="img" />
                <h2>{header}</h2>
                <button>{ctaText}</button>
            </Col>
        </Row>
    )
}