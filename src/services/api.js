import axios from 'axios'
import programs from '../data/programs.json'
import trainers from '../data/trainers.json'
import testimonials from '../data/testimonials.json'
import events from '../data/events.json'
import memberships from '../data/memberships.json'
import gallery from '../data/gallery.json'

// Mock API wrapper to simulate async data. Replace with axios calls to real endpoints when available.
export function getPrograms(){
  return Promise.resolve(programs)
}
export function getTrainers(){
  return Promise.resolve(trainers)
}
export function getTestimonials(){
  return Promise.resolve(testimonials)
}
export function getEvents(){
  return Promise.resolve(events)
}
export function getMemberships(){
  return Promise.resolve(memberships)
}
export function getGallery(){
  return Promise.resolve(gallery)
}

export async function fetchRemoteJson(path){
  const response = await axios.get(path)
  return response.data
}

export default {getPrograms,getTrainers,getTestimonials,getEvents,getMemberships,getGallery,fetchRemoteJson}
