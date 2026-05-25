import React, {useEffect, useState} from 'react'
import { getTestimonials } from '../../services/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function TestimonialsPreview(){
  const [testimonials,setTestimonials] = useState([])
  useEffect(()=>{getTestimonials().then(setTestimonials)},[])
  return (
    <section className="mt-10">
      <h3 className="text-xl font-semibold">What Students Say</h3>
      <div className="mt-4">
        <Swiper spaceBetween={20} slidesPerView={1}>
          {testimonials.map(t=> (
            <SwiperSlide key={t.id}>
              <div className="p-6 bg-gray-900 rounded-md border border-gray-800">
                <p className="text-gray-300">“{t.message}”</p>
                <div className="mt-4 text-sm text-gray-400">— {t.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
