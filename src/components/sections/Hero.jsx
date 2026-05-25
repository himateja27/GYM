import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function Hero(){
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop&sat=-100')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="text-5xl md:text-7xl font-bold tracking-tight text-white">KBFI Headquarters</motion.h1>
        <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.35}} className="mt-4 text-xl text-gray-200">Karate • Kickboxing • MMA • Boxing • Muay Thai • BJJ</motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mt-8 flex items-center justify-center gap-4">
          <Button onClick={()=>window.location.href='/join'}>Join Now</Button>
          <Button variant="secondary" onClick={()=>document.getElementById('programs')?.scrollIntoView({behavior:'smooth'})}>Explore Programs</Button>
        </motion.div>

        <div className="mt-12 flex items-center justify-center text-gray-300 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">40+</div>
            <div className="text-sm">International Titles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">1200+</div>
            <div className="text-sm">Members Trained</div>
          </div>
        </div>
      </div>
    </section>
  )
}
