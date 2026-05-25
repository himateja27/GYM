import React, {useEffect, useState} from 'react'
import { getTrainers } from '../services/api'

export default function Trainers(){
  const [trainers,setTrainers] = useState([])
  useEffect(()=>{getTrainers().then(setTrainers)},[])
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Trainers</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {trainers.map(t=> (
          <div key={t.id} className="p-5 bg-gray-900 rounded-md border border-gray-800">
            <div className="h-44 w-full bg-cover bg-center rounded-md" style={{backgroundImage:`url(${t.photo})`}} />
            <h3 className="mt-3 font-semibold text-xl">{t.name}</h3>
            <div className="text-sm text-gray-400">{t.title}</div>
            <div className="mt-2 text-gray-300 text-sm">Certifications: {t.certifications.join(', ')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
