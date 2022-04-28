import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from './hero.module.scss'

export default function Hero(props) {
    const header = props.introHeader.header;
    const listItems = props.introHeader.heroList.map((item, idx) => {
       return <li key={idx}>{item}</li>
    })
    return (
        <Row>
            <Col className={styles.heroContainer}>
                <div className={styles.iconContainer}>
                    <Image src={props.introHeader.heroIcon} alt="development-icon" width={100} height={100} className={styles.heroIcon}></Image>
                </div>
                <h1>{header}</h1>
                <ul className={styles.heroList}>
                    {listItems}
                </ul>
            </Col>
        </Row>
    )
}