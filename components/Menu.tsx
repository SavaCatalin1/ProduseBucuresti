"use client"
import React, { useEffect, useState } from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import urlFor from "../lib/urlFor";
import dynamic from "next/dynamic";
import { useStateIfMounted } from "use-state-if-mounted";
import ReactWhatsapp from "react-whatsapp";
import { useSwipeable } from "react-swipeable";


function Menu({search}:any){
  <link rel="preload" href="<your_image_source_here>" as="image"></link>
    const [currentIndex, setCurrentIndex] = useStateIfMounted(0);
    const [currentId, setCurrentId] = useStateIfMounted(0);
    const[onScreen, setOnScreen] = useStateIfMounted(true);
    const[maximized, setMaximized] = useStateIfMounted(false);

    const handlers = useSwipeable({
      onSwipedRight: () => goToNext(),
      onSwipedLeft: () => goToPrevious(),
    });

    if(search[0]){
      var imagesArray = search[currentId].image
    var imagess = imagesArray.map((item:any) => urlFor(item).url())
    }else{
      imagess = []
    }
    var [images, setImages] = useStateIfMounted(imagess)
    

    const slidesStyles={
        width: '100%',
        height: '100%',
        borderRadius: '15px',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundImage: `url(${images[currentIndex]})`,
        boxShadow: "14px 10px 33px -6px rgba(0,0,0,0.38)",
        WebkitBoxShadow: "14px 10px 33px -6px rgba(0,0,0,0.38)",
        MozBoxShadow: "14px 10px 33px -6px rgba(0,0,0,0.38)",
        backgroundRepeat: "no-repeat",
        transform: "scale(1)"
    }

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }

    const goToNext = () => {
      const isLastSlide = currentIndex === images.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex:any) => {
      setCurrentIndex(slideIndex)
    }

    
    const handleChange = (id:any) => {
         imagesArray = search[id].image
         imagess = imagesArray.map((item:any) => urlFor(item).url())
        setImages(imagess)
        setCurrentId(id)
    }

    useEffect(() => {
        setCurrentIndex(0)
        imagess.forEach((image:any) => {
          const img = new Image();
          img.src = image;
        });     
    }, [currentId])
    
    

    return (
      <div className="shop-big-div">
            <div className="shop-container">
                    <div className={onScreen ? "shop-options" : "w-0"}>
                        {search.map((item:any,index:number) => (
                        <div className={currentId === index ? "shop-left-item-active" : "shop-left-item"} key={index} onClick={() => handleChange(index)}>{item.title}</div>
                        ))}
                    </div>
                    
                      <div className={onScreen ? "shop-show" : "shop-show-full"}>
                                      <div className='sliderStyles'>
                                            <div className='leftArrowStyles2' onClick={goToPrevious}><ArrowBackIosNewIcon/></div>
                                            <div className='rightArrowStyles2' onClick={goToNext}><ArrowForwardIosIcon/></div>
                                            <div {...handlers} style={slidesStyles} className={maximized ? " " : "maximized"} onClick={() => maximized ? setMaximized(false) : setMaximized(true)}></div>
                                            
                                                <div className='dotsContainer'>{images.map((slide:any, slideIndex:any) => (
                                                          <div key={slideIndex} className={currentIndex === slideIndex ? "dots-active" : "dots"} onClick={() => goToSlide(slideIndex)}>⬤</div>
                                                        ))}</div>
                                                        <div className='indexNumberContainer'>
                                                                <div className='indexNumber'>
                                                                  {currentIndex+1}
                                                                </div>
                                                        </div>
                                                </div>
                                    </div>
                      
                      </div>
                      <div className={onScreen ? "shop-options2" : "w-0"}>
                        {search.map((item:any,index:number) => (
                        <div className={currentId === index ? "shop-left-item-active2" : "shop-left-item2"} key={index} onClick={() => handleChange(index)}>{item.title}</div>
                        ))}
                    </div>
              <div className="flex h-screen/2 justify-center items-center mt-5 cursor-pointer">
                  <ReactWhatsapp number="+40764829341" message={images[currentIndex]} className="bg-[#25D366] text-white px-6 py-2 rounded-full w-23 h-30 flex justify-center flex-row" element="center">Trimite pe Whatsapp &#10551;</ReactWhatsapp>
              </div>
      </div>
    )
}

export default dynamic (() => Promise.resolve(Menu), {ssr:false});