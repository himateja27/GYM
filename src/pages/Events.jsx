import React, { useEffect, useState } from 'react'
import { getEvents } from '../services/api'
import Seo from '../components/Seo'
import imageLibrary from '../constants/imageLibrary'

export default function Events(){
  const [events, setEvents] = useState([])

  useEffect(() => { getEvents().then(setEvents) }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Seo
        title="Events"
        description="Stay updated on Fighters Combat Academy championship events, training camps and elite fight series."
      />

      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Events</span>
          <h1 className="mt-3 text-4xl font-bold text-white">Championship events and training camps.</h1>
        </div>
        <p className="max-w-xl text-gray-400">Join world-class events and fight camps designed for competitive fighters and elite athletes.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {events.map(event => (
          <div key={event.id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 shadow-2xl shadow-black/30">
            <div className="h-72 overflow-hidden bg-gray-900">
              <img src={imageLibrary[event.imageKey]} alt={event.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
              <p className="mt-4 text-gray-400">{event.description}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-400">
                <span>{event.date}</span>
                <span>•</span>
                <span>{event.location}</span>
              </div>
              <button className="mt-8 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-yellow-500/30">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
