import React from 'react'

const Stack = () => {
  return (
    <div className='w-full h-full mt-2 text-[#FAC5D5] bg-[#2c2528] rounded-[4rem] p-20 flex flex-col items-end justify-start'>
        <h2 className='text-7xl font-sonder'>
            What I use
        </h2>
        <div className='w-11/12 mx-auto pt-8 flex flex-col'>
            <div className='grid gap-2 grid-cols-9'>
                <div className='col-span-2 py-8 rounded-xl flex flex-col items-center justify-center bg-[#A36CD3] hover:scale-95 duration-300 ease-in-out transition-all'>
                    <p className='text-4xl font-newake'>My Tech Stack</p>
                    <p className='text-lg font-thin'>(My bread and butter)</p>
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
            <div className='grid gap-2 grid-cols-9 py-2'>
                <div className='col-span-2 py-8 rounded-xl flex flex-col items-center justify-center bg-[#A36CD3] hover:scale-95 duration-300 ease-in-out transition-all text-center'>
                    <p className='text-4xl font-newake'>Python Libraries</p>
                    <p className='text-lg font-thin'>(For my ML needs)</p>
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
            <div className='grid gap-2 grid-cols-9 pb-2'>
                <div className='col-span-2 py-8 rounded-xl flex flex-col items-center justify-center bg-[#A36CD3] hover:scale-95 duration-300 ease-in-out transition-all text-center'>
                    <p className='text-4xl font-newake'>Misc. Stack</p>
                    <p className='text-lg font-thin'>(Miscellaneous is long)</p>
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