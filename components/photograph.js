import Image from 'next/image';
import { Col } from 'react-bootstrap';
import styles from './photograph.module.scss';

export default function Photograph(props) {
    return (
        <Col xs={{ span:12, offset: 0}} xl={{ span:6, offset: 3}}>
            <div className={styles.photographContainer}>
                <div className={styles.imageContainer} >
                    <Image src={props.src} height={300} width={400} layout="responsive"/>
                    {/* https://via.placeholder.com/300  */}
                </div>
                <div className={styles.headerContainer}>
                    <a href={props.url}><h2>{props.name}</h2></a> 
                </div>
            </div>
        </Col>
    )
}