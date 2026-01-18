import Link from 'next/link';
import styles from './button.module.scss';

export default function Button(props) {

    return (
        <Link href="projects">
            {/* style={{ background : props.bgColor, border: props.border }} */}
        <button className={styles.ctaButton} >{props.ctaText}</button> 
        </Link>
    )
}