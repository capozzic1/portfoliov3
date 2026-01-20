import { Col, Row } from "react-bootstrap";
import Button from "./button";

import ImageHeader from "./image-header";
import styles from './work-experience-card.module.scss';

export default function WorkExperienceCard(props) {
    const borderColor = "3px solid #7A8DC7";
    const items = props.cardData && props.cardData.items;

    return (
        <Row className={styles.projectRow}>
            <Col xs={{ span: 10, offset: 1}}>
                <Col lg={{ span: 2, offset: 5}} md={{ span: 8, offset: 2}} className={styles.projectContainer}>
                    {/* <Card cardData={props.cardData} bgColor="#3E518C" border={borderColor}>  */}
                    <div className={styles.cardContent}>
                        {/* If items provided, render a simple grid for them (used for Work Experience) */}
                        {items && items.length > 0 ? (
                            <div className={styles.itemsWrapper}>
                                <h2 className={styles.itemsHeader}>{props.cardData.header}</h2>
                                <div className={styles.itemsGrid}>
                                    {items.map((it, idx) => (
                                        <div key={idx} className={styles.itemBox}>
                                            <div className={styles.itemCompany}>{it.company}</div>
                                            <div className={styles.itemTitle}>{it.title}</div>
                                            <div className={styles.itemYears}>{it.years}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <>
                                <Col xl={{ span: 5, offset: 2 }}>
                                    <ImageHeader imgSrc={props.cardData.imgSrc} header={props.cardData.header} />
                                </Col>
                                <div className={styles.btnContainer}>
                                    <Button ctaText={props.cardData.ctaText} bgColor="#3E518C" border={borderColor} />
                                </div>
                            </>
                        )}
                    </div>
                    {/* </Card> */}
                </Col>
            </Col>
        </Row>
    )
}
