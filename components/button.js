import Link from 'next/link';
import styles from './button.module.scss';
import { Nav } from 'react-bootstrap';

export default function Button(props) {

    return (
        <Link href="/projects" passHref>
                <button className={styles.ctaButton} >{props.ctaText}</button>
        </Link>
    )
}