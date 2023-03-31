"use client"
import React from 'react'
import urlFor from '../lib/urlFor';
import dynamic from 'next/dynamic';
import '../styles/globals.css'
import { useStateIfMounted } from 'use-state-if-mounted';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReactWhatsapp from 'react-whatsapp';

type Props = {
  banner: Banner[];
}

function Banner({banner}: Props) {
  const [currentIndex, setCurrentIndex] = useStateIfMounted(0);
  const [currentId, setCurrentId] = useStateIfMounted(0);


  if(banner[0]){
    var imagess = urlFor(banner[currentId].image).url()
  }else{
    imagess = ""
  }
  var [images, setImages] = useStateIfMounted(imagess)
  

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? banner.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === banner.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div>
    <div className='hero-banner-container'>
        <div className='leftArrowStyles' onClick={goToPrevious}><ArrowBackIosNewIcon/></div>
      
        <div className='hero-banner-text'>
        <p className='beats-solo'>{banner[currentIndex].text_1}</p>
        <h3 className='hero-banner-text-h3'>{banner[currentIndex].text_2}</h3>
        <h1 className='hero-banner-text-h1'>{banner[currentIndex].text_3}</h1>
        <div className="flex h-screen/2 justify-center items-center mt-5 cursor-pointer mb-3">
                  <ReactWhatsapp number="+40728463737" message={urlFor(banner[currentId].image).url()} className="bg-[#25D366] text-white px-6 py-2 rounded-full w-23 h-30 flex justify-center flex-row" element="center">Trimite pe Whatsapp &#10551;</ReactWhatsapp>
              </div>
        </div>
        <img  src={urlFor(banner[currentIndex].image).url()} alt='pantofi' className='hero-banner-image'/>

        <div>
          <div className='desc'>
            {banner[currentIndex].description.map((item:string, index:number) => (
              <p key={index}>{item}</p>
            ))}
          </div>
      </div>
      <div className='rightArrowStyles' onClick={goToNext}><ArrowForwardIosIcon/></div>
    </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Banner), {ssr:false});
