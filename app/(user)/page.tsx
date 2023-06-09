import React from 'react'
import { previewData } from 'next/headers'
import Banner from '../../components/Banner'
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import Head from 'next/head';


async function HomePage() {
  const querytwo = groq
`
  *[_type=='banner']{
    ...
  }
`


  const banner = await client.fetch(querytwo);
  if (previewData()){
    return <div></div>
  } 
    return <div>
      <Head>
        <title>Produse Bucuresti</title>
        <meta
          name="description"
          content="Produse Bucuresti - incaltaminte copii la cele mai bune preturi"
          key="desc"
        />
        <meta property="og:title" content="Produse Bucuresti" />
        <meta
          property="og:description"
          content="incaltaminte copii la cele mai bune preturi"
        />
      </Head>
      {banner.map((item:any,index:number) => (
        <Banner banner={item} key={index}/>
      ))}
        
    </div>
}

export default HomePage