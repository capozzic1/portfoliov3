import { Col, Row } from "react-bootstrap";
import styles from './image-header.module.scss';
import Image from 'next/image';

export default function ImageHeader(props) {


return (
    <Row>
      <Col className={styles.headerContainer}>
        <Image src={props.imgSrc} alt ="portfolio" width={100} height={100}/>
        <Col className={styles.h2Container}>
            <h2 className={styles.headerH2}>{props.header}</h2>
        </Col>
      </Col>
    </Row>
    )
}

//styles.h2Container