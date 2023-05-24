
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full h-full relative flex flex-col-reverse md:flex-row items-center justify-center md:items-start md:justify-start bg-[#2c3237] rounded-[4rem] p-8 md:p-12 lg:p-20 gap-8 md:gap-4 text-[#ABDAFC]' id = 'intro'>
        <div className='flex md:items-start justify-start md:w-2/3 flex-col'>
            <h2 className='font-sonder text-center sm:text-left text-4xl sm:text-6xl md:text-7xl'>
                Hey, I am Gitansh
            </h2>
            <p className='text-md sm:text-xl md:text-3xl py-4'>
                I am a student at Delhi Technological University, pursuing Electrical Engineering. I am a frontend developer focusing on creating engaging and user-friendly websites. I am also exploring the fascinating world of machine learning. With a blend of technical skills and a drive for innovation, I aim to create compelling and cutting-edge digital experiences for users.
            </p>
        </div>
        <div className=' w-2/3 sm:w-1/2 md:w-1/3 flex items-center justify-center'>
            <img src='/images/me.jpg' className='w-full aspect-square object-cover object-bottom rounded-3xl' />
        </div>
    </div>
  )
}

export default Skills