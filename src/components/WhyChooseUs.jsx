import React from 'react';
import shieldCheck from '../assets/shield.png';

const WhyChooseUs = () => {
  return (
    <section className='py-16 lg:py-20'>
      <h2 className='h2-subheading'>why choose us?</h2>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-8 lg:gap-0 lg:flex-row items-center justify-center mt-8 border-b-[0.5px] pb-12 border-[#505050]/20'>
          <div className='flex flex-col gap-4 items-center justify-center text-center lg:border-r-[0.5px] lg:border-[#505050]/20'>
            <div className='size-16 bg-[#f2f2f2] rounded-full flex items-center justify-center p-4'>
              <img
                src={shieldCheck}
                alt='shield-check'
                className='object-contain'
              />
            </div>
            <h3 className='font-montserrat font-bold text-2xl'>Quality</h3>
            <p className='font-montserrat lg:px-20 xs:[300px] sm:w-[350px] lg:w-[600px] text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in
              fugiat perferendis cupiditate adipisci non laboriosam praesentium
              eum quos debitis!
            </p>
          </div>
          <div className='flex flex-col gap-4 items-center justify-center text-center lg:border-r-[0.5px] lg:border-[#505050]/20'>
            <div className='size-16 bg-[#f2f2f2] rounded-full flex items-center justify-center p-4'>
              <img
                src={shieldCheck}
                alt='shield-check'
                className='object-contain'
              />
            </div>
            <h3 className='font-montserrat font-bold text-2xl'>Efficiency</h3>
            <p className='font-montserrat lg:px-20 lg:w-[600px] text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in
              fugiat perferendis cupiditate adipisci non laboriosam praesentium
              eum quos debitis!
            </p>
          </div>
          <div className='flex flex-col gap-4 items-center justify-center text-center'>
            <div className='size-16 bg-[#f2f2f2] rounded-full flex items-center justify-center p-4'>
              <img
                src={shieldCheck}
                alt='shield-check'
                className='object-contain'
              />
            </div>
            <h3 className='font-montserrat font-bold text-2xl'>Reliability</h3>
            <p className='font-montserrat lg:px-20 lg:w-[600px] text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in
              fugiat perferendis cupiditate adipisci non laboriosam praesentium
              eum quos debitis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
