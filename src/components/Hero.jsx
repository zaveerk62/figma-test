import React from 'react';
import heroImg from '../assets/hero-img.png';

const Hero = () => {
  return (
    <section className='py-8 lg:py-16'>
      <div className='relative h-screen'>
        <div className='container mx-auto flex flex-col gap-8 items-center justify-center text-center'>
        <img
        src={heroImg}
        alt=''
        className='w-full h-auto object-cover z-0'
      />
          <div className='absolute z-10 flex flex-col gap-8 items-center justify-center'>
          <h1 className='font-lilita text-white text-5xl lg:text-7xl'>
            <span className='font-lily'>Welcome to</span> <br />
            <span className='uppercase'>xyz produce</span>
          </h1>
          <button className='rounded-full bg-l-green px-16 py-2 md:px-20 md:py-4'>
            <a
              href='#'
              className='uppercase font-montserrat font-semibold text-xl md:text-2xl text-white'
            >
              contact us
            </a>
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
