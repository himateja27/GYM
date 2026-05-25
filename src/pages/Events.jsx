import React, {useEffect, useState} from 'react'
import { getEvents } from '../services/api'

export default function Events(){
  const [events,setEvents]=useState([])
  useEffect(()=>{getEvents().then(setEvents)},[])
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Events & Championships</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(e=> (
          <div key={e.id} className="p-6 bg-gray-900 rounded-md border border-gray-800">
            <h3 className="text-xl font-semibold">{e.title}</h3>
            <p className="text-gray-300 mt-2">{e.description}</p>
            <div className="mt-3 text-sm text-gray-400">{e.date} • {e.location}</div>
            <div className="mt-4"><button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Register</button></div>
          </div>
        ))}
      </div>
    </div>
  )
}
