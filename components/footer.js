import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from './footer.module.scss'
import { FaGithub, FaLinkedin, FaStackExchange } from 'react-icons/fa'

export default function Footer(props) {
    return (
        <Row className={styles.footerContainer}>
            {/* <Row className={styles.iconContainer}> */}
            <h2>{props.footerContent.header}</h2>
            <Col xs={12} lg={{ span: 2, offset: 5}}>
                <Row>
                <Col xs={{ span: 2, offset: 3}} lg={1} xl={{ span:3, offset: 2}}>
                <FaGithub />
                </Col>
                <Col xs={2} lg={1} xl={3}>
                <FaLinkedin />
                </Col>
                <Col xs={2} lg={1} xl={3}>
                <FaStackExchange />
                </Col>
                </Row>
            </Col>
           {/* </Row> */}
           <Col className={styles.aboutContainer} xs={12}>
           <h2>{props.footerContent.header2}</h2>
           <p>{props.footerContent.description}</p>
           </Col>
        </Row>
    )
}