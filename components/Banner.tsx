import React from 'react'
import Link from 'next/link'
import urlFor from '../lib/urlFor';
import dynamic from 'next/dynamic';
import '../styles/globals.css'

type Props = {
  banner: Banner[];
}

function Banner({banner}: Props) {
  return (
    
    <div className='hero-banner-container'>
      
      <div className='hero-banner-wrapper'>
        <div className='hero-banner-text'>
        <p className='beats-solo'>{banner[0].text_1}</p>
        <h3>{banner[0].text_2}</h3>
        <h1>{banner[0].text_3}</h1>
        </div>
        <img  src={urlFor(banner[0].image).url()} alt='pantofi' className='hero-banner-image'/>

        <div>
          <div className='desc'>
              <h5>Description</h5>
              <p>{banner[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Banner), {ssr:false});
