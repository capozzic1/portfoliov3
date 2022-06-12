import { Image } from "react-bootstrap";
import  Col  from "react-bootstrap/Col";
import  Row  from "react-bootstrap/Row";
import styles from './card.module.scss';
import ImageHeader from "./image-header";

export default function Card(props) {

    const header = props.cardData.header;
    const imgSrc = props.cardData.imgSrc;
    // borderRadius: props.borderRadius === false ?  "none" : "10px" 
    return (
            <div className={styles.cardContainer}  style={{ 
              backgroundColor: props.bgColor, 
              border: props.border,
            
              }}>
              {/* <ImageHeader imgSrc={imgSrc} header={header} /> */}
              {props.children}
            </div>
    )
}