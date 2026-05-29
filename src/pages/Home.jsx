import React from 'react'
import Hero from '../components/sections/Hero'
import ProgramsPreview from '../components/sections/ProgramsPreview'
import TestimonialsPreview from '../components/sections/TestimonialsPreview'
import FounderSpotlight from '../components/sections/FounderSpotlight'
import InstagramGallery from '../components/sections/InstagramGallery'
import Seo from '../components/Seo'

export default function Home(){
  return (
    <>
      <Seo
        title="Home"
        description="Fighters Combat Academy is Hyderabad’s premium combat sports destination led by Master Azhar, offering elite MMA, Karate, Muay Thai, BJJ and championship training."
      />
      <Hero />
      <div className="max-w-7xl mx-auto px-6 -mt-24 space-y-16 pb-20">
        <ProgramsPreview />
        <FounderSpotlight />
        <InstagramGallery />
        <TestimonialsPreview />
      </div>
    </>
  )
}
