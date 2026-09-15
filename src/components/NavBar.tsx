import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo-text.png'

const links = [
  { label: "Home", path: "/" },
  { label: "Technologies", path: "/technologies" },
  { label: "Project", path: "/project" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
]

export default function NavBar() {
  return (
    <nav className="border-b border-slate-100">
      <div className='mx-auto w-[90vw] h-20 px-7.5 py-5 flex justify-between items-center text-sm font-semibold leading-5'>
        <NavLink key="landing-page" to="/">
          <img src={Logo}/>
        </NavLink>
        <ul className='flex justify-between items-center gap-5 '>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => isActive ? "text-btn-text" : ""}
              >
                {link.label}
            </NavLink>
          ))}
        </ul>
        <div className='flex justify-between items-center gap-4'>
          <NavLink key="/signin" to="/signin" className={({ isActive }) => isActive ? "text-btn-text" : ""}>Sign In</NavLink>
          <NavLink  key="/signup" to="/signup" className='px-5 py-2.5 rounded-full bg-btn-bg text-white'>Sign Up</NavLink>
        </div>
      </div>
    </nav>
  )
}
