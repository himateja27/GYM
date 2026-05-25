import React from 'react'

export default function Join(){
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Join Now</h1>
      <form className="mt-6 space-y-4">
        <input className="w-full p-3 bg-gray-800 rounded-md" placeholder="Full name" />
        <input className="w-full p-3 bg-gray-800 rounded-md" placeholder="Email" />
        <select className="w-full p-3 bg-gray-800 rounded-md">
          <option>Choose Program</option>
        </select>
        <div className="flex gap-3">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Register</button>
        </div>
      </form>
    </div>
  )
}
