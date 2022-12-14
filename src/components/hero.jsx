import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaUnsplash} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import Typed from 'react-typed';
import Peep from '../assets/peep-68.png'


const Hero = () => {
  return (
    <div name='home' className='w-full pt-[150px]  h-screen   '>
    {/* COntainer */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#FFFFFF] '>
      <div className=''>
      <div className='flex flex-row'>
      
      <div className='flex flex-col'>
        <p className='text-[#fff]'>Hi, my name is</p>
        <h1 className='text-5xl sm:text-7xl font-bold text-[#2DB3C7]'>Tanish Hire</h1>
        <h2 className='text-5xl sm:text-7xl font-bold text-[#fff]'>I am a <Typed className="pl-2" strings={['web-desginer', 'web-developer','Blogger', 'UI/UX Desginer', 'Photographer', 'Mechanical Engineer']} typeSpeed={100}
            backSpeed={120}
            loop /> </h2>
      </div>
      
        </div>
        <p className='text-[#B0D8BC] py-2 max-w-[700px]'>I am a web/graphic designer and developer. I write about tech, books and travel. Follow me on <a className='underline' href='https://bit.ly/twittertanish' target="_blank" rel="noopener noreferrer">twitter</a> and <a className='underline' href='https://tanishhire.hashnode.dev/' target="_blank" rel="noopener noreferrer"> hashnode. </a> </p>
        <div className='w-1/2'>
        <a href='https://tanishhire.hashnode.dev/' target="_blank" rel="noopener noreferrer"><button className='text-white group border-2  btn-1 px-6 py-3 my-2 flex items-center justify-center 
        rounded-md hover:bg-[#14213D] hover:border-[#d6d6d6] hover:scale-105'>Check out my blogs 
          <span className=' duration-300'> 
             <HiArrowNarrowRight className='ml-3' />
          </span>
        </button></a>
        </div>
        <div className='flex flex-row gap-5 pt-5 pr-4'>
          <a href='https://bit.ly/gittanish' target="_blank" rel="noopener noreferrer"><FaGithub className='hover:scale-105'   size={35}/> </a>
          <a href='https://bit.ly/linkdeintanish' target="_blank" rel="noopener noreferrer"><FaLinkedin className='hover:scale-105'  size={35} /></a>
          <a href='https://bit.ly/twittertanish' target="_blank" rel="noopener noreferrer"><FaTwitter className='hover:scale-105'   size={35} /></a>
          <a href='https://bit.ly/unsplashtanish' target="_blank" rel="noopener noreferrer"><FaUnsplash className='hover:scale-105'  size={35}/></a>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=tanishhire5@gmail.com&su=SUBJECT&body=BODY' target="_blank" rel="noopener noreferrer"><AiTwotoneMail className='hover:scale-105' size={35}/></a>
        </div>
        
      </div>

      </div>

    </div>
  )
}

export default Hero