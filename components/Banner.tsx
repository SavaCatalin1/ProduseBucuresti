"use client"
import React, { useEffect } from 'react'
import urlFor from '../lib/urlFor';
import dynamic from 'next/dynamic';
import '../styles/globals.css'
import { useStateIfMounted } from 'use-state-if-mounted';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReactWhatsapp from 'react-whatsapp';
import { useSwipeable } from "react-swipeable";

type Props = {
  banner: Banner;
}

function Banner({banner}: Props) {
  const [currentIndex, setCurrentIndex] = useStateIfMounted(0);
  
  if(banner){
    var imagess = urlFor(banner.image[currentIndex]).url()
  }else{
    imagess = ""
  }
  var [images, setImages] = useStateIfMounted(imagess)
  

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? banner.image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === banner.image.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex);
  }

  const handlers = useSwipeable({
    onSwipedRight: () => goToNext(),
    onSwipedLeft: () => goToPrevious(),
  });

  useEffect(() => {
    banner.image.forEach((image:any) => {
      const img = new Image();
      img.src = image;
    });     
}, [])

  return (
    <div>
    <div className='hero-banner-container'>
      <div className='flex-piece'>
        <div className='hero-banner-text'>
        <p className='beats-solo'>{banner.text_1}</p>
        <h3 className='hero-banner-text-h3'>{banner.text_2}</h3>
        <h1 className='hero-banner-text-h1'>{banner.text_3}</h1>
        <div className="flex h-screen/2 justify-center items-center mt-5 cursor-pointer mb-3">
                  <ReactWhatsapp number="+40764829341" message={urlFor(banner.image[currentIndex]).url()} className="bg-[#25D366] text-white px-6 py-2 rounded-full w-23 h-30 flex justify-center flex-row" element="center">Trimite pe Whatsapp &#10551;</ReactWhatsapp>
              </div>
        </div>
              <div>
                <div className='image-div'>
                  <div className='leftArrowStyles' onClick={goToPrevious}><ArrowBackIosNewIcon/></div>
                  <img  src={urlFor(banner.image[currentIndex]).url()} alt='pantofi' className='hero-banner-image' {...handlers}/>
                  <div className='rightArrowStyles' onClick={goToNext}><ArrowForwardIosIcon/></div>
              </div>
              <div className='dotsContainer2'>{banner.image.map((slide:any, slideIndex:any) => (
                      <div key={slideIndex} className={currentIndex === slideIndex ? "dots-active" : "dots"} >⬤</div>))}</div>           
                  </div>
              </div>
                 <div className='desc'>
                {banner.description.map((item:string, index:number) => (
              <p key={index}>{item}</p>
            ))}
          </div> 

    </div>
    
      
    </div>
  )
}

export default dynamic (() => Promise.resolve(Banner), {ssr:false});
