import React from 'react'

export default function FAQ(){
  const faqs = [
    {q:'Do you offer trial classes?', a:'Yes, book a trial via Join Now page.'},
    {q:'What are the age groups?', a:'Kids, Teens, Adults; see program details.'}
  ]
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="mt-6 space-y-4">
        {faqs.map((f,i)=> (
          <details key={i} className="p-4 bg-gray-900 rounded-md">
            <summary className="font-semibold">{f.q}</summary>
            <p className="mt-2 text-gray-300">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
