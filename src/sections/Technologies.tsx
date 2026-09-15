import React from 'react'
import { data } from '@/data'
import ReactIcon from '@/assets/react.svg'
import StarIcon from '@/assets/star.svg'
import type { Data } from '../types'

export default function Technologies() {
  return (
    <section>
        <h2>Explore the Technologies</h2>
        <p>Pick one technology per category to build your ideal stack.</p>
        <div>
            <div className='flex-3 flex gap-5 flex-wrap'>
                {data.map(({ id, name, logo, description, type, level, tag, rating}: Data) => (
                    <div key={id}  className='w-100 p-5 border border-slate-100 rounded-2xl'>
                        <img className='w-7' src={logo}/>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className='flex items-center'>
                            <span>{type}</span>
                            <span>{level}</span>
                            <div className='flex items-center'>
                                <img className='h-2.25' src={StarIcon}/>
                                <span>{rating}</span>
                            </div>
                        </div>
                        <button className='w-full text-center bg-[#0A0F1D] text-white py-2.5 rounded-lg'>Add to Stack</button>
                    </div>
                ))}
                
            </div>
            <div className='flex-1'></div>
        </div>
    </section>
  )
}
