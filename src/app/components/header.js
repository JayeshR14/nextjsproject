import styles from '../styles/header.module.css'
import HeaderOptions from './subComponents/headerOptions'
const header = () => {
  return (
    <>
     <div className={styles.__mainHeader}>
       <div className={styles.headerName}>
         <p>nextJsProject</p>
       </div>
       <HeaderOptions/>
     </div>
    </>
  )
}

export default header
