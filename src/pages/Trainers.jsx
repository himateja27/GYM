import React, { useEffect, useState } from 'react'
import { getTrainers } from '../services/api'
import Seo from '../components/Seo'
import imageLibrary from '../constants/imageLibrary'

export default function Trainers(){
  const [trainers, setTrainers] = useState([])

  useEffect(() => { getTrainers().then(setTrainers) }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Seo
        title="Trainers"
        description="Meet the elite coaching team at Fighters Combat Academy led by Master Azhar and expert fight specialists." 
      />

      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Team</span>
          <h1 className="mt-3 text-4xl font-bold text-white">Elite coaching, championship legacy.</h1>
        </div>
        <p className="max-w-xl text-gray-400">Every trainer at FCA brings international experience, proven fight strategies and premium athlete development programs.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {trainers.map(t => (
          <div key={t.id} className="rounded-[2rem] border border-white/10 bg-gray-950 p-6 shadow-2xl shadow-black/30">
            <div className="h-72 overflow-hidden rounded-[1.75rem] bg-gray-900">
              <img src={imageLibrary[t.imageKey]} alt={t.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{t.name}</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-yellow-400">{t.title}</p>
            <p className="mt-4 text-gray-400">Certifications: {t.certifications.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
