import React from 'react';
import contactImg from '../assets/contact.png';
import Form from './Form';

const Contact = () => {
  return (
    <section className='py-16 lg:py-20 relative h-[1000px]'>
      <img src={contactImg} alt='contact' className='size-full -z-10' />
      <div className='absolute top-24 inset-0 flex flex-col gap-4 items-center'>
        <h3 className='text-center font-montserrat font-bold text-2xl w-[400px] lg:w-auto'>
          Big Valley Produce, 202-544-7707 Washington DC
        </h3>
        <p className='text-center font-montserrat text-lg lg:w-[600px] w-[400px]'>
          Please place your order here or send us an email. We are produce
          wholesalers in Washington DC, We can deliver to your business. You can
          count on us
        </p>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
