import React from 'react';
import Project_1 from '../assets/project-1-min.png';
import Project_2 from '../assets/project-2-min.png';
import Project_3 from '../assets/project-3-min.png';
import Project_4 from '../assets/project-4-min.png';
// import Project_5 from '../assets/pokeapi_256.png';
import {FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaUnsplash} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';



const Projects = () => {
  return (
    // <div name='projects' className='w-full mt-[300px] h-screen text-[#d6d6d6] bg-[#0a192f]'>
        
    // </div>
    // <div className='flex flex-col'>
    <div name='projects' className='w-full mt-[300px] md:mt-0 h-screen text-[#ffff] '>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8 px-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#B0D8BC]'>Projects</p>
                <p className='pt-6 pb-3 text-2xl'>Projects that I have done</p>
                <p className=''>Check out my <a href="https://bit.ly/gittanish" target="_blank" rel="noopener noreferrer" className='text-[##08122F]'>github</a>  for all my projects</p>
            </div>

            <div className='w-full grid sm:grid-cols-2 md:grid-cols-2 gap-4 px-4'>
              <div style={{backgroundImage: `url(${Project_4})`}} className=' shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div '>
                <div  className='opacity-0  group-hover:opacity-100'>
                  <span className='mx-auto justify-center items-center text-2xl font-bold text-black tracking-wider'>
                  <p className='pl-8 pt-8 mx-auto m'> Netflix clone using reactjs</p> 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://bit.ly/netflixdemo" target="_blank" rel="noopener noreferrer" >
                      <button className='btn text-center text-lg rounded-lg px-4 py-3 m-2 bg-[#08122F] text-[#ffff] hover:scale-105'>Demo</button>
                    </a>
                    <a href="https://bit.ly/netfixcode" target="_blank" rel='noopener noreferrer'>
                      <button className='btn text-center text-lg rounded-lg px-4 py-3 m-2 bg-[#08122F] text-[#ffff] hover:scale-105'>Code</button>
                    </a>
                  </div>

                </div>
            </div>
            <div style={{backgroundImage: `url(${Project_2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div '>
                <div  className='opacity-0  group-hover:opacity-100'>
                  <span className='mx-auto justify-center items-center text-2xl font-bold text-black tracking-wider'>
                  <p className='pl-8 pt-8 mx-auto m'>React and Tailwind CSS Responsive Site</p> 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://bit.ly/datademotan" target="_blank" rel="noopener noreferrer" >
                      <button className='btn text-center text-lg rounded-lg px-4 py-3 m-2 bg-[#08122F] text-[#ffff] hover:scale-105'>Demo</button>
                    </a>
                    <a href="https://bit.ly/datacodetan" target="_blank" rel='noopener noreferrer'>
                      <button className='btn text-center text-lg rounded-lg px-4 py-3 m-2 bg-[#08122F] text-[#ffff] hover:scale-105'>Code</button>
                    </a>
                  </div>

                </div>
            </div>
            <div style={{backgroundImage: `url(${Project_1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div '>
                <div  className='opacity-0  group-hover:opacity-100'>
                  <span className='mx-auto justify-center items-center text-2xl font-bold text-black tracking-wider'>
                  <p className='pl-8 pt-8 mx-auto m'>React Image Gallery using Pixabay API</p> 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://bit.ly/imagegaldemo" target="_blank" rel="noopener noreferrer" >
                      <button className='btn text-center text-lg rounded-lg px-4 py-3 m-2 bg-[#08122F] text-[#ffff] hover:scale-105'>Demo</button>
                    </a>
                    <a href="https://bit.ly/imagegalcode" target="_blank" rel='noopener noreferrer'>
                      <button className='btn text-center text-lg rounded-lg px-4 py-3 m-2 bg-[#08122F] text-[#ffff] hover:scale-105'>Code</button>
                    </a>
                  </div>

                </div>
            </div>
            <div style={{backgroundImage: `url(${Project_3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div '>
                <div  className='opacity-0  group-hover:opacity-100'>
                  <span className='mx-auto justify-center items-center text-2xl font-bold text-black tracking-wider'>
                  <p className='pl-8 pt-8 mx-auto m'>Static Responsive Site</p> 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://bit.ly/staticdemotail" target="_blank" rel="noopener noreferrer" >
                      <button className='btn text-center text-lg rounded-lg px-4 py-3 m-2 bg-[#08122F] text-[#ffff] hover:scale-105'>Demo</button>
                    </a>
                    <a href="https://bit.ly/staticcodetail" target="_blank" rel='noopener noreferrer'>
                      <button className='btn text-center text-lg rounded-lg px-4 py-3 m-2 bg-[#08122F] text-[#ffff] hover:scale-105'>Code</button>
                    </a>
                  </div>

                </div>
            </div>

            </div>
        </div>
    {/* </div>
    <div name="contact" className='mb-[-250px] w-full text-[#d6d6d6]  px-4'>
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
    </div> */}
    </div>
    
  )
}

export default Projects