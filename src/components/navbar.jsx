import React from 'react';
import Logo from '../assets/Logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#56C3E6]'>
        <div>
          <a href='/'><img src={Logo} alt='Logo' style={{width: '50px'}}/></a>
        </div>
        {/* Menu */}
          <ul className='hidden md:flex'>
            <li className=''>Home</li>
            <li className=''>About</li>
            <li className=''>Skills</li>
            <li className=''>Contact</li>
            <li className=''>Gallery</li>
          </ul>
          <button className='hidden md:flex btn bg-slate-50 p-2 rounded-md text-bold '><a href="https://drive.google.com/file/d/1gLZe2F3rhN_fykDgVeeobFaKPVv-5dmI/view?usp=share_link"  target="_blank" rel="noopener noreferrer">Resume</a></button>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer duration-300'>
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>
        {/* MObile Menu */}
        <ul className= {!nav ? 'hidden' :  "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Contact</li>
            <li className='py-6 text-4xl'>Gallery</li>
            <li className='py-6 text-4xl'>Resume</li>
          </ul>

    </div>
  )
}

export default Navbar