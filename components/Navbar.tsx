'use client'

import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import ClientSideRoute from "./ClientSideRoute";
import dynamic from "next/dynamic";
import { useStateIfMounted } from "use-state-if-mounted";
import Link from "next/link";

type Props = {
    categories: Category[];
}

function Navbar({categories}: Props) {
  const [isDown,setIsDown] = useStateIfMounted(false);

  var anchor : any
  if (typeof document === 'undefined') {
    
    } else {
        anchor = document?.querySelector('#footer')
    }
  
  
  
  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 border-b">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          {/* Logo */}
            <Link href="/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>


            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 content-center">
                <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                    <li>
                        <Link href="/" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 " onClick={() => isDown ? setIsDown(false) : setIsDown(true)}>Produse <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                    </li>
                </ul>

                <div className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-full ml-8 shadow hover:shadow-lg cursor-pointer">
                        <button onClick={() => {anchor?.scrollIntoView({ behavior: 'smooth', block: 'center' })}}>Contact</button>
                </div>
            </div>
        </div>

        {/* Dropdown */}
        {isDown &&
        <div className={isDown ? "mt-1 bg-white border-gray-200 shadow-sm border-t dark:bg-gray-800 dark:border-gray-600" : "h-0"}>
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-1 md:grid-cols-3 md:px-6">
                        {categories.map((categ,index) => (
                            <div onClick={() => isDown ? setIsDown(false) : setIsDown(true)} key={index}>
                            <ClientSideRoute route={`/${categ.slug.current}`} key={categ._id}>
                                <Dropdown bigtext={categ.title} smalltext={categ.desc} key={categ._id}/>
                             </ClientSideRoute>
                             </div>
                        ))}
                </div>
        </div>
}
    </nav>
  );
};

export default dynamic (() => Promise.resolve(Navbar), {ssr:false});