import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full pt-[50px] pb-[50px] h-screen bg-[#0a192f] text-[#d6d6d6]'>
        <div className='flex flex-col justify-center items-center w-full h-full pl-4'>
          <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 '>
                <p className='hidden sm:text-4xl sm:font-bold sm:inline sm:border-b-4 sm:border-[#B0D8BC]'>About </p>
                <p className='sm:hidden text-4xl font-bold  border-b-4 border-[#B0D8BC]'>About & Education </p>
            </div>
            <div className=' sm:text-left pb-8 '>
                <p className='hidden sm:text-4xl sm:font-bold sm:inline sm:border-b-4 sm:border-[#B0D8BC]'>Education</p>
            </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
            <div className=''>
                <p className='sm:text-right text-3xl font-bold'>
                I am a third year B.Tech student pursuing Mechanical Engineering @JSPM's RSCOE.
                </p>
                <p className='sm:text-right pt-5'>
                 I am always eager to have new experiences and meet new people.
                 Adding value to the world is what I aim for.  
                 I am a web designer-developer working on both code and no code platforms, I also have a strong understanding of engineering mechanics, principles, and materials. 
                 I believe that we can achieve more when in a team.
            </p>
            </div>
            <div>
                <div className='p'>
                {/* Current  */}
                <p className='sm:text-left font-bold text-2xl py-2 text-[#56C3E6]'>B. Tech in Mechanical Engineering</p>
                <a href='https://www.jspmrscoe.edu.in/' target='_blank' rel="noopener noreferrer"><p className='sm:text-left text-sm hover:text-[#B0D8BC]'>JSPM's Rajarshi Shahu College of Engineering, Pune (2021-2024)</p></a>
                <p className='sm:text-left text-sm'>CGPA (current): 7.52</p>

                </div>
                <div className='pt-7'>
                {/* Past */}
                <p className='sm:text-left font-bold text-2xl py-2 text-[#56C3E6]'>Diploma in Mechanical Engineering</p>
                <a href='https://www.pcpolytechnic.com/' target='_blank' rel="noopener noreferrer"><p className='sm:text-left text-sm hover:text-[#B0D8BC]'>PCET's Pimpri Chinchwad Polytechnic, Pune (2018-2021)</p></a>
                <p className='sm:text-left text-sm'>Aggregate Percentage: 94.68%</p>

                </div>
                <div className='pt-7'>
                {/* High school */}
                <p className='sm:text-left font-bold text-2xl py-2 text-[#56C3E6]'>High School</p>
                <a href='https://www.akshara.in/' target='_blank' rel="noopener noreferrer"><p className='sm:text-left text-sm hover:text-[#B0D8BC]'>Akshara International School, Wakad (2017-2018)</p></a>
                <p className='sm:text-left text-sm'>CBSE Grade: 84.58%</p>

                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About