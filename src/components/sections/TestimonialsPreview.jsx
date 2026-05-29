import React, { useEffect, useState } from 'react'
import { getTestimonials } from '../../services/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function TestimonialsPreview(){
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => { getTestimonials().then(setTestimonials) }, [])

  return (
    <section className="rounded-[2rem] border border-white/10 bg-black/50 p-8 shadow-2xl shadow-black/50 backdrop-blur-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-3xl font-semibold text-white">Community Feedback</h3>
          <p className="mt-2 max-w-2xl text-gray-400">Hear from fighters, families and professional athletes training under Master Azhar at Fighters Combat Academy.</p>
        </div>
      </div>

      <div className="mt-8">
        <Swiper spaceBetween={24} slidesPerView={1} breakpoints={{768:{slidesPerView:2}}}>
          {testimonials.map(t => (
            <SwiperSlide key={t.id}>
              <div className="h-full rounded-[2rem] border border-gray-800 bg-gray-950 p-8 shadow-xl shadow-black/30">
                <p className="text-gray-300">“{t.message}”</p>
                <div className="mt-6 text-sm font-semibold text-white">— {t.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
