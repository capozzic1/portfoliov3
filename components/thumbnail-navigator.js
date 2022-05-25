import React from 'react';
import styles from './thumbnail.module.scss';

export default function ThumbnailNavigator(props) {
    const test = React.Children.map(props.children, (child, index) => {
               return <div className={styles.thumbnail} onClick={ () => { props.setSlide(index) }}>{child}</div> 
            })
    return (
        <div className={styles.thumbnailContainer}>
            {test}
        </div>
    )
}