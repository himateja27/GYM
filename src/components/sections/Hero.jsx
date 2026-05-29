import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import imageLibrary from '../../constants/imageLibrary'

export default function Hero(){
  const heroImage = imageLibrary['hero-banner']

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/95" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <span className="mb-6 inline-block text-sm uppercase tracking-[0.4em] text-yellow-400">Elite Combat Sports</span>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Fighters Combat Academy</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 sm:text-xl">Master Azhar’s premium academy for international MMA, Karate, Muay Thai, BJJ and championship athlete performance in Hyderabad.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.75 }} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={() => window.location.href = '/join'}>Book A Trial</Button>
          <Button variant="secondary" onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}>View Programs</Button>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl bg-white/5 px-6 py-5 text-left shadow-2xl shadow-black/30">
            <div className="text-3xl font-semibold text-yellow-400">50+</div>
            <p className="mt-2 text-sm text-gray-300">International medals and fight honours</p>
          </div>
          <div className="rounded-3xl bg-white/5 px-6 py-5 text-left shadow-2xl shadow-black/30">
            <div className="text-3xl font-semibold text-yellow-400">1,200+</div>
            <p className="mt-2 text-sm text-gray-300">Elite athletes trained</p>
          </div>
          <div className="rounded-3xl bg-white/5 px-6 py-5 text-left shadow-2xl shadow-black/30">
            <div className="text-3xl font-semibold text-yellow-400">24/7</div>
            <p className="mt-2 text-sm text-gray-300">Training support and championship prep</p>
          </div>
        </div>
      </div>
    </section>
  )
}
