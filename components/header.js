import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './header.module.css'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

export default function Header() {
    return (
        <Row className="justify-content-between">
        <Col xs={2}>
        <Link href="/"><a className={styles.homeButton}>Lucid Web Dream</a></Link>
        </Col>
        <Col className={styles.navbtnContainer} xs={2}>
        <Link href="/projects"><a className={styles.projectsButton}>Projects</a></Link>
        </Col>
        </Row>
    )
}