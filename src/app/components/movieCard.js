import React from 'react'
import Image from 'next/image';
import styles from '../styles/common.module.css'
import Link from 'next/link';

const MovieCard = (data) => {
  const {id, type, title, synopsis} = data.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
         <Image src={data.jawSummary.backgroundImage.url} height={250} width={200}/>
        </div>
        <div>
        <p>{title}</p>
        <p>{synopsis}</p>
        <Link href={`/movie/${id}`}>
        <button>
            Read more
        </button>
        </Link>
        </div>
      </div>
    </>
  )
}

export default MovieCard
