import React, {useEffect, useState} from 'react'
import { getGallery } from '../services/api'

export default function Gallery(){
  const [images,setImages]=useState([])
  useEffect(()=>{getGallery().then(setImages)},[])
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img,i)=>(
          <div key={i} className="h-48 bg-cover bg-center rounded-md" style={{backgroundImage:`url(${img.url})`}}/>
        ))}
      </div>
    </div>
  )
}
