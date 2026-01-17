import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from './hero.module.scss'
import ImageHeader from './image-header';

export default function Hero(props) {
    console.log(props)
    const header = props.introHeader.header;
    const listItems = props.introHeader.heroList.map((item, idx) => {
        return <li key={idx}>{item}</li>
    })
    return (
        <Row>
            <Col className={styles.heroContainer}>
                <Image src={props.introHeader.heroIcon} alt="portfolio" width={100} height={100} />
                {/* <ImageHeader  fullWidthHeader={true} imgSrc={props.introHeader.heroIcon} header={header}/> */}
                <Col xxl={{ span: 4, offset: 1 }} xs={{ span: 10, offset: 1 }} md={{ span: 7, offset: 1 }}>
                    <div>
                        <h2 className={`${styles.introHeader} ${styles['fade-in']}`}>{props.introHeader.header}</h2>
                        <ul className={`${styles.heroList} ${styles['fade-in']}`}>
                            {listItems}
                        </ul>
                    </div>
                    <div className={`${styles.orb} ${styles.orb1}`}></div>
                    <div className={`${styles.orb} ${styles.orb2}`}></div>
                </Col>
            </Col>
        </Row>
    )
}