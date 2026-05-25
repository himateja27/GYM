import {useEffect, useState} from 'react'

export default function useScrollShrink(threshold=60){
  const [shrink,setShrink]=useState(false)
  useEffect(()=>{
    const onScroll=()=>setShrink(window.scrollY>threshold)
    window.addEventListener('scroll',onScroll)
    return ()=>window.removeEventListener('scroll',onScroll)
  },[threshold])
  return shrink
}
