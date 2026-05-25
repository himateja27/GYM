import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

export default function MainLayout(){
  return (
    <div className="min-h-screen flex flex-col bg-brand-900">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
