import React from 'react';
import business1 from '../assets/business-1.png';
import business2 from '../assets/business-2.png';

const Business = () => {
  return (
    <section className='py-16 lg:py-20'>
      <h2 className='h2-subheading'>a family business</h2>
      <p className='text-center font-montserrat text-lg lg:w-[800px] mx-auto mt-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est in fugiat
        perferendis cupiditate adipisci non laboriosam praesentium eum quos
        debitis!
      </p>
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='mt-12 border-b-[0.5px] pb-12 border-[#505050]/20'>
          <div className='flex flex-col gap-8 lg:gap-0 lg:flex-row items-center justify-center'>
            <div className='flex-1'>
              <h3 className='font-montserrat font-bold text-2xl'>
                Cranberries
              </h3>
              <p className='font-montserrat text-lg lg:w-[600px] mt-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam sapiente laborum ab sed. Ratione perspiciatis
                similique dolor, ut temporibus, quis ea reiciendis et veniam
                assumenda iusto cum. Commodi repellendus accusamus, illo iste at
                sint maxime alias nobis deserunt unde suscipit. Eum repellendus
                minima, nemo aperiam doloremque in ad aliquam voluptatum,
                eveniet ipsa quos quisquam necessitatibus maxime natus ipsam
                molestiae dolorum?
              </p>
            </div>
            <div className='flex-1'>
              <img
                src={business1}
                alt='people-running'
                className='size-full object-contain'
              />
            </div>
          </div>
          <div className='mt-4 lg:mt-0 flex flex-col gap-16 lg:flex-row-reverse lg:gap-12 items-center justify-center'>
            <div className='flex-1'>
              <h3 className='font-montserrat font-bold text-2xl'>
                Cranberries
              </h3>
              <p className='font-montserrat text-lg lg:w-[600px] mt-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam sapiente laborum ab sed. Ratione perspiciatis
                similique dolor, ut temporibus, quis ea reiciendis et veniam
                assumenda iusto cum. Commodi repellendus accusamus, illo iste at
                sint maxime alias nobis deserunt unde suscipit. Eum repellendus
                minima, nemo aperiam doloremque in ad aliquam voluptatum,
                eveniet ipsa quos quisquam necessitatibus maxime natus ipsam
                molestiae dolorum?
              </p>
            </div>
            <div className='flex-1'>
              <img
                src={business2}
                alt='nature bulb'
                className='size-full object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
