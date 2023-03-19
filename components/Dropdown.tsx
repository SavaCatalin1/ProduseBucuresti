"use client"
import dynamic from 'next/dynamic';
import React from 'react'

function Dropdown({ bigtext, smalltext }: {bigtext: string, smalltext:string}) {
  return (
    <div className='p-3 bg-gray-50 hover:bg-gray-100 rounded-3xl mt-2 mr-2'>
            <div className="font-semibold">{bigtext}</div>
            <div className="text-sm font-light text-gray-500 dark:text-gray-400">{smalltext}</div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Dropdown), {ssr:false});