import React from 'react'
import styles from '../../styles/common.module.css'
import Image from 'next/image'
const Page = async({params}) => {

  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ed144305cemsh8e4957f6fdc0591p11f8aejsn0930f7a7e1cd',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
    <div className={styles.container}>
        <h2 className={styles.movie_title}>Netflix \ {main_data.type}</h2>
        <div>
          <div>
           <Image src={main_data.backgroundImage.url} width={600} height={300}/>
          </div>
          <div>
            <h1>{main_data.title}</h1>
            <h1>{main_data.synopsis}</h1>
          </div>
        </div>
    </div>
    </>
  )
}

export default Page
