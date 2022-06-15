import { Col, Row } from "react-bootstrap";
import styles from './book.module.scss';

export default function Book(props) {

    const firstPage = props.firstPage.map(photo => <div className={styles.photo}>{photo}</div>)
    const secondPage = props.secondPage.map(photo => <div className={styles.photo}>{photo}</div>)
    return (
        <Row className={styles.container}>
            <Col className={styles.leftSide} lg={{ span: 3, offset: 3}}>
                {firstPage}
            </Col>
            <Col  className={styles.rightSide} lg={3}>
                {secondPage}
            </Col>
        </Row>
    )
}