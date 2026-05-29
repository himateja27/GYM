import React from 'react'
import Seo from '../components/Seo'

const timeline = [
  { year: '2010', title: 'Combat roots', detail: 'Master Azhar begins competitive martial arts training and coaching.' },
  { year: '2015', title: 'International recognition', detail: 'Lead coach for championship athletes across Asia and global tournaments.' },
  { year: '2020', title: 'Academy launch', detail: 'Fighters Combat Academy was founded to empower elite fighters and aspiring athletes.' },
  { year: '2024', title: 'Premium global brand', detail: 'Expanded training programs, workshops, and championship camps for international athletes.' }
]

export default function About(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <Seo
        title="About"
        description="Learn about Fighters Combat Academy and founder Master Azhar, the elite combat sports academy shaping champion fighters in Hyderabad."
      />

      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">About FCA</span>
          <h1 className="mt-4 text-4xl font-bold text-white">A global combat sports academy built for champions.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Fighters Combat Academy is led by Master Azhar, an international combat strategist with deep experience in MMA, Karate, Muay Thai, BJJ and competitive fight preparation. Our academy blends world-class coaching with championship-level training systems to build athletes with power, discipline and global confidence.</p>
          <p className="mt-6 text-gray-300">From youth fighters to professional athletes, FCA delivers premium mentorship, modern training facilities, and a performance culture designed for elite outcomes.</p>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-gray-950 p-8 shadow-2xl shadow-black/40">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">Founder</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Master Azhar</h2>
          <p className="mt-4 text-gray-400">Founder & Chief Instructor with over 16 years of high-performance coaching, international fight camp leadership, and championship-winning training methodology.</p>
          <div className="mt-8 space-y-4 text-sm text-gray-300">
            <div><span className="font-semibold text-white">Specialty:</span> Combat sports, MMA strategy, performance conditioning</div>
            <div><span className="font-semibold text-white">Recognition:</span> International titles, elite coaching awards, media features</div>
            <div><span className="font-semibold text-white">Philosophy:</span> Discipline, precision, grit and next-level athletic confidence.</div>
          </div>
        </aside>
      </div>

      <section className="mt-16 rounded-[2rem] border border-white/10 bg-black/50 p-8 shadow-2xl shadow-black/40">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-white/5 p-6 text-gray-300">
            <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            <p>To create the most powerful combat sports academy in South Asia, blending international techniques with premium athletic development.</p>
          </div>
          <div className="space-y-3 rounded-3xl bg-white/5 p-6 text-gray-300">
            <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            <p>Become the first choice for elite fighters seeking championship coaching, global exposure, and disciplined combat mastery.</p>
          </div>
          <div className="space-y-3 rounded-3xl bg-white/5 p-6 text-gray-300">
            <h3 className="text-xl font-semibold text-white">Our Community</h3>
            <p>We train athletes, families, and professionals in a premium environment built around respect, resilience, and international readiness.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-white">Experience Timeline</h2>
        <div className="mt-8 space-y-6">
          {timeline.map(item => (
            <div key={item.year} className="rounded-[2rem] border border-white/10 bg-gray-950 p-6 shadow-xl shadow-black/30">
              <div className="flex items-center justify-between gap-4">
                <span className="text-yellow-400">{item.year}</span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-3 text-gray-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
