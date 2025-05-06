import React from 'react';
import footerImg from '../assets/footer.png';
import facebook from '../assets/fb.png';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';

const socials = [
  {
    src: facebook,
    alt: 'facebook',
  },
  {
    src: insta,
    alt: 'insta',
  },
  {
    src: twitter,
    alt: 'twitter',
  },
];

const Footer = () => {
  return (
    <footer className='mt-60 lg:mt-0 py-16 lg:py-20 relative lg:h-[350px]'>
      <img
        src={footerImg}
        className='size-full -z-10 absolute bottom-0'
        alt=''
      />
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-96 items-end'>
          <div>
            <h3 className='font-lilita text-[50px] text-white'>LOGO</h3>
            <div className='font-montserrat text-lg text-white uppercase flex flex-col gap-4 mt-4'>
              <a href='#'>home</a>
              <a href='#'>our features</a>
              <a href='#'>contact us</a>
            </div>
          </div>
          <div>
            <div className='font-montserrat text-lg text-white uppercase flex flex-col gap-4'>
              <h3 className='text-white font-semibold'>xyz company</h3>
              <span>address: abc, xyz, 123</span>
              <span>phone#: 0123-1234-5678</span>
              <span>email: info@xyz.com</span>
            </div>
          </div>
          <div>
            <div className='font-montserrat text-lg text-white uppercase flex flex-col gap-4 mt-8 lg:mt-4 w-fit items-center'>
              <span>@2025-xyz company</span>
              <div className='inline-flex gap-6'>
                {socials.map((social, index) => (
                  <img src={social.src} alt={social.alt} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
