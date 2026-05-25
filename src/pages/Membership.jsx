import React, {useEffect, useState} from 'react'
import { getMemberships } from '../services/api'

export default function Membership(){
  const [plans,setPlans]=useState([])
  useEffect(()=>{getMemberships().then(setPlans)},[])
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Membership Plans</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(p=> (
          <div key={p.id} className={`p-6 rounded-md border ${p.recommended? 'border-yellow-500 bg-yellow-900/5' : 'border-gray-800 bg-gray-900'}`}>
            <div className="text-sm text-gray-300">{p.name}</div>
            <div className="mt-2 text-3xl font-bold text-yellow-400">{p.price}</div>
            <ul className="mt-4 text-gray-300 space-y-2">
              {p.features.map((f,i)=>(<li key={i}>{f}</li>))}
            </ul>
            <div className="mt-6">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Select</button>
            </div>
            {p.discount && <div className="mt-2 text-sm text-yellow-400">{p.discount} OFF</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
