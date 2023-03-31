import dynamic from 'next/dynamic';
import React from 'react'
import '../styles/globals.css'


function Footer() {
  return (
    <div className='footerContainer'>
      <h1 className='footerTop'>Contact</h1>
      <p className='footerMid'>Telefon: <i>0764829341</i></p>
      <p className='footerBot'>Bucuresti</p>

    </div>
  )
}

export default dynamic (() => Promise.resolve(Footer), {ssr:false});