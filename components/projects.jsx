import React, { useState } from 'react'
import img0 from '../public/images/fresources.png'
import img1 from '../public/images/theta.png'
import img2 from '../public/images/techweek.png'
import img3 from '../public/images/spotify.png'
import img4 from '../public/images/aahvaan.png'
import Card from './card'

const Projects = () => {
    // for next element text color 82e28f 252a25 e2e2e2 2e2e2e
    const imgList = [img0, img1, img2, img3, img4]
    const [proj, setProj] = useState()
    const textList = [
        'Fresources is a one step solution for a student\'s academic needs. We have managed to curate and systematically provide resources to 4 colleges under JAC. It is currently used by 10,000+ active users. Developed in NextJS, APIs using Next API. Hosted on DigitalOcean and Postgress as database.',
        'Theta Pharmaceuticals, are in the business of healthcare for nearly three decades having a top-class ultra-modern (WHO-GMP) manufacturing facility. Developed in Wordpress',
        'TechWeek by IEEE DTU is the annual workshop event for aspiring engineers to get a glimpse into the latest and upcoming technologies. Developed in NextJS and TailwindCSS. Hosted on Vercel',
        'This is the clone of popular music streaming platform, Spotify\'s web controller to control music on a device. Built using NextJs and TailwindCSS. APIs were built using NextAPI and Spotify\'s API is used. Hosted on Vercel',
        'Aahvaan is the annual sports fest of DTU hosted by the Sports Council of DTU. Developed in NextJS and TailwindCSS. Hosted on Vercel. Backend was developed on MongoDB and ExpressJS.'
    ]
  return (
    <div className='w-full h-full relative flex flex-col bg-[#252a25] rounded-[4rem] p-20 mt-2 text-[#e2e2e2] gap-8'>
        <h2 className='font-sonder text-7xl'>
            Projects
        </h2>
        <div className='grid grid-cols-5 w-full'>
            <div className='flex flex-col text-7xl font-newake w-full gap-8 col-span-3'>
                <span className='text-[#487c4f] hover:text-[#82e28f] flex items-start gap-2 w-full' onMouseEnter = {() => setProj(0)}><span className='text-sm'>01.</span> <a href="https://fresources.tech" target='_blank' rel='noreferrer'>Fresources</a></span>
                <span className='text-[#487c4f] hover:text-[#82e28f] flex items-start gap-2 w-full' onMouseEnter = {() => setProj(1)}><span className='text-sm'>02.</span> <a href="https://thetapharma.com/" target='_blank' rel='noreferrer'>Theta Pharmaceuticals</a></span>
                <span className='text-[#487c4f] hover:text-[#82e28f] flex items-start gap-2 w-full' onMouseEnter = {() => setProj(2)}><span className='text-sm'>03.</span> <a href="https://techweek.ieeedtu.in/" target='_blank' rel='noreferrer'>TechWeek by IEEE</a></span>
                <span className='text-[#487c4f] hover:text-[#82e28f] flex items-start gap-2 w-full' onMouseEnter = {() => setProj(3)}><span className='text-sm'>04.</span> <a href="https://spotify-web-controller-iota.vercel.app/" target='_blank' rel='noreferrer'> Spotify Clone </a></span>
                <span className='text-[#487c4f] hover:text-[#82e28f] flex items-start gap-2 w-full' onMouseEnter = {() => setProj(4)}><span className='text-sm'>05.</span> <a href="https://aahvan-2023.vercel.app/" target='_blank' rel='noreferrer'>Aahvaan DTU </a></span>
            </div>
            <div className='col-span-2 w-full'>
                <Card img={imgList[proj]?? null} txt = {textList[proj] ?? null} />
            </div>
        </div>
    </div>
  )
}

export default Projects