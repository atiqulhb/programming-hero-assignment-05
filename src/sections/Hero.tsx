import React from 'react'
import BannerStack from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section className='flex'>
      <div className='flex-3 flex-center'>
         <div>
            <h1 className='font-inter text-6xl font-extrabold tracking-[-1.5px] text-header mb-6.25'>
                  Build Your Ideal
                  <br/>
                  <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">Development Stack</span>
            </h1>
            <p className='w-142.5 text-lg leading-[1.63] text-slate-600 mb-10'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
            <div className='flex gap-2.5 font-inter text-sm'>
                  <button className='w-42.5 h-10 flex rounded-lg items-center justify-center bg-[linear-gradient(90deg,#F97316_0%,#EC4899_100%)] font-semibold'>Explore Technologies</button>
                  <button className='w-42.5 h-10 flex rounded-lg items-center justify-center border border-gray-200'>Learn More</button>
            </div>
         </div>
      </div>
      <div className='flex-2 flex-center'>
         <img src={BannerStack}/>
      </div>
    </section>
  )
}
