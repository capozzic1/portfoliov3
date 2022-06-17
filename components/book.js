import { Col, Row } from "react-bootstrap";
import styles from './book.module.scss';

export default function Book(props) {

    const firstPage = props.firstPage.map((photo, id) => <div key={id}  className={styles.photo}>{photo}</div>)
    const secondPage = props.secondPage.map((photo, id) => <div  key={id} className={styles.photo}>{photo}</div>)
    return (
        <Row className={styles.container}>
            <Col className={styles.leftSide} lg={{ span: 3, offset: 3}} md={{ span: 6, offset: 3}}>
                {firstPage}
            </Col>
            <Col  className={styles.rightSide} lg={{ span: 3, offset: 0}} md={{ span: 6, offset: 3}}>
                {secondPage}
            </Col>
        </Row>
    )
}