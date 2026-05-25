import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Trainers from './pages/Trainers'
import Membership from './pages/Membership'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Join from './pages/Join'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="programs" element={<Programs/>} />
        <Route path="trainers" element={<Trainers/>} />
        <Route path="membership" element={<Membership/>} />
        <Route path="gallery" element={<Gallery/>} />
        <Route path="events" element={<Events/>} />
        <Route path="testimonials" element={<Testimonials/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="join" element={<Join/>} />
        <Route path="faq" element={<FAQ/>} />
        <Route path="privacy" element={<Privacy/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}
