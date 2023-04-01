import dynamic from 'next/dynamic';
import React from 'react'
import '../styles/globals.css'
import Newsletter from './Newsletter';


function Footer() {
  return (
    <div className='footerContainer'>
      <Newsletter/>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Footer), {ssr:false});