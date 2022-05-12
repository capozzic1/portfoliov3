import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from './hero.module.scss'
import ImageHeader from './image-header';

export default function Hero(props) {
    const header = props.introHeader.header;
    const listItems = props.introHeader.heroList.map((item, idx) => {
       return <li key={idx}>{item}</li>
    })
    return (
        <Row>
            <Col className={styles.heroContainer}>
                <ImageHeader  fullWidthHeader={true} imgSrc={props.introHeader.heroIcon} header={header}/>
                <ul className={styles.heroList}>
                    {listItems}
                </ul>
            </Col>
        </Row>
    )
}