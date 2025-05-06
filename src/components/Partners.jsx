import React, { Fragment } from 'react';
import logo1 from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.png';
import logo3 from '../assets/logo-3.png';
import logo4 from '../assets/logo-4.png';
import logo5 from '../assets/logo-5.png';
import logo6 from '../assets/logo-6.png';
import logo7 from '../assets/logo-7.png';

const logos = [
  {
    src: logo1,
    alt: 'logo1',
  },
  {
    src: logo2,
    alt: 'logo2',
  },
  {
    src: logo3,
    alt: 'logo3',
  },
  {
    src: logo4,
    alt: 'logo4',
  },
  {
    src: logo5,
    alt: 'logo5',
  },
  {
    src: logo6,
    alt: 'logo6',
  },
  {
    src: logo7,
    alt: 'logo7',
  },
];

const Partners = () => {
  return (
    <section className=''>
      <h2 className='h2-subheading'>our partner</h2>
      <div className='container mx-auto mt-12 border-b-[0.5px] pb-16 border-[#505050]/20'>
        <div className='overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex items-center justify-center  gap-20 animate-move-right [animation-duration:20s] hover:[animation-play-state:paused]'>
            {[...new Array(2).fill(0)].map((_, idx) => (
              <Fragment key={idx}>
                {logos.map((logo, index) => (
                  <img src={logo.src} alt={logo.alt} key={index} />
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
