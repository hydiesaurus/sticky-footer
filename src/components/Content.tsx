import React from 'react';

export default function Content() {
  return (
    <div className='bg-[#4E4E5A] py-8 px-6 md:px-12 h-full w-full flex flex-col justify-between'>
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-10'>
      <h1 className='text-[14vw] md:text-[6vw] leading-[0.8]'>Sticky Footer</h1>
      <p className='text-sm text-white'>© copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className='flex flex-col sm:flex-row shrink-0 gap-10 sm:gap-20 text-white'>
      <div className='flex flex-col gap-2'>
        <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='mb-2 uppercase text-[#ffffff80]'>Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};