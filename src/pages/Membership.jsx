import React, { useEffect, useState } from 'react'
import { getMemberships } from '../services/api'
import Seo from '../components/Seo'

export default function Membership(){
  const [plans, setPlans] = useState([])

  useEffect(() => { getMemberships().then(setPlans) }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Seo
        title="Membership"
        description="Choose a Fighters Combat Academy membership plan designed for elite athletes, champions and committed martial artists."
      />

      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Membership</span>
          <h1 className="mt-3 text-4xl font-bold text-white">Choose your elite training path.</h1>
        </div>
        <p className="max-w-xl text-gray-400">Select the membership plan that matches your ambition, whether you want championship performance, private coaching or a full high-performance support system.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map(plan => (
          <div key={plan.id} className={`rounded-[2rem] border p-6 shadow-2xl shadow-black/30 transition ${plan.recommended ? 'border-yellow-400 bg-yellow-500/10' : 'border-white/10 bg-gray-950'}`}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-semibold text-white">{plan.name}</p>
              {plan.recommended && <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">Recommended</span>}
            </div>
            <p className="mt-4 text-4xl font-bold text-yellow-400">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-gray-300">
              {plan.features.map((feature, index) => (
                <li key={index} className="leading-6">{feature}</li>
              ))}
            </ul>
            <button className="mt-8 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-yellow-500/30">Start Training</button>
            {plan.discount && <p className="mt-4 text-sm text-yellow-400">{plan.discount} OFF</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
