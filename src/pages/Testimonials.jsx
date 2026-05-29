import React from 'react'
import Seo from '../components/Seo'
import TestimonialsPreview from '../components/sections/TestimonialsPreview'

export default function Testimonials(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Seo
        title="Testimonials"
        description="Read premium athlete reviews and success stories from Fighters Combat Academy and Master Azhar’s coaching team."
      />

      <div className="mb-10">
        <span className="text-sm uppercase tracking-[0.4em] text-yellow-400">Testimonials</span>
        <h1 className="mt-3 text-4xl font-bold text-white">What fighters say about FCA.</h1>
      </div>

      <TestimonialsPreview />
    </div>
  )
}
