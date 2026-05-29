import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="border-t border-gray-900 bg-black/80 py-16 text-gray-300">
      <div className="max-w-7xl mx-auto grid gap-10 px-6 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-yellow-500 text-black font-bold">F</div>
          <p className="max-w-xs text-sm text-gray-400">Fighters Combat Academy is Hyderabad’s premium combat sports training destination led by Master Azhar.</p>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/MasterAzharFCA" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-400"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/MasterAzharFCA" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-400"><Facebook size={18} /></a>
            <a href="https://www.youtube.com/@MasterAzharFCA" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-400"><Youtube size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Explore</h4>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/programs" className="hover:text-yellow-400">Programs</Link></li>
            <li><Link to="/trainers" className="hover:text-yellow-400">Trainers</Link></li>
            <li><Link to="/membership" className="hover:text-yellow-400">Membership</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h4>
          <div className="mt-4 space-y-3 text-sm text-gray-400">
            <p className="flex items-start gap-2"><MapPin size={16} className="mt-1" /><a href="https://www.google.com/maps/search/?api=1&query=BTR+Tower+Prem+Nagar+Kondapur+Hyderabad" target="_blank" rel="noreferrer" className="hover:text-yellow-400">BTR Tower, 2nd Floor, Prem Nagar, Kondapur, Hyderabad</a></p>
            <p className="flex items-center gap-2"><Phone size={16} /><a href="tel:+919553041347" className="hover:text-yellow-400">+91 95530 41347</a></p>
            <p className="flex items-center gap-2"><Mail size={16} /><a href="mailto:contact@fighterscombatacademy.com" className="hover:text-yellow-400">contact@fighterscombatacademy.com</a></p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Insights</h4>
          <p className="mt-4 text-sm text-gray-400">Join the academy newsletter for premium fight camp invites, workshop alerts, and elite training updates.</p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Fighters Combat Academy. All rights reserved.</div>
    </footer>
  )
}
