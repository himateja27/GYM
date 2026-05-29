import React from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound(){
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-900 px-6 py-20">
      <Seo title="404 - Page Not Found" description="The page you are looking for is not available on Fighters Combat Academy." />
      <div className="rounded-[2rem] border border-white/10 bg-gray-950 px-10 py-14 text-center shadow-2xl shadow-black/50">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="mt-4 text-gray-400">This page does not exist. Return to the academy headquarters to continue exploring premium fight training.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-xl shadow-yellow-500/30">Return Home</Link>
      </div>
    </div>
  )
}
