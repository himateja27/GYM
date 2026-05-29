import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import useScrollShrink from '../../hooks/useScrollShrink'

const links = [
  ['Home','/'],
  ['About','/about'],
  ['Programs','/programs'],
  ['Trainers','/trainers'],
  ['Membership','/membership'],
  ['Gallery','/gallery'],
  ['Events','/events'],
  ['Testimonials','/testimonials'],
  ['Contact','/contact']
]

export default function NavBar(){
  const [open,setOpen] = useState(false)
  const shrink = useScrollShrink()
  const location = useLocation()

  React.useEffect(() => setOpen(false), [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${shrink ? 'backdrop-blur glass border-b border-white/10 py-3' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-yellow-400 text-black font-black tracking-wider">F</div>
          <div>
            <div className="text-white font-semibold tracking-[0.2em] uppercase text-sm">Fighters Combat Academy</div>
            <div className="text-xs text-gray-400">Master Azhar — Elite combat sports training</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label,to])=> (
            <NavLink key={to} to={to} end className={({isActive})=>`px-3 py-2 text-sm transition-all ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}>
              {label}
            </NavLink>
          ))}
          <NavLink to="/join" className="ml-4 rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-yellow-500/20">Join</NavLink>
        </nav>

        <button className="md:hidden p-2 text-white" onClick={()=>setOpen(v=>!v)} aria-label="menu">
          {open? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 px-6 py-4 backdrop-blur">
          <div className="flex flex-col gap-3">
            {links.map(([label,to])=> (
              <NavLink key={to} to={to} className="rounded-xl px-3 py-2 text-gray-200 transition hover:bg-white/5">{label}</NavLink>
            ))}
            <NavLink to="/join" className="mt-3 inline-flex w-max rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-black">Join Now</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
