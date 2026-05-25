import React from 'react'
import Hero from '../components/sections/Hero'
import ProgramsPreview from '../components/sections/ProgramsPreview'
import TestimonialsPreview from '../components/sections/TestimonialsPreview'

export default function Home(){
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-6 -mt-24">
        <ProgramsPreview />
        <TestimonialsPreview />
      </div>
    </div>
  )
}
