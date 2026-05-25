import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-4xl font-bold">About KBFI Headquarters</motion.h1>
      <div className="mt-6 text-gray-300 space-y-6">
        <p>Founded with a mission to develop elite martial artists and champions, KBFI Headquarters blends discipline with world-class coaching.</p>
        <p>Our philosophy is rooted in tradition, excellence, and international collaboration. We train fighters for competition and students for life.</p>
      </div>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Leadership</h3>
        <div className="mt-4 p-6 bg-gray-900 rounded-md border border-gray-800">
          <h4 className="font-semibold">B. Parmesh — International Chief Instructor</h4>
          <p className="text-gray-300 mt-2">An esteemed instructor with international recognition and decades of coaching experience.</p>
        </div>
      </section>
    </div>
  )
}
