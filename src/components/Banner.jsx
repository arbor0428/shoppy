import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward } from "react-icons/md";

export default function Banner() {
  return (
    <section className='px-3 py-8 bg-[#f5f5f5] h-[80vh] sm:h-[100vh] md:px-10'>
      <div className='relative w-full h-full'>
        <div className='w-full h-full bg-cover bg-center bg-banner opacity-100' />
        <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-50 drop-shadow-2xl'>
          <h2 className='text-3xl leading-normal md:leading-none xl:text-6xl sm:text-5xl font-extrabold'>YOUR ONLY LIMIT <br className='block md:hidden'/>IS YOU.</h2>
          <p className='mt-4 sm:mt-8 text-lg sm:text-xl'>Lorem ipsum dolor, <br className='block md:hidden'/>sit amet consectetur adipisicing elit. <br/> Magni tempore aperiam <br className='block md:hidden'/>reiciendis quos assumenda.</p>
          <Link to='/products' className='mt-4 sm:mt-8 mx-auto sm:text-xl flex w-fit items-center gap-1 border-b-2 cursor-pointer p-1'>
            <MdArrowForward />
            <span>VIEW MORE</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
