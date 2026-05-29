import React from 'react'
import Seo from '../components/Seo'
import { faqSchema } from '../constants/seo'

export default function FAQ(){
  const faqs = [
    { q: 'Do you offer trial classes?', a: 'Yes. Book a trial session through the Join page and experience premium training with Master Azhar.' },
    { q: 'What age groups do you train?', a: 'We train kids, teens and adults with tailored programs for every discipline and experience level.' },
    { q: 'Can I join without previous experience?', a: 'Absolutely. Our academy welcomes beginners through elite athletes, providing personalized progress plans.' },
    { q: 'Do you provide championship preparation?', a: 'Yes. FCA offers dedicated competition camps, fight strategy sessions and championship conditioning.' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Seo
        title="FAQ"
        description="Frequently asked questions about Fighters Combat Academy, Master Azhar’s programs, memberships, and championship training."
        additionalSchema={[faqSchema(faqs)]}
      />

      <div className="mb-10">
        <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">FAQ</span>
        <h1 className="mt-3 text-4xl font-bold text-white">Find answers about training, membership, and performance.</h1>
      </div>

      <div className="space-y-5">
        {faqs.map((item, index) => (
          <details key={index} className="rounded-[2rem] border border-white/10 bg-gray-950 p-6 shadow-2xl shadow-black/30">
            <summary className="cursor-pointer text-lg font-semibold text-white">{item.q}</summary>
            <p className="mt-4 text-gray-400">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
