import React from 'react'
import Seo from '../components/Seo'

export default function Privacy(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Seo
        title="Privacy Policy"
        description="Fighters Combat Academy privacy policy describing data collection, contact details, and member confidentiality."
      />

      <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-10 shadow-2xl shadow-black/30">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-6 text-gray-400">Fighters Combat Academy respects your privacy and protects all personal information shared as part of training registration, membership, and communication requests.</p>
        <div className="mt-8 space-y-6 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white">Information Collected</h2>
            <p className="mt-3">We collect contact details, membership preferences, and training goals to deliver premium academy services and personalized coaching experiences.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Use of Data</h2>
            <p className="mt-3">Data is used for membership management, event invitations, program updates and personalized athlete support.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-3">If you have questions about privacy, please contact contact@fighterscombatacademy.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
