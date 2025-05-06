import React from 'react'
import testimonial from '../assets/testimonial.png'
import quotes from '../assets/quotes.png'


const Testimonials = () => {
  return (
    <section className='py-16 lg:py-20 relative'>
      <img src={testimonial} alt="testimonial" className='w-full h-[500px] lg:h-auto object-cover -z-10' />
      <div className="container mx-auto border-b-[0.5px] pb-12 border-[#505050]/20">
        <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center">
          <div className='text-center space-y-6'>
          <img src={quotes} alt="quotes" className='mx-auto' />
          <p className='font-montserrat font-bold text-xl text-white lg:w-[500px] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis quas praesentium nam iure laudantium maiores distinctio perferendis. Nostrum, quis!</p>
          </div>
          <div>
            <h3 className='font-montserrat font-bold text-2xl text-white'>-James L.</h3>
            <p className='font-montserrat text-white'>Food Blogger</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;