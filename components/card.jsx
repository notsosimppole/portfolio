import React from 'react'

const Card = (props) => {
  return (
    <div className='w-full h-full flex flex-col items-start justify-start text-xl gap-4 text-[#e2e2e2]'>
        {props.img && <img src={props.img?.src} className='w-full rounded-xl' />}
        <p className='bg-[#00000023] p-4 rounded-3xl'>{props.txt}</p>
    </div>
  )
}

export default Card