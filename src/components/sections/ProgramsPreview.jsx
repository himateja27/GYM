import React, {useEffect, useState} from 'react'
import { getPrograms } from '../../services/api'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function ProgramsPreview(){
  const [programs,setPrograms] = useState([])
  useEffect(()=>{getPrograms().then(setPrograms)},[])
  return (
    <section id="programs" className="bg-black/40 glass p-8 rounded-md -mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Featured Programs</h2>
        <Button variant="secondary" onClick={()=>window.location.href='/programs'}>View All</Button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.slice(0,3).map(p=> (
          <motion.div key={p.id} whileHover={{scale:1.02}} className="p-4 bg-gray-900 rounded-md border border-gray-800">
            <div className="h-40 bg-cover bg-center rounded-md" style={{backgroundImage:`url(${p.image})`}} />
            <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{p.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-gray-400">{p.level} • {p.duration}</div>
              <Button onClick={()=>window.location.href='/programs'}>Learn</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
