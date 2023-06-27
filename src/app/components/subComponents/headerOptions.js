import styles from '../../styles/header.module.css' 
import Link from "next/link"
const headerOptions = () => {
  return (
    <>
    <div>
        <ul className={styles.headerLists}>
            <li className={styles.headerOptions}>
            <Link className={styles.headerComponents} href="/">
            Home
            </Link>
            </li>

            <li>
            <Link className={styles.headerComponents} href="/about">
            About
            </Link>
            </li>

            <li>
            <Link className={styles.headerComponents} href="/movie">
            Movie
            </Link>
            </li>

            <li>
            <Link className={styles.headerComponents} href="/contact">
            Contact
            </Link>
            </li>
        </ul>
    </div> 
    </>
  )
}

export default headerOptions
