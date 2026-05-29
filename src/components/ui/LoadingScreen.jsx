import React from 'react'
import { ShieldCheck } from 'lucide-react'

export default function LoadingScreen(){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4 px-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-black shadow-2xl shadow-yellow-500/30">
          <ShieldCheck size={40} />
        </div>
        <div>
          <p className="text-xl font-semibold tracking-wide">Fighters Combat Academy</p>
          <p className="text-sm text-gray-300">Master Azhar — Premium combat sports training</p>
        </div>
      </div>
    </div>
  )
}
