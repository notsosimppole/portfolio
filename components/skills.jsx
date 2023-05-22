
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full h-full relative flex bg-[#2c3237] rounded-[4rem] p-20 text-[#ABDAFC]' id = 'intro'>
        <div className='flex items-start justify-start w-2/3 flex-col'>
            <h2 className='font-sonder text-7xl'>
                Hey, I am Gitansh
            </h2>
            <p className='text-3xl py-4'>
                I am a student at Delhi Technological University, pursuing <span className='italic'>Electrical Engineering</span>. I am a frontend developer focusing on creating engaging and user-friendly websites. I am also exploring the fascinating world of machine learning. With a blend of technical skills and a drive for innovation, I aim to create compelling and cutting-edge digital experiences for users.
            </p>
        </div>
        <div className='w-1/3 flex items-center justify-center'>
            Add Photo Here
        </div>
    </div>
  )
}

export default Skills