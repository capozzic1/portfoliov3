import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './header.module.css'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

export default function Header() {
    return (
        <Row className={styles.headerRow}>
            <Col className={styles.homeButtonContainer} md={{ span: 6 }} xs={12} xl={{ span: 3 }}>
                <Link href="/"><a className={styles.homeButton}>Lucid Web Dream</a></Link>
            </Col>
            <Col className={styles.navbtnContainer}  md={{ span: 6 }} xl={{ span: 9 }} xs={{ span: 12}} >
                <div className={styles.projectsButtonContainer}>
                    <Link href="/projects"><a className={styles.projectsButton}>Projects</a></Link>
                    <Link href="/blog"><a className={styles.projectsButton}>Blog</a></Link>

                </div>
            </Col>
        </Row>
    )
}