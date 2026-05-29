import React from 'react'
import { Phone } from 'lucide-react'

export default function WhatsAppButton(){
  const phone = '+919553041347'
  const message = 'Hi%20Master%20Azhar%2C%20I%20would%20like%20to%20know%20more%20about%20Fighters%20Combat%20Academy.'
  return (
    <a
      href={`https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-6 z-50 flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-white shadow-2xl shadow-green-600/30 transition-transform hover:-translate-y-1"
      aria-label="Chat on WhatsApp"
    >
      <Phone size={20} />
      <span className="text-sm font-semibold">Chat</span>
    </a>
  )
}
