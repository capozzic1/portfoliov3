import React from 'react';
import styles from './thumbnail.module.scss';

export default function ThumbnailNavigator({ children }) {
    const test = React.Children.map(children, (child) => {
        return <div className={styles.thumbnail}>{child}</div>
    })
    console.log(test)
    return (
        <div className={styles.thumbnailContainer}>
            {test}
        </div>
    )
}