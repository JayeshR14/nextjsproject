import styles from '../styles/heroSection.module.css'
import heroStyle from '../styles/common.module.css'
import Link from 'next/link'
import Image from 'next/image'
import aboutImage from '../../../public/about.svg'
const heroComponent = ({title, imageUrl}) => {
  return (
    <>
    <div className={styles.main_section}>
        <div className={heroStyle.container}>
            <div className={heroStyle.grid_two_section}>
             <div className={styles.hero_content}>
             <h1>{title}</h1>
                        <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today.
                        </p>
            <Link href="/movie">
             <button>Explore movies</button>
             </Link>
             </div>
             <div className={styles.hero_image}>
             <Image src={imageUrl} height={500} width={500}/>
             </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default heroComponent
