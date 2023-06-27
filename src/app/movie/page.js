import React from 'react'
import styles from '../styles/common.module.css'
import Link from 'next/link'
import MovieCard from '../components/movieCard'

const index = async() => {

const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ed144305cemsh8e4957f6fdc0591p11f8aejsn0930f7a7e1cd',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json();
const main_data = data.titles;
  return (
    <>
      <div className={styles.container}>
        <h1>Series and Movies</h1> 
        <div className={styles.card_section}>
         {main_data.map((data)=>{
           return <MovieCard key={data.id} {...data}/>
         })
         }
         </div>
      </div>
    </>
  )
}

export default index
