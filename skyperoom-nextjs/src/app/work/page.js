'use client'

import Carousel from '@/components/Carousel'

export default function Work() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <h1 className="absolute top-10 left-10 text-6xl font-bold z-10">
          <a href="/skyperoom" className="hover:underline">SKYPEROOM</a>
        </h1>
        <Carousel />
      </div>
    </div>
  )
}