import React from 'react'

//FINAL STRECH WORKING ON THIS SINCE 2 FULL DAYS STRAIGHT HOLY SHIT THIS IS IT LETS FUCKING GOOOOOOOOOOOOOOOOOOOOOOOOOOO
//
const Contact = () => {
  return (
    <div className='w-full h-full mt-2 text-[#FDE8D0] rounded-[4rem] p-20 flex flex-col items-center justify-center' id = 'contact'>
        <h2 className='font-sonder text-5xl'>
            Wanna work together?
        </h2>
        <p className='text-lg'>
            Connect with me on
        </p>
        <div className='py-4 flex gap-6'>
            <a href="https://github.com/notsosimppole" target='_blank' rel='noreferrer' className='bg-[#35312d5f] p-4 rounded-full'>
                <img src = "/images/github.svg" alt = "GitHub - notsosimppole" className='w-8 h-8' />
            </a>
            <a href="https://www.linkedin.com/in/gitansh-mehta" target='_blank' rel='noreferrer' className='bg-[#35312d5f] p-4 rounded-full'>
                <img src = "/images/linked.svg" alt = "LinkedIn - Gitansh Mehta" className='w-8 h-8' />
            </a>
            <a href="mailto:gitansh1208@gmail.com" target='_blank' rel='noreferrer' className='bg-[#35312d5f] p-4 rounded-full'>
                <img src = "/images/mail.svg" alt = "Mail - gitansh1208@gmail.com" className='w-8 h-8' />
            </a>
            <a href="https://twitter.com/gitansh_mehta" target='_blank' rel='noreferrer' className='bg-[#35312d5f] p-4 rounded-full'>
                <img src = "/images/github.svg" alt = "Twitter - gitansh_mehta" className='w-8 h-8' />
            </a>
        </div>
    </div>
  )
}

export default Contact