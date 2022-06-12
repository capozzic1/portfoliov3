import React from 'react';
import styles from './thumbnail.module.scss';

export default function ThumbnailNavigator(props) {
    const thumbnails = React.Children.map(props.children, (child, index) => {
               return <div style={{ border: props.activeSlide == index ? "3px solid black" : "none" }} className={styles.thumbnail} onClick={ () => { props.setSlide(index) }}>{child}</div> 
            })
    return (
        <div className={styles.thumbnailContainer}>
            {thumbnails}
        </div>
    )
}