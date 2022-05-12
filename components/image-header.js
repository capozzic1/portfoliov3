import { Col, Row } from "react-bootstrap";
import styles from './image-header.module.scss';
import Image from 'next/image';

export default function ImageHeader(props) {


return (
    <Row>
      <Col>
        <div className={styles.headerContainer}>
        <Image src={props.imgSrc} alt ="portfolio" width={100} height={100}/>
        <div className={props.fullWidthHeader ? `${styles.h2Container} ${styles.fullWidthHeader}` : `${styles.h2Container} ${styles.sixtyWidthHeader}` }>
            <h2 className={styles.headerH2}>{props.header}</h2>
        </div>
        </div>
      </Col>
    </Row>
    )
}

//styles.h2Container