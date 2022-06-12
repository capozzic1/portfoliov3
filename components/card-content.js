import { Col } from 'react-bootstrap'
import styles from './card-content.module.scss'

export default function CardContent(props) {
    //li with an img and a span element
    //li img span
    //li img span
    const listItems = props.contentData.icons.map((obj, index) => 
        <li key={index}><span>{obj.name}</span></li>
    )
    return (
        <Col xs={{ span: 10, offset: 1}} lg={{ span:8, offset: 0}} className={styles.container}>
            <Col xs={{ span: 10, offset: 1}} lg={{ span:2, offset: 0}}>
            <p className={styles.description}>{props.contentData.description}</p>
            </Col>
            <Col lg={{ span:2, offset: 0}}>
            <h2>{props.contentData.toolDescription}</h2>
            <div className={styles.languageContainer}>
            <ul>{listItems}</ul>
            </div>
            </Col>
        </Col>
    )
}