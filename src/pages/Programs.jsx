import React, {useEffect, useState} from 'react'
import { getPrograms } from '../services/api'

export default function Programs(){
  const [programs,setPrograms] = useState([])
  useEffect(()=>{getPrograms().then(setPrograms)},[])
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Programs</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map(p=> (
          <article key={p.id} className="p-5 bg-gray-900 rounded-md border border-gray-800 hover:scale-101 transition-transform">
            <div className="h-44 bg-cover bg-center rounded-md" style={{backgroundImage:`url(${p.image})`}} />
            <h3 className="mt-3 font-semibold text-xl">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.description}</p>
            <div className="mt-3 text-sm text-gray-400">{p.level} • {p.age} • {p.duration}</div>
            <div className="mt-4">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Enroll</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
