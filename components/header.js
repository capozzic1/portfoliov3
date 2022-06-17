import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './header.module.css'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

export default function Header() {
    return (
        <Row className={styles.headerRow}>
        <Col className={styles.homeButtonContainer} xs={6} xl={{ span: 3, offset: 0}}>
        <Link href="/"><a className={styles.homeButton}>Lucid Web Dream</a></Link>
        </Col>
        <Col className={styles.navbtnContainer} xs={{ span: 4, offset: 1}} xl={{ span: 5, offset: 3}}>
         <div  className={styles.projectsButtonContainer}>
        <Link href="/projects"><a className={styles.projectsButton}>Projects</a></Link>
         </div>
        </Col>
        </Row>
    )
}