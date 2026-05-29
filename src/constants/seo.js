const siteMeta = {
  siteName: 'Fighters Combat Academy',
  siteUrl: 'https://fighterscombatacademy.com',
  description: 'Fighters Combat Academy is Hyderabad’s elite combat sports destination led by Master Azhar. Training in MMA, Karate, Muay Thai, BJJ, Kickboxing, and championship preparation.',
  phone: '+919553041347',
  email: 'contact@fighterscombatacademy.com',
  address: {
    street: 'BTR Tower, 2nd Floor, Prem Nagar, Kondapur',
    city: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500049',
    country: 'India'
  },
  image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop',
  twitterHandle: '@MasterAzharFCA',
  facebookPage: 'https://www.facebook.com/MasterAzharFCA',
  instagramPage: 'https://www.instagram.com/MasterAzharFCA',
  youtubePage: 'https://www.youtube.com/@MasterAzharFCA',
  sameAs: [
    'https://www.facebook.com/MasterAzharFCA',
    'https://www.instagram.com/MasterAzharFCA',
    'https://www.youtube.com/@MasterAzharFCA'
  ]
}

siteMeta.localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: siteMeta.siteName,
  description: siteMeta.description,
  url: siteMeta.siteUrl,
  telephone: siteMeta.phone,
  email: siteMeta.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteMeta.address.street,
    addressLocality: siteMeta.address.city,
    addressRegion: siteMeta.address.region,
    postalCode: siteMeta.address.postalCode,
    addressCountry: siteMeta.address.country
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.4415',
    longitude: '78.3917'
  },
  openingHours: 'Mo-Su 06:00-22:00',
  sameAs: siteMeta.sameAs,
  image: siteMeta.image,
  priceRange: '$$',
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Fighters+Combat+Academy+Hyderabad'
}

siteMeta.personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Master Azhar',
  jobTitle: 'Founder & Chief Instructor',
  description: 'Master Azhar is an international combat sports coach with a championship legacy in MMA, Karate, Muay Thai and elite athlete development.',
  url: siteMeta.siteUrl,
  sameAs: siteMeta.sameAs,
  email: siteMeta.email,
  image: siteMeta.image,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteMeta.address.city,
    addressRegion: siteMeta.address.region,
    addressCountry: siteMeta.address.country
  }
}

export function faqSchema(faqs, path = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  }
}

export default siteMeta
