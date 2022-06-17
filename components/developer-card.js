import { Col, Row } from "react-bootstrap";
import Card from "./card";
import CardContent from "./card-content";
import ImageHeader from "./image-header";
import styles from './developer-card.module.scss'
export default function DeveloperCard(props) {
    // const icons = props.developerCardData.icons.map((obj, index, arr) => 
    // <Col lg={6} key={index}><span>{obj.name}</span></Col>
    //col 6 col 6 
    //divs stacked 
    //output will be 2 cols full of divs 
    const firstCol = props.developerCardData.icons.slice(0,3).map((icon, id) => <div key={id}>{icon.name}</div>)
    const secondCol = props.developerCardData.icons.slice(3).map((icon, id)=> <div key={id}>{icon.name}</div>)
// )
    return (
        <Row className={`${styles.container}`}>
            <Col xs={{ span: 10, offset: 1}} lg={{ span: 10, offset: 1}}>
               
                <Card cardData={props.developerCardData} bgColor="#12173F" borderRadius={false}>
                <Col lg={{ span: 8, offset: 2}}>
                    <Row>
                    <Col lg={{ span: 3, offset: 1}} xl={{ span:4, offset: 0}}>
                    <ImageHeader imgSrc={props.developerCardData.imgSrc} header={props.developerCardData.header} />
                    </Col>
                    {/* <CardContent contentData={props.developerCardData}></CardContent> */}
                    <Col xs={{ span: 10, offset: 1}} lg={{ span:4, offset: 0}} xl={{ span:4, offset: 0}}>
                        <Col lg={8} className={styles.descriptionContainer}>
                         <p className={styles.description}>{props.developerCardData.description}</p>
                        </Col>
                    </Col>
                    <Col lg={{ span:4, offset: 0}} xl={{ span:4, offset: 0}}>
                        <Row>
                            <Col xs={{ span: 11, offset: 1}}>
                    <h2>{props.developerCardData.toolDescription}</h2>
                    <div className={styles.languageContainer}>
                    <Row className={styles.iconContainer}>
                    <Col lg={{ span:6, offset: 0 }} xs={{ span: 6, offset: 1}}>
                        {firstCol}
                    </Col>
                    <Col lg={{ span:6, offset: 0 }} xs={{ span: 6, offset: 1}}>
                        {secondCol}
                    </Col>
                    </Row>
                    </div>
                    </Col>
                    </Row>
                    </Col>
                    </Row>
                    </Col>
                    
                </Card>
                </Col>
    
        </Row>
    )
}