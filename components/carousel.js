import React, { useState } from 'react';
import  { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import ThumbnailNavigator from './thumbnail-navigator';
import styles from './carousel.module.scss';

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
    // use the index of the arr to move from slide to slide
    // keep an active slide, it will be the one shown to the user. 
    // React.Children.map(children, () => {
    //     // console.log(children)
    // })
    //thumbnailNavigator it would take the current index as well as an array of slides
    return (
        <div className={styles.carouselContainer}>
            <FaArrowAltCircleLeft className={styles.leftArrow} onClick={
                () => {
                    if (activeSlideIndex == 0) {
                        setActiveSlideIndex(2);
                    } else {
                        setActiveSlideIndex(activeSlideIndex - 1);
                    }
                }
            }/>
            <div className={styles.leftBlock}>
            </div>
           <div className={styles.slideContainer}>
            {slides[activeSlideIndex]}
            </div>
            <div className={styles.rightBlock}>
           </div>
           <FaArrowAltCircleRight  className={styles.rightArrow} onClick={() => { 
               if (activeSlideIndex !== 2) { 
                 setActiveSlideIndex(activeSlideIndex + 1) 
               } else {
                setActiveSlideIndex(0) 
               }
               }}/>
   
           <ThumbnailNavigator setSlide={setActiveSlideIndex}>
               {slides}
           </ThumbnailNavigator>
           
           <div className={styles.carouselHeader}>
               <h1><a href={props.headerData[activeSlideIndex].url}>{props.headerData[activeSlideIndex].header}</a></h1>
               </div>
        </div>
    )
}