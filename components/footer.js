import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from './footer.module.scss'
import { FaGithub, FaLinkedin, FaStackExchange } from 'react-icons/fa'

export default function Footer(props) {
    return (
        <Row>
            <Col className={styles.footerContainer}>
            <h2>{props.footerContent.header}</h2>
            <FaGithub />
            <FaLinkedin />
           </Col>
        </Row>
    )
}