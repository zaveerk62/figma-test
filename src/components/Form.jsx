import React from 'react';

const Form = () => {
  return (
    <div className='container mx-auto'>
      <form className='flex justify-center px-4 lg:px-0'>
        <div className='w-full'>
          <label className='text-start block font-montserrat text-2xl font-bold'>
            Choose one <span className='text-red-600'>*</span>
          </label>
          <div className='mt-4 flex-col lg:flex-row flex gap-4 items-start lg:items-center'>
            {['Existing customer', 'Become a customer', 'Email us'].map(
              (label, i) => (
                <label
                  key={i}
                  className='flex items-center space-x-4 cursor-pointer'
                >
                  <input
                    type='radio'
                    name='customerType'
                    required
                    className='hidden peer'
                  />
                  <div className='size-4 rounded-full border-2 border-d-green peer-checked:bg-l-green peer-checked:border-d-green transition-all'></div>
                  <span className='font-montserrat text-2xl' htmlFor=''>
                    {label}
                  </span>
                </label>
              )
            )}
          </div>
          <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 font-montserrat'>
            <div className=''>
              <label className='block mb-2'>
                Company <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                className='w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                required
              />
            </div>
            <div className=''>
              <label className='block mb-2'>
                Your Name <span className='text-red-600'>*</span>
              </label>
              <input
                type='text'
                className='w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                required
              />
            </div>
            <div className=''>
              <label className='block mb-2'>
                Phone <span className='text-red-600'>*</span>
              </label>
              <input
                type='tel'
                className='w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                required
              />
            </div>
            <div className=''>
              <label className='block mb-2'>
                Email <span className='text-red-600'>*</span>
              </label>
              <input
                type='email'
                className='w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                required
              />
            </div>
          </div>
          <div className='mb-6'>
            <label className='mb-2 block font-montserrat'>
              Place your order or a send us a message{' '}
              <span className='text-red-600'>*</span>
            </label>
            <textarea
              rows='5'
              className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='font-montserrat w-full bg-d-green text-white text-lg font-semibold py-3 rounded-full hover:bg-green-700 transition'
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
