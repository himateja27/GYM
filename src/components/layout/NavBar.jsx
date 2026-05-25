import React, {useState, useEffect} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {Menu, X} from 'lucide-react'

const links = [
  ['Home','/'],['About','/about'],['Programs','/programs'],['Trainers','/trainers'],['Membership','/membership'],['Gallery','/gallery'],['Events','/events'],['Testimonials','/testimonials'],['Contact','/contact']
]

export default function NavBar(){
  const [open,setOpen] = useState(false)
  const [shrink,setShrink] = useState(false)
  const loc = useLocation()

  useEffect(()=>{
    const onScroll=()=>setShrink(window.scrollY>60)
    window.addEventListener('scroll',onScroll)
    return ()=>window.removeEventListener('scroll',onScroll)
  },[])

  useEffect(()=>setOpen(false),[loc])

  return (
    <header className={`fixed top-0 w-full z-40 transition-all ${shrink? 'backdrop-blur glass py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-400 flex items-center justify-center text-black font-bold">K</div>
          <div className="text-white font-semibold tracking-wide">KBFI Headquarters</div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(([label,to])=> (
            <NavLink key={to} to={to} end className={({isActive})=>`px-3 py-2 rounded-md text-sm transition-colors ${isActive? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}>
              {label}
            </NavLink>
          ))}
          <NavLink to="/join" className="ml-4 bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold">Join Now</NavLink>
        </nav>

        <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label="menu">
          {open? <X/> : <Menu/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 bg-black/80 glass border-t border-gray-800">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(([label,to])=> (
              <NavLink key={to} to={to} className="text-gray-200 py-2">{label}</NavLink>
            ))}
            <NavLink to="/join" className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold w-max">Join Now</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
