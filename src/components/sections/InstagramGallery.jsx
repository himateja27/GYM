import React from 'react'
import { Instagram, ArrowRight } from 'lucide-react'
import imageLibrary from '../../constants/imageLibrary'

const previewKeys = ['gallery-mma-1', 'gallery-karate-1', 'gallery-kickboxing-1', 'gallery-muaythai-1']

export default function InstagramGallery(){
  return (
    <section className="mt-16 rounded-3xl border border-gray-800 bg-black/70 p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Social Showcase</span>
          <h2 className="mt-3 text-3xl font-semibold">Follow the fight journey</h2>
          <p className="mt-4 max-w-2xl text-gray-300">Discover training moments, athlete transformations and behind-the-scenes championship preparation from Master Azhar’s Instagram feed.</p>
        </div>

        <a href="https://www.instagram.com/MasterAzharFCA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-yellow-500 px-5 py-3 text-black font-semibold transition hover:bg-yellow-400">
          <Instagram size={18} /> @MasterAzharFCA
          <ArrowRight size={18} />
        </a>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {previewKeys.map(key => (
          <div key={key} className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-950/80 shadow-inner shadow-black/20">
            <img src={imageLibrary[key]} alt="Instagram preview" className="h-36 w-full object-cover transition duration-500 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  )
}
