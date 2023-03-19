import React from 'react'
import { previewData } from 'next/headers'
import Banner from '../../components/Banner'
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';

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
        <Banner banner={banner}/>
    </div>
}

export default HomePage