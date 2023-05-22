import React from 'react'

const Landing = () => {
  return (
    <div className='bg-black text-white h-screen w-full flex flex-col items-center justify-around'>
        <div className='text-center h-1/2 flex items-center justify-center flex-col'>
            <h1 className='text-8xl text-[#FDE8D0] font-newake'>This is Gitansh</h1>
            <p className='text-2xl font-sonder text-[#FDE8D0]'>Human version of the 💯 emoji</p>
        </div>
        <div className='h-2/3 grid-cols-2 grid gap-2 w-full py-2'>
            <div className='h-full relative bg-[#FF8C42] w-full rounded-[4rem] flex gap-4 items-center justify-start overflow-x-hidden whitespace-nowrap group transition-all duration-300 ease-in-out group hover:scale-95 hover:cursor-pointer'>
                <span className='absolute top-10 left-20 font-bold text-3xl font-poppins'>
                    What I Do
                </span>
                <img src='/images/gm.png' className='absolute group-hover:scale-[4] transition-all duration-300 ease-in-out top-9 right-20 w-12 h-12 rounded-full group-hover:right-[45%] group-hover:top-[40%] group-hover:animate-spinner' />
                <span className='text-7xl text-white whitespace-nowrap font-sonder font-bold gap-2 flex animate-marquee group-hover:hidden transition-all duration-300 ease-in-out '>
                    <span> | Frontend</span>
                    <span>Developer</span>
                    <span> | Student</span>
                    <span> | Caffine</span>
                    <span>Wizard </span>
                </span>
                <span className='text-7xl absolute whitespace-nowrap text-white font-sonder flex gap-2 font-bold animate-marquee2 group-hover:hidden transition-all duration-300 ease-in-out'>
                    <span> | Frontend</span>
                    <span>Developer </span>
                    <span> | Student </span>
                    <span> | Caffine</span>
                    <span>Wizard </span>
                </span>
                <span className='absolute bottom-10 left-20 font-bold text-xl font-poppins'>
                    See More
                </span>
                <img src='/images/scroll.svg' className='absolute right-20 bottom-10 w-8 h-8' />
            </div>
            <div className='h-full grid grid-cols-2 gap-2'>
                <div className='bg-[#FFFFFF] text-black h-full rounded-[4rem] flex items-center justify-center relative hover:cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out'>
                    <span className='absolute bottom-5 left-16 font-extrabold text-xl font-poppins'>
                        Projects
                    </span>
                    <img src='/images/man-work.svg' className='absolute right-16 bottom-5 w-8 h-8' />
                </div>
                <div className='bg-[#1F86DA] h-full rounded-[4rem] flex items-center justify-center relative hover:cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out'>
                    <span className='absolute bottom-5 left-16 font-extrabold text-xl font-poppins'>
                        About Me
                    </span>
                    <img src='/images/about.svg' className='absolute right-16 bottom-5 w-8 h-8' />
                </div>
                <div className='col-span-2 bg-[#353535] h-full rounded-[4rem] flex items-center justify-center relative hover:cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out'>
                    <span className='absolute bottom-5 left-16 font-extrabold text-xl font-poppins'>
                        Contact Me
                    </span>
                    <img src='/images/message.svg' className='absolute right-16 bottom-5 w-8 h-8' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing