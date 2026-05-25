import React from 'react'

export default function Button({children,variant='primary',className='',...props}){
  const base = 'px-5 py-2 rounded-md font-semibold transition-transform'
  const styles = variant==='primary' ? 'bg-yellow-500 text-black hover:scale-105' : 'bg-gray-800 text-white hover:opacity-90'
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>
  )
}
