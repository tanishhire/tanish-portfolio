import React from 'react';
import Project_1 from '../assets/project-1-min.png';
import Project_2 from '../assets/project-2-min.png';
import Project_3 from '../assets/project-3-min.png';
import Project_4 from '../assets/project-4-min.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#d6d6d6] bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-[#B0D8BC]'>Projects</p>
                <p className='py-6'>Projects that I have done</p>
            </div>

            <div style={{backgroundImage: `url('${Project_4}')`}} className='grid sm:grid-col-2 md:grid-col-3 gap-4'>
                <div className='shadow-lg shadow-[#B0D8BC group container rounded-md flex justify center items-center mx-auto content-div'>
                    {/* HOver */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#d6d6d6] tracking-wider'>Image Gallery using React JS & Tailwind CSS</span>
                          <div className='pt-8 text-center'>
                          <a href='/' ><button>
                            Demo
                          </button></a>
                          <a href='/' ><button>
                            Code
                          </button></a>
r
                          </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects