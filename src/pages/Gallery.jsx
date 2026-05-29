import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '../components/Seo'
import galleryData from '../data/gallery.json'
import imageLibrary from '../constants/imageLibrary'

const categories = ['All', 'MMA', 'Karate', 'Kickboxing', 'Muay Thai', 'BJJ', 'Kids Training', 'Championships', 'Fitness', 'Events']

export default function Gallery(){
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const images = useMemo(() => galleryData.map(item => ({ ...item, src: imageLibrary[item.imageKey] })), [])
  const filtered = activeCategory === 'All' ? images : images.filter(item => item.category === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Seo
        title="Gallery"
        description="Explore Fighters Combat Academy’s premium combat sports gallery with MMA, Karate, Kickboxing, BJJ and championship training visuals."
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">Gallery</h1>
          <p className="mt-3 max-w-2xl text-gray-400">A cinematic showcase of premium training, elite athletes, championships and academy life.</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-2 text-sm transition ${activeCategory === category ? 'border-yellow-400 bg-yellow-500 text-black' : 'border-white/10 bg-white/5 text-gray-300 hover:border-yellow-400 hover:text-white'}`}>
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map(item => (
          <motion.button
            key={item.id}
            onClick={() => setLightbox(item)}
            whileHover={{ scale: 1.02 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-gray-950 p-0 text-left shadow-2xl shadow-black/30"
          >
            <div className="relative h-72 overflow-hidden">
              <img src={item.src} alt={item.caption} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">{item.category}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.caption}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          >
            <button onClick={() => setLightbox(null)} className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm text-white">Close</button>
            <motion.img src={lightbox.src} alt={lightbox.caption} layoutId={lightbox.id} className="max-h-[90vh] max-w-[90vw] rounded-[2rem] object-cover shadow-2xl shadow-black/80" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
