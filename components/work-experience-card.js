import { Col, Row, Spinner } from "react-bootstrap";
import Button from "./button";

import ImageHeader from "./image-header";
import styles from './work-experience-card.module.scss';
import useExperience from "./useExperience";
import styles2 from  '../styles/spinner.module.scss'
export default function WorkExperienceCard(props) {
    const items = props.cardData && props.cardData.items;
    const { data: experience = [], isLoading, isError } = useExperience()
    console.log(experience)

    	

    return (
        
        isLoading ? (
            <div className={styles2.spinnerContainer}>
                     <Spinner animation="border" variant="primary" />
            </div>
        ) : (
            <Row className={styles.projectRow}>
                <Col xs={{ span: 10, offset: 1 }}>
                    <Col lg={{ span: 2, offset: 5 }} md={{ span: 8, offset: 2 }} className={styles.projectContainer}>
                    <div className={styles.cardContent}>
                        {/* If items provided, render a simple grid for them (used for Work Experience) */}
                        {experience && experience.length > 0 ? (
                            <div className={styles.itemsWrapper}>
                                <h2 className={styles.itemsHeader}>{props.cardData.header}</h2>
                                <div className={styles.itemsGrid}>
                                    {experience.map((it, idx) => (
                                        <div key={idx} className={styles.itemBox}>
                                            <div className={styles.itemCompany}>{it.company}</div>
                                            <div className={styles.itemTitle}>{it.position}</div>
                                            <div className={styles.itemYears}>{it.years}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <>
                            {/* fallback content if API fails */}
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
                            </>
                        )}
                    </div>
                    {/* </Card> */}
                </Col>
            </Col>
        </Row>
    )
)
}
