import React from 'react'

export default function Contact(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 text-gray-300">BTR Tower, 2nd Floor, Prem Nagar, My Home Mangala Road, Kondapur, Hyderabad – 500049</p>
      <p className="mt-2 text-gray-300">Phone: +91 9553041347 | +91 8712217250</p>

      <form className="mt-6 grid grid-cols-1 gap-4">
        <input className="p-3 bg-gray-800 rounded-md" placeholder="Your name" />
        <input className="p-3 bg-gray-800 rounded-md" placeholder="Email" />
        <textarea className="p-3 bg-gray-800 rounded-md" placeholder="Message" rows={6} />
        <div><button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Send Message</button></div>
      </form>
    </div>
  )
}
