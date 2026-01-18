import React, { useState } from 'react';
import  { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import ThumbnailNavigator from './thumbnail-navigator';
import styles from './carousel.module.scss';
import { Col, Row } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
export default function Carousel(props) {
    //show 1 image at a time
    //have a starting index
    //have left and right arrows
    //have the thumbnail navigator on the bottom   
    // console.log(React.Children.toArray(children))
    // const thirdEl = React.Children.toArray(children)[2];
    // const firstEl = React.Children.toArray(children)[0]
    const slides = React.Children.toArray(props.children);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const slide = (direction) => {
        if (direction == "left") {
        if (activeSlideIndex == 0) {
            setActiveSlideIndex(2);
        } else {
            setActiveSlideIndex(activeSlideIndex - 1);
        }
        } else if (direction == "right") {
            if (activeSlideIndex !== 2) { 
                setActiveSlideIndex(activeSlideIndex + 1) 
              } else {
               setActiveSlideIndex(0) 
              }
        }  
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => slide("right"),
        onSwipedRight: () => slide("left"),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
      });
    // use the index of the arr to move from slide to slide
    // keep an active slide, it will be the one shown to the user. 
    // React.Children.map(children, () => {
    //     // console.log(children)
    // })
    //thumbnailNavigator it would take the current index as well as an array of slides
    return (
        <Row className={styles.carouselWrapper}> 
            <Col className={styles.carouselOuterContainer} >
        <div {...handlers} className={styles.carouselContainer}>
  
            <Col xs={1} className={styles.leftBlock}>
            {/* ( rgba(0, 0, 0, 0.9) 100%, rgba(0, 0, 0, 0.9)100%),url(checkingoverview.png);} */}
            <FaArrowAltCircleLeft  className={styles.leftArrow} onClick={
                () => { slide("left") }
            }/>
            </Col>
            <Col xs={10} lg={8}>
           <div className={styles.slideContainer}>
            {slides[activeSlideIndex]}
            </div>
            </Col>
            <Col xs={1} className={styles.rightBlock}>
            <FaArrowAltCircleRight  className={styles.rightArrow} onClick={() => slide("right")}/>
            </Col>
     
           <div className={styles.carouselHeader}>
               <h1><a href={props.headerData[activeSlideIndex].url}>{props.headerData[activeSlideIndex].header}</a></h1>
               </div>
        </div>
        <Col xs={12}>
           <ThumbnailNavigator activeSlide={activeSlideIndex} setSlide={setActiveSlideIndex}>
               {slides}
           </ThumbnailNavigator>
           </Col>
        </Col>

        </Row>
    )
}