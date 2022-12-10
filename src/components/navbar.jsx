import React from 'react';
import Logo from '../assets/Logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';
import { Link} from 'react-scroll'


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
            <li className=' hover:text-[#d6d6d6] hover:scale-105'><Link to='home' smooth={true} duration={500} >Home</Link></li>
            <li className='hover:text-[#d6d6d6] hover:scale-105'><Link to='about' smooth={true} duration={500} >About</Link></li>
            <li className='hover:text-[#d6d6d6] hover:scale-105'><Link to='skills' smooth={true} duration={500} >Skills</Link></li>
            <li className='hover:text-[#d6d6d6] hover:scale-105'><Link to='projects' smooth={true} duration={500} >Projects</Link></li>
            <li className='hover:text-[#d6d6d6] hover:scale-105'><Link to='contact' smooth={true} duration={500} >Contact</Link></li>
            <li className='hover:text-[#d6d6d6] hover:scale-105'><a href='https://tanishhire.hashnode.dev/' target='_blank' rel="noopener noreferrer">Blogs </a></li>

          </ul>
          <button className='hidden md:flex btn bg-slate-50 p-2 rounded-md text-bold hover:scale-105'><a href="https://drive.google.com/file/d/1gLZe2F3rhN_fykDgVeeobFaKPVv-5dmI/view?usp=share_link"  target="_blank" rel="noopener noreferrer">Resume</a></button>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer duration-300 cross'>
          {!nav ? <FaBars size={20} /> : <FaTimes className='cross' size={20} />}
        </div>
        {/* MObile Menu */}
        <ul className= {!nav ? 'hidden' :  "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li  className='py-6 text-4xl hover:text-[#d6d6d6] hover:scale-105 '><Link onClick={handleClick} to='home' smooth={true} duration={500} >Home</Link></li>
            <li  className='py-6 text-4xl hover:text-[#d6d6d6] hover:scale-105' ><Link onClick={handleClick} to='about' smooth={true} duration={500} >About</Link></li>
            <li  className='py-6 text-4xl  hover:text-[#d6d6d6] hover:scale-105'><Link onClick={handleClick} to='skills' smooth={true} duration={500} >Skills</Link></li>
            <li  className='py-6 text-4xl  hover:text-[#d6d6d6] hover:scale-105'><Link onClick={handleClick} to='projects' smooth={true} duration={500} >Projects</Link></li>
            <li  className='py-6 text-4xl  hover:text-[#d6d6d6] hover:scale-105'><a href='https://tanishhire.hashnode.dev/' target='_blank' rel="noopener noreferrer">Blogs</a></li>
            <li className='py-6 text-4xl hover:text-[#d6d6d6] hover:scale-105 '><a href="https://drive.google.com/file/d/1gLZe2F3rhN_fykDgVeeobFaKPVv-5dmI/view?usp=share_link"  target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>

    </div>
  )
}

export default Navbar