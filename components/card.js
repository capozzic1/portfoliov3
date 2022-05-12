import { Image } from "react-bootstrap";
import  Col  from "react-bootstrap/Col";
import  Row  from "react-bootstrap/Row";
import styles from './card.module.scss';
import ImageHeader from "./image-header";

export default function Card(props) {

    const header = props.cardData.header;
    const imgSrc = props.cardData.imgSrc;

    return (
        <Row>
            <Col xs={{ span: 10, offset:1 }} className={styles.cardContainer}  style={{ backgroundColor: props.bgColor }}>
              <ImageHeader imgSrc={imgSrc} header={header} />
              {props.children}
            </Col>
        </Row>
    )
}