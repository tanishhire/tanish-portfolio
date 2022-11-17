import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaUnsplash} from 'react-icons/fa';


const Hero = () => {
  return (
    <div name='home' className='w-full pt-[150px] md:pt-[250px] h-screen bg-[#0a192f]  '>
    {/* COntainer */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#FFFFFF] '>
      <div className='md:motion-safe:animate-fadeIn'>
        <p className='py-2 text-[#fff]'>Hi, my name is</p>
        <h1 className='py-2 text-4xl sm:text-7xl font-bold text-[#56C3E6]'>Tanish Hire</h1>
        <h2 className='py-2 text-4xl sm:text-7xl font-bold text-[#d6d6d6]'>I am a web designer-developer</h2>
        <p className='text-[#B0D8BC] py-2 max-w-[700px]'>I design and build beautiful websites for businesses, portfolios in all fields. If you need a modern and powerful website, send me an email. 
        If we are a good fit, I will give you a time and cost estimate.</p>
        <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center justify-center rounded-md hover:bg-[#56c3e6] hover:border-[#d6d6d6] hover:scale-105'>View Work  
          <span className='group-hover:rotate-90 duration-300'> 
             <HiArrowNarrowRight className='ml-3' />
          </span>
        </button>
        </div>
        <div className='flex flex-row gap-5 pt-5 pr-4'>
          <a href='https://github.com/tanishhire' target="_blank" rel="noopener noreferrer"><FaGithub className=''   size={35}/> </a>
          <a href='https://www.linkedin.com/in/tanish-hire' target="_blank" rel="noopener noreferrer"><FaLinkedin className=''  size={35} /></a>
          <a href='https://twitter.com/tanishhire5' target="_blank" rel="noopener noreferrer"><FaTwitter className=''   size={35} /></a>
          <a href='https://www.instagram.com/tanishclick/' target="_blank" rel="noopener noreferrer"><FaInstagram  className='' size={35} /></a>
          <a href='https://unsplash.com/@tanishclick' target="_blank" rel="noopener noreferrer"><FaUnsplash className=''  size={35}/></a>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Hero