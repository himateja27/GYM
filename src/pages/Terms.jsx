import React from 'react'
import Seo from '../components/Seo'

export default function Terms(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Seo
        title="Terms & Conditions"
        description="Terms and conditions for Fighters Combat Academy membership, training services, and online engagement."
      />

      <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-10 shadow-2xl shadow-black/30">
        <h1 className="text-4xl font-bold text-white">Terms & Conditions</h1>
        <p className="mt-6 text-gray-400">By joining Fighters Combat Academy, you agree to our premium training policies, membership guidelines, and athlete conduct standards.</p>
        <div className="mt-8 space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white">Membership Agreement</h2>
            <p className="mt-3">Members agree to maintain respect, follow academy schedules, and engage safely in all training sessions.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Program Participation</h2>
            <p className="mt-3">Training services are provided with a premium focus on athlete safety, performance and championship readiness.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-3">For full terms, reach out to contact@fighterscombatacademy.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
