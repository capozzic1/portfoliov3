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
        <Col xs={10} className={styles.container}>
        <p className={styles.description}>{props.contentData.description}</p>
        <h2>{props.contentData.toolDescription}</h2>
        <div className={styles.languageContainer}>
        <ul>{listItems}</ul>
        </div>
        </Col>
    )
}