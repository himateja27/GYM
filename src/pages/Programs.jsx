import React, { useEffect, useState } from 'react'
import { getPrograms } from '../services/api'
import Seo from '../components/Seo'
import imageLibrary from '../constants/imageLibrary'

export default function Programs(){
  const [programs, setPrograms] = useState([])

  useEffect(() => { getPrograms().then(setPrograms) }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Seo
        title="Programs"
        description="Explore premium combat sports programs at Fighters Combat Academy including MMA, Karate, BJJ and elite fitness training." 
      />

      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Programs</span>
          <h1 className="mt-3 text-4xl font-bold text-white">Elite fight systems for every athlete.</h1>
        </div>
        <p className="max-w-xl text-gray-400">Choose the training path that matches your goals, whether you want championship readiness, youth development, or combat fitness.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {programs.map(p => (
          <article key={p.id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1">
            <div className="h-64 overflow-hidden rounded-[1.75rem] bg-gray-900">
              <img src={imageLibrary[p.imageKey]} alt={p.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{p.title}</h3>
            <p className="mt-4 text-gray-400">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-400">
              <span>{p.level}</span>
              <span>{p.age}</span>
              <span>{p.duration}</span>
            </div>
            <button className="mt-8 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-black font-semibold shadow-xl shadow-yellow-500/30">Enroll</button>
          </article>
        ))}
      </div>
    </div>
  )
}
