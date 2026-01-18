import styles from './orb.module.scss'

export default function Orb({ variant = 1 }) {
  const v = String(variant);
  return <div className={`${styles.orb} ${styles['orb' + v]}`}></div>
}
