import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="border-t border-gray-800 bg-black/60 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">K</div>
          <p className="mt-3 text-gray-300 text-sm max-w-xs">KBFI Headquarters — Elite martial arts training across international disciplines.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-200">Quick Links</h4>
          <ul className="mt-3 text-gray-400 text-sm space-y-2">
            <li>Programs</li>
            <li>Trainers</li>
            <li>Membership</li>
            <li>Events</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-200">Contact</h4>
          <p className="mt-3 text-gray-400 text-sm">BTR Tower, 2nd Floor, Prem Nagar, Kondapur, Hyderabad – 500049</p>
          <p className="mt-2 text-gray-400 text-sm">+91 9553041347 | +91 8712217250</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-200">Newsletter</h4>
          <p className="mt-3 text-gray-400 text-sm">Join our newsletter for elite updates and exclusive offers.</p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">© {new Date().getFullYear()} KBFI Headquarters. All rights reserved.</div>
    </footer>
  )
}
