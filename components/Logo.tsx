import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'

function Logo(props: any) {
    const {renderDefault, title} = props;

  return (
    <div className='flex items-center space-x-2'>
        <Image 
            className="rounded-full"
            height={50}
            width={50}
            src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"
            alt="logo"
        />
        <>{renderDefault(props)}</>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Logo), {ssr:false});