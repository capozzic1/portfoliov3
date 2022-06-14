import { Col, Row } from 'react-bootstrap'
import styles from './banner.module.scss'

export default function Banner() {

    return (
        <Row >
            <Col xs={12}  className={styles.wrapper}>
            <div className={styles.container}>
            <h1>Projects</h1>
            </div>
        </Col>
        </Row>

    )
}