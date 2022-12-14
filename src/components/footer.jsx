import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaUnsplash} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';



const Footer = () => {
  return (
    <div name="contact" className='// mt-[250px] w-full h-[300px] text-[#fff]  px-4'>
    <div className='max-w-[1000px] mx-auto p-4 '>
      <div className='flex flex-col md:flex-row-1'> 
        <div className='text-4xl font-bold mx-auto md:mx-0 '>Get in Touch with me </div>

        <div className='mx-auto md:mx-0'>
        <div className='pt-10 flex flex-row my-auto max-w-[1000px]   gap-5'>
          <a href='https://bit.ly/gittanish' target="_blank" rel="noopener noreferrer"><FaGithub className='hover:scale-105 '   size={35}/></a>
          <a href='https://bit.ly/linkdeintanish' target="_blank" rel="noopener noreferrer"><FaLinkedin className='hover:scale-105'  size={35} /></a>
          <a href='https://bit.ly/twittertanish' target="_blank" rel="noopener noreferrer"><FaTwitter className='hover:scale-105'   size={35} /></a>
          <a href='https://bit.ly/unsplashtanish' target="_blank" rel="noopener noreferrer"><FaUnsplash className='hover:scale-105'  size={35}/></a>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=tanishhire5@gmail.com&su=SUBJECT&body=BODY' target="_blank" rel="noopener noreferrer"><AiTwotoneMail className='hover:scale-105'  size={35}/></a>
        </div>
        </div>
          
      </div>
      </div>
      <div className=' h-8'>

          <div className='p-2 mt-20 mx-auto items-center text-center font-bold my-auto'>Ⓒ 2022 Designed & Developed by <a href='https://mail.google.com/mail/?view=cm&fs=1&to=tanishhire5@gmail.com&su=SUBJECT&body=BODY' className='text-[#56C3E6]' target="_blank" rel="noopener noreferrer">Tanish Hire</a></div>
          </div>
    </div>
  )
}

export default Footer