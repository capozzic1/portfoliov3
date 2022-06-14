import Image from 'next/image';
import { Col } from 'react-bootstrap';
import styles from './photograph.module.scss';

export default function Photograph(props) {
    return (
        <Col xs={{ span:12, offset: 0}}>
            <div className={styles.photographContainer}>
                <div className={styles.imageContainer} >
                    <Image src={props.src} height={300} width={300} />
                    {/* https://via.placeholder.com/300  */}
                </div>
                <div className={styles.headerContainer}>
                    <h2>{props.name}</h2>
                </div>
            </div>
        </Col>
    )
}