import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-2 text-gray-300">Page not found.</p>
        <Link to="/" className="mt-4 inline-block bg-yellow-500 text-black px-4 py-2 rounded-md">Return Home</Link>
      </div>
    </div>
  )
}
