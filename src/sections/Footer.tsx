import React from 'react'
import DevStackIcon from '../assets/logo-text.png'

export default function Footer() {
  return (
    <footer className='w-[90vw] m-auto'>
        <div className='flex py-7.5 border-b border-slate-100'>
            <div className='flex-2'>
                <img className='h-7 object-contain' src={DevStackIcon}/>
                <p className='text-xs text-[#64748B] leading-[19.5px] my-3'>Curated tools, technologies, and resources for developers building modern software.</p>
                <ul className='flex gap-4 text-xs font-semibold text-[#475569]'>
                    <li>
                        <a href="">GitHub</a>
                    </li>
                    <li>
                        <a href="">Twitter</a>
                    </li>
                    <li>
                        <a href="">LinkedIn</a>
                    </li>
                </ul>
            </div>
            <div className='flex-1 link-section'>
                <h3>PRODUCT</h3>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Technologies</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                </ul>
            </div>
            <div className='flex-1 link-section'>
                <h3>COMPANY</h3>
                <ul>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                </ul>
            </div>     
            <div className='flex-1 link-section'>
               <h3>LEGAL</h3>
               <ul>
                  <li>
                     <a href="">Privacy Policy</a>
                  </li>
                  <li>
                     <a href="">Terms of Service</a>
                  </li>
               </ul>
            </div>
        </div>
        <div className='flex items-center justify-between h-20'>
            <p className='text-xs text-[#94A3B8]'>@2026 DevStack. Allrights reserved.</p>
            
            <div className='flex items-center justify-between gap-6 text-xs text-[#94A3B8]'>
                <a>Privacy</a>
                <a>Terms</a>
            </div>
        </div>
    </footer>
  )
}
