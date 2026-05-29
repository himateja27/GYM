import React from 'react'
import { Award, Globe, ShieldCheck, Star } from 'lucide-react'

const accomplishments = [
  { icon: Award, title: 'International Champion', detail: 'Multiple global medals in MMA, Karate and combat sports.' },
  { icon: Globe, title: 'Global Coaching', detail: 'Training international athletes across Asia and the Middle East.' },
  { icon: ShieldCheck, title: 'Certified Trainer', detail: 'FCA certified coach for elite title preparation and athlete performance.' },
  { icon: Star, title: 'Strategic Training', detail: 'Personalized fight camps, strength, and tactical fight systems.' }
]

export default function FounderSpotlight(){
  return (
    <section className="mt-16 rounded-3xl border border-neutral-800 bg-black/70 p-8 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Founder Spotlight</span>
          <h2 className="mt-4 text-4xl font-semibold">Master Azhar — Founder & Chief Instructor</h2>
          <p className="mt-4 max-w-2xl text-gray-300">Master Azhar leads Fighters Combat Academy with an elite blend of combat strategy, championship experience and a global training philosophy. His academy focuses on power, precision, athletic discipline and international fight readiness.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {accomplishments.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="rounded-2xl border border-gray-800 bg-gray-950 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{item.detail}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-800 bg-gradient-to-br from-white/5 via-white/5 to-black/40 p-6 shadow-2xl shadow-black/40">
          <div className="space-y-6">
            <div className="rounded-3xl bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),_transparent)] p-6">
              <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">Master profile</p>
              <h3 className="mt-3 text-3xl font-semibold">Master Azhar</h3>
              <p className="mt-3 text-gray-300">Global combat strategist with more than 16 years shaping elite martial artists, champion fighters, and professional athletes.</p>
            </div>
            <div className="grid gap-3">
              <div className="rounded-2xl bg-gray-950 p-5">
                <p className="text-sm text-gray-400">Experience</p>
                <p className="mt-2 text-lg font-semibold">16+ years</p>
              </div>
              <div className="rounded-2xl bg-gray-950 p-5">
                <p className="text-sm text-gray-400">Certifications</p>
                <p className="mt-2 text-lg font-semibold">International MMA & Karate coach</p>
              </div>
              <div className="rounded-2xl bg-gray-950 p-5">
                <p className="text-sm text-gray-400">Philosophy</p>
                <p className="mt-2 text-lg font-semibold">Strength, focus, and championship mindset.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
