import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
      <h1 className='font-[Neue_Montreal] text-[3vw] leading-[3.1vw]'>
        We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, 
        and market leadership.</h1>
        <div className='w-full flex gap-5 border-t mt-10 pt-10 border-[#a1b562]'>
            <div className='w-1/2'>
            <h1 className='text-6xl font-[Neue_Montreal] font-semibold '>OUR APPROACH : </h1>
            <button className='px-10 py-6 bg-zinc-900 text-white rounded-full mt-5 flex gap-10 items-center'>LEARN MORE
                <div className='w-2 h-2  bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='mt-5 w-1/2 h-[70vh] rounded-3xl  bg-[#a1b562]'>
            
            </div>
        </div>
    </div>
  )
}

export default About
