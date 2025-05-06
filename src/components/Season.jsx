import React from 'react';
import cranberries from '../assets/season-1.png';
import brussels from '../assets/season-2.png';
import potatoes from '../assets/season-3.png';

const Season = () => {
  return (
    <section className='py-16 lg:py-20'>
      <h2 className='text-center font-black font-montserrat uppercase text-3xl'>
        in season now
      </h2>
      <p className='text-center font-montserrat text-lg w-[800px] mx-auto mt-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in fugiat
        perferendis cupiditate adipisci non laboriosam praesentium eum quos
        debitis!
      </p>
      <div className='container mx-auto'>
        <div className='flex mt-8 border-b-[0.5px] pb-12 border-[#505050]/20'>
          <div className='flex flex-col gap-4 items-center justify-center text-center'>
            <img src={cranberries} alt='cranberries' className='' />

            <h3 className='font-montserrat font-bold text-2xl'>Cranberries</h3>
            <p className='font-montserrat px-20 text-lg'>
              Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className='flex flex-col gap-4 items-center justify-center text-center'>
            <img src={brussels} alt='brussel-sprouts' className='' />

            <h3 className='font-montserrat font-bold text-2xl'>
              Brussel Sprouts
            </h3>
            <p className='font-montserrat px-20 text-lg'>
              Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className='flex flex-col gap-4 items-center justify-center text-center'>
            <img src={potatoes} alt='potatoes' className='' />

            <h3 className='font-montserrat font-bold text-2xl'>
              Sweet Potatoes
            </h3>
            <p className='font-montserrat px-20 text-lg'>
              Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Season;
