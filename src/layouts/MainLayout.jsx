import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'
import LoadingScreen from '../components/ui/LoadingScreen'
import ScrollToTop from '../components/ui/ScrollToTop'
import WhatsAppButton from '../components/ui/WhatsAppButton'

export default function MainLayout(){
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  if (loading) return <LoadingScreen />

  return (
    <div className="min-h-screen flex flex-col bg-brand-900 text-white">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}
