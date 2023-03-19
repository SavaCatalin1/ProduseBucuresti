import dynamic from 'next/dynamic';
import React from 'react'

function Button() {
  return (
    <button className='bg-black text-white px-6 py-2 rounded-full'>
        Contact
    </button>
  )
}

export default dynamic (() => Promise.resolve(Button), {ssr:false});