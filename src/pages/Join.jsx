import React from 'react'
import Seo from '../components/Seo'

const programs = ['Elite MMA Fusion', 'Karate Performance System', 'Combat Fitness & Conditioning', 'Youth Warriors Academy']

export default function Join(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Seo
        title="Join"
        description="Apply to Fighters Combat Academy and start training under Master Azhar with premium combat sports coaching and membership."
      />

      <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-10 shadow-2xl shadow-black/30">
        <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Join Now</span>
        <h1 className="mt-4 text-4xl font-bold text-white">Become part of the elite combat team.</h1>
        <p className="mt-4 text-gray-400">Fill out your details to reserve your introduction session, training consultation, and membership access at Fighters Combat Academy.</p>

        <form className="mt-10 grid gap-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">Full Name</label>
            <input className="w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white outline-none focus:border-yellow-400" placeholder="John Doe" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">Email</label>
            <input className="w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white outline-none focus:border-yellow-400" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">Selected Program</label>
            <select className="w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white outline-none focus:border-yellow-400">
              <option>Select program</option>
              {programs.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">Message</label>
            <textarea className="w-full rounded-3xl border border-white/10 bg-black/70 px-5 py-4 text-white outline-none focus:border-yellow-400" rows={5} placeholder="Tell us about your training goals." />
          </div>
          <button className="inline-flex max-w-fit rounded-full bg-yellow-500 px-8 py-4 text-sm font-semibold text-black shadow-xl shadow-yellow-500/30">Submit Application</button>
        </form>
      </div>
    </div>
  )
}
