import React from 'react';
import logo from '../assets/Logo.png';
import cart from '../assets/cart.png';
import search from '../assets/search.png';

const Navbar = () => {
  return (
    <nav>
      <div className='bg-d-green py-6 lg:rounded-bl-full lg:rounded-br-full'>
        <p className='uppercase font-montserrat font-300 text-base lg:text-lg text-white text-center'>
          did you know xyz offers home delivery?
        </p>
      </div>
      <div className='container mx-auto flex items-center justify-between mt-6 px-6 lg:px-0'>
        <div className='hidden lg:block uppercase font-montserrat font-semibold space-x-6'>
          <a href='#'>home</a>
          <a href='#'>our features</a>
          <a href='#'>contact us</a>
        </div>
        <div className=''>
          <img src={logo} alt='logo' />
        </div>
        <div className='flex justify-center  items-center gap-9'>
          <button className='rounded-full bg-l-green px-8 py-2 hidden lg:block'>
            <a
              href='#'
              className='uppercase font-montserrat font-semibold text-white'
            >
              start your order
            </a>
          </button>
          <div className='items-center justify-center space-x-8 hidden md:flex'>
            <img src={search} alt='cart' className='size-full' />
            <img src={cart} alt='cart' className='size-full' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
