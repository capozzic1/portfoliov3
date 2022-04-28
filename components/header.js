import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './header.module.css'

export default function Header() {
    return (
        <Row className="justify-content-between">
        <Col xs={2}>
        <a>Lucid Web Dream</a>
        </Col>
        <Col className={styles.navbtnContainer} xs={2}>
        <FontAwesomeIcon icon={solid('bars')} />
        </Col>
        </Row>
    )
}