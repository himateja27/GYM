import React from 'react'
import TestimonialsPreview from '../components/sections/TestimonialsPreview'

export default function Testimonials(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <div className="mt-6">
        <TestimonialsPreview />
      </div>
    </div>
  )
}
