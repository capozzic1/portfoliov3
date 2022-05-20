import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './header.module.css'
import { FaBars } from 'react-icons/fa'

export default function Header() {
    return (
        <Row className="justify-content-between">
        <Col xs={2}>
        <a>Lucid Web Dream</a>
        </Col>
        <Col className={styles.navbtnContainer} xs={2}>
            <FaBars />
        </Col>
        </Row>
    )
}