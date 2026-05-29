import React from 'react'
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from 'lucide-react'
import Seo from '../components/Seo'

export default function Contact(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Seo
        title="Contact"
        description="Contact Fighters Combat Academy and Master Azhar for elite training inquiries, trial classes and membership registration."
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Contact</span>
          <h1 className="mt-3 text-4xl font-bold text-white">Get in touch with Master Azhar.</h1>
          <p className="mt-6 text-gray-400">For membership, training camp enrollment, or corporate combat workshops, use the form below or connect directly through WhatsApp and social channels.</p>

          <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-gray-950 p-8 shadow-2xl shadow-black/30">
            <div className="flex items-start gap-4 text-gray-300">
              <MapPin size={20} className="text-yellow-400" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <a href="https://www.google.com/maps/search/?api=1&query=BTR+Tower+Prem+Nagar+Kondapur+Hyderabad+500049" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-400">BTR Tower, 2nd Floor, Prem Nagar, Kondapur, Hyderabad – 500049</a>
              </div>
            </div>
            <div className="flex items-start gap-4 text-gray-300">
              <Phone size={20} className="text-yellow-400" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:+919553041347" className="text-gray-400 hover:text-yellow-400">+91 95530 41347</a>
              </div>
            </div>
            <div className="flex items-start gap-4 text-gray-300">
              <Mail size={20} className="text-yellow-400" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:contact@fighterscombatacademy.com" className="text-gray-400 hover:text-yellow-400">contact@fighterscombatacademy.com</a>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-gray-300">
              <a href="https://www.instagram.com/MasterAzharFCA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm hover:border-yellow-400"><Instagram size={18} /> Instagram</a>
              <a href="https://www.facebook.com/MasterAzharFCA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm hover:border-yellow-400"><Facebook size={18} /> Facebook</a>
              <a href="https://www.youtube.com/@MasterAzharFCA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm hover:border-yellow-400"><Youtube size={18} /> YouTube</a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-8 shadow-2xl shadow-black/30">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Full Name</label>
              <input className="w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white outline-none focus:border-yellow-400" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Email</label>
              <input className="w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white outline-none focus:border-yellow-400" placeholder="Email address" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Message</label>
              <textarea className="w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white outline-none focus:border-yellow-400" rows={6} placeholder="How can we support your training goals?" />
            </div>
            <button className="w-full rounded-full bg-yellow-500 px-6 py-4 text-sm font-semibold text-black shadow-xl shadow-yellow-500/30">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
