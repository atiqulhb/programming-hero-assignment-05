import {useState} from 'react'
import { data } from '@/data'
import StarIcon from '@/assets/star.svg'
import DeleteIcon from '@/assets/x.svg'
import type { Data, SelectedTech } from '../types'

export default function Technologies() {
    const [stack, setStack] = useState<SelectedTech[]>([])

  return (
    <section id="technologies">
        <h2 className='font-extrabold text-4xl text-header tracking-[-0.9px] mb-2'>Explore the <span className='bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>Technologies</span></h2>
        <p className='text-slate-500 mb-10'>Pick one technology per category to build your ideal stack.</p>
        <div className='grid grid-cols-[3fr_1fr] gap-8'>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-8 items-start'>
                {data.map(({ id, name, logo, description, type, level, tag: { title: tagTitle, color, backgroundColor, borderColor }, rating}: Data) => (
                    <div key={id} className='p-5 border border-slate-100 rounded-2xl'>
                        <div className='relative'>
                            <span
                                className='absolute right-0 px-2.5 py-0.5 border rounded-full text-[11.5px]'
                                style={{ color, backgroundColor, borderColor }}
                            >
                                {tagTitle}
                            </span>
                            <img className='w-7 m-1.5 mb-4' src={logo}/>
                            <h3 className='font-bold text-lg text-header my-1.5'>{name}</h3>
                            <p className='text-xs text-slate-500 mb-4'>{description}</p>
                            <div className='flex items-center justify-between mb-4 text-[11px]'>
                                <span className='px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600'>{type}</span>
                                <span className='text-slate-500'>{level}</span>
                                <div className='flex items-center gap-1.25'>
                                    <img className='h-2.25' src={StarIcon}/>
                                    <span className='font-semibold text-slate-700'>{rating}</span>
                                </div>
                            </div>
                            <button 
                                className='w-full text-center bg-[#0A0F1D] text-xs font-medium text-white py-2.5 rounded-lg cursor-pointer'
                                onClick={() => {
                                    setStack((prev) => {
                                        if (prev.some(tech => tech.id === id)) return prev
                                        
                                        return [...prev, { id, name, logo, type }]
                                    })
                                }}
                            >
                                Add to Stack
                            </button>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className='h-fit border border-slate-100 rounded-2xl p-5'>
                <h3 className='font-bold font-header leading-6'>Your Stack</h3>  
                <p className='text-xs text-slate-400 mb-3'>{stack.length} {`Technolog${stack.length > 1 ? 'ies' : 'y'}`} selected</p>
                {stack.length > 0 ? (
                    <div className='w-full flex flex-col gap-1.25'>
                        {stack.map((tech) => (
                            <div key={tech.id} className='border border-slate-200 rounded-lg p-2.5 flex items-center justify-between'>
                                <div className='flex items-center gap-2.5'>
                                    <img src={tech.logo} className='h-7'/>
                                    <div className='flex flex-col justify-center'>
                                        <h4 className='font-bold text-[10px] text-header'>{tech.name}</h4>
                                        <span className='font bold text-[6px] text-slate-400'>{tech.type}</span>
                                    </div>  
                                </div>
                                <button
                                    className='w-6 p-1.5 cursor-pointer'
                                    onClick={() => setStack((prev) => prev.filter(t => t.id !== tech.id)) }
                                >
                                    <img src={DeleteIcon} />
                                </button>
                            </div>
                        ))}
                        <button
                            className='border border-[#ED8C85] rounded-lg py-2.5 text-center text-sm font-semibold text-[#D82C20] cursor-pointer my-2.5'
                            onClick={() => {
                                setStack([])
                            }}
                        >
                            Remove all
                        </button>
                    </div>
                ) : (
                    <div>
                        <p className='w-full text-center py-6 border border-slate-200 rounded-xl text-xs text-slate-400'>Your stack is empty</p>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}