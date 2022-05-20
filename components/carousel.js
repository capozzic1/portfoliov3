import React from 'react';
import  { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import ThumbnailNavigator from './thumbnail-navigator';
import styles from './carousel.module.scss';

export default function Carousel({ children }) {
    //show 1 image at a time
    //have a starting index
    //have left and right arrows
    //have the thumbnail navigator on the bottom   
    // console.log(React.Children.toArray(children))
    // const thirdEl = React.Children.toArray(children)[2];
    // const firstEl = React.Children.toArray(children)[0]
    const slides = React.Children.toArray(children);
    const activeSlideIndex = 0;
    // use the index of the arr to move from slide to slide
    // keep an active slide, it will be the one shown to the user. 
    // React.Children.map(children, () => {
    //     // console.log(children)
    // })
    //thumbnailNavigator it would take the current index as well as an array of slides
    return (
        <div className={styles.carouselContainer}>
            <FaArrowAltCircleLeft className={styles.leftArrow}/>
            <div className={styles.leftBlock}>
            </div>
           <div className={styles.slideContainer}>
            {slides[activeSlideIndex]}
            </div>
            <div className={styles.rightBlock}>
           </div>
           <FaArrowAltCircleRight  className={styles.rightArrow}/>
   
           <ThumbnailNavigator>
               {slides}
           </ThumbnailNavigator>
           
           <div className={styles.carouselHeader}>
               <h1>Marketing page 1</h1>
               </div>
        </div>
    )
}