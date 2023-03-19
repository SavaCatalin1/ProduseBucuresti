import dynamic from 'next/dynamic';
import React from 'react'
import '../styles/globals.css'
import {
  Box
} from "./FooterStyles";


function Footer() {
  return (
    <Box id='footer' className='text-center h-20 justify-center align-middle'>
          <h1 style={{ color: "black", 
                      textAlign: "center", 
                      marginTop: "-50px" ,
                      fontWeight: "400",
                      fontSize: "20px"}}>
            Contact
          </h1>
      <p className='text-sm'>Telefon: <i>0728463737</i> </p>
      <p className='mt-5'>Bucuresti</p>
    </Box>
  )
}

export default dynamic (() => Promise.resolve(Footer), {ssr:false});