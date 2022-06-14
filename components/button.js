import Link from 'next/link';
import styles from './button.module.scss';

export default function Button(props) {

    return (
        <Link href="projects">
        <button className={styles.ctaButton} style={{ background : props.bgColor, border: props.border }}>{props.ctaText}</button> 
        </Link>
    )
}