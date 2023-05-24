import React from 'react'

const Stack = () => {
  return (
    <div className='w-full h-full mt-2 text-[#FAC5D5] bg-[#2c2528] rounded-[4rem] p-8 md:p-12 lg:p-20 flex flex-col md:items-start justify-start'>
        <h2 className='font-sonder text-center sm:text-left text-4xl sm:text-6xl md:text-7xl'>
            What I use
        </h2>
        <div className='w-full md:w-11/12 mx-auto pt-8 flex flex-col'>
            <div className='grid gap-2 grid-cols-3 md:grid-cols-5 lg:grid-cols-9'>
                <div className='col-span-3 md:col-span-5 lg:col-span-2 py-8 rounded-xl flex flex-col items-center justify-center bg-[#A36CD3] lg:hover:scale-95 duration-300 ease-in-out transition-all'>
                    <p className='text-3xl xl:text-4xl font-newake text-center'>My Tech Stack</p>
                    <p className='text-sm md:text-lg font-thin text-center'>(My bread and butter)</p>
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/react.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/nextjs.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/tailwindcss.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/typescript.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/nodejs.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/astro.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/wordpress.svg' className='w-16 h-16 opacity-60' />
                </div>
            </div>
            <div className='grid gap-2 grid-cols-3 md:grid-cols-5 lg:grid-cols-9 pt-2'>
                <div className='col-span-3 md:col-span-5 lg:col-span-2 py-8 rounded-xl flex flex-col items-center justify-center bg-[#A36CD3] lg:hover:scale-95 duration-300 ease-in-out transition-all'>
                    <p className='text-3xl xl:text-4xl font-newake text-center'>Python Libraries</p>
                    <p className='text-sm md:text-lg font-thin text-center'>(For my ML needs)</p>
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/python.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/tf.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/opencv.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/scitkit.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/numpy.svg' className='w-16 h-16 opacity-60' />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/pandas.svg' className='w-16 h-16 opacity-60' />
                </div>
            </div>
            <div className='grid gap-2 grid-cols-3 md:grid-cols-5 lg:grid-cols-9 py-2'>
                <div className='col-span-3 md:col-span-5 lg:col-span-2 py-8 rounded-xl flex flex-col items-center justify-center bg-[#A36CD3] lg:hover:scale-95 duration-300 ease-in-out transition-all'>
                    <p className='text-3xl xl:text-4xl font-newake text-center'>Misc. Stack</p>
                    <p className='text-sm md:text-lg font-thin text-center'>(Miscellaneous is long)</p>
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/matlab.svg' className='w-16 h-16 opacity-60' alt="matlab" />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/vhdl.svg' className='w-16 h-16 opacity-60' alt="digital electronics" />
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/git.svg' className='w-16 h-16 opacity-60' alt = "git"/>
                </div>
                <div className='py-6 rounded-xl flex flex-col items-center justify-center bg-[#4a4a4a3f] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <img src='/images/ltspice.svg' className='w-16 h-16 opacity-60' alt = "analog"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Stack