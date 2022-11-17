import React from 'react';
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
// import JavaScript from "";
import Github from "../assets/github.png";
import Python from "../assets/python.png";
import Tailwind from "../assets/tailwind.png";
import Reactjs from "../assets/react.png";
import Webflow from "../assets/webflow.png";
import Figma from "../assets/figma.png";

const Skills = () => {
  return (
    <div  name="skills" className='w-full h-screen bg-[#0a192f] text-[#d6d6d6] h-screen'>
       {/* COntainer */}
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
             <p className='text-4xl inline border-b-4 border-[#B0D8BC]'>Skills</p>
             <p className='mt-4 text-2xl'>Technologies that I am familier with </p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
              <div className='rounded-md shadow-sm shadow-[#B0D8BC] hover:scale-110'>
                <img className='w-20 mx-auto p-3' src={HTML} alt="" /><p>HTML</p>
              </div>
              <div className='rounded-md shadow-sm shadow-[#B0D8BC] hover:scale-110'>
                <img className='w-20 mx-auto p-3' src={CSS} alt="" /><p>CSS</p>
              </div>
              <div className='rounded-md shadow-sm shadow-[#B0D8BC] hover:scale-110'>
                <img className='w-20 mx-auto p-3' src={Github} alt="" /><p>Github</p>
              </div>
              <div className='rounded-md shadow-sm shadow-[#B0D8BC] hover:scale-110'>
                <img className='w-20 mx-auto p-3' src={Python} alt="" /><p>Python</p>
              </div>
              <div className='rounded-md shadow-sm shadow-[#B0D8BC] hover:scale-110'>
                <img className='w-20 mx-auto p-3' src={Tailwind} alt="" /><p>Tailwind CSS</p>
              </div>
              <div className='rounded-md shadow-sm shadow-[#B0D8BC] hover:scale-110'>
                <img className='w-20 mx-auto p-3' src={Reactjs} alt="" /><p>Reactjs</p>
              </div>
              <div className='rounded-md shadow-sm shadow-[#B0D8BC] hover:scale-110'>
                <img className='w-20 mx-auto p-3' src={Webflow} alt="" /><p>Webflow</p>
              </div>
              <div className='rounded-md shadow-sm shadow-[#B0D8BC] hover:scale-110'>
                <img className='w-20 mt-1 pb-5 p-3 mx-auto' src={Figma} alt="" /><p>Figma</p>
              </div>
              
          </div>
       </div>
    </div>
  )
}

export default Skills