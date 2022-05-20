import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from './footer.module.scss'
import { FaGithub, FaLinkedin, FaStackExchange } from 'react-icons/fa'

export default function Footer(props) {
    return (
        <Row className={styles.footerContainer}>
            <Col className={styles.iconContainer}>
            <h2>{props.footerContent.header}</h2>
            <div>
            <FaGithub />
            <FaLinkedin />
            <FaStackExchange />
            </div>
           </Col>
           <Col className={styles.aboutContainer} xs={12}>
           <h2>{props.footerContent.header2}</h2>
           <p>{props.footerContent.description}</p>
           </Col>
        </Row>
    )
}