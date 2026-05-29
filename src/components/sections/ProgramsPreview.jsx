import React, { useEffect, useState } from 'react'
import { getPrograms } from '../../services/api'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import imageLibrary from '../../constants/imageLibrary'

export default function ProgramsPreview(){
  const [programs,setPrograms] = useState([])

  useEffect(() => { getPrograms().then(setPrograms) }, [])

  return (
    <section id="programs" className="rounded-[2rem] border border-white/10 bg-black/50 p-8 shadow-2xl shadow-black/50 backdrop-blur-xl">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-white">Featured Programs</h2>
          <p className="mt-3 max-w-xl text-gray-400">Discover elite fight systems designed for championship readiness, athletic development and global competition.</p>
        </div>
        <Button variant="secondary" onClick={()=>window.location.href='/programs'}>Explore All Programs</Button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {programs.slice(0,3).map(p => (
          <motion.div key={p.id} whileHover={{ y: -5 }} className="overflow-hidden rounded-[2rem] border border-gray-800 bg-gray-950 p-5 shadow-xl shadow-black/30 transition-transform">
            <div className="h-44 overflow-hidden rounded-[1.5rem] bg-gray-900">
              <img src={imageLibrary[p.imageKey]} alt={p.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">{p.description}</p>
            <div className="mt-5 flex items-center justify-between gap-4 text-xs text-gray-400">
              <span>{p.level}</span>
              <span>{p.duration}</span>
            </div>
            <div className="mt-5">
              <Button onClick={()=>window.location.href='/programs'}>Join Now</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
