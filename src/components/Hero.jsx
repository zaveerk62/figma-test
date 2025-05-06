import React from 'react';
import heroImg from '../assets/hero-img.png';

const Hero = () => {
  return (
    <section className='py-8 lg:py-16 relative'>
      <div className='relative'>
        <div className='container mx-auto flex flex-col gap-8 items-center justify-center text-center'>
          <img
            src={heroImg}
            alt='hero-image'
            className='lg:size-full object-cover z-0 h-[400px]'
          />
          <div className='absolute z-10 flex flex-col gap-8 items-center justify-center'>
            <h1 className='font-lilita text-white text-5xl lg:text-7xl'>
              <span className='font-lily'>Welcome to</span> <br />
              <span className='uppercase'>xyz produce</span>
            </h1>
            <button className='rounded-full bg-l-green px-12 py-2 md:px-20 md:py-4'>
              <a
                href='#'
                className='uppercase font-montserrat font-semibold text-lg md:text-2xl text-white'
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
