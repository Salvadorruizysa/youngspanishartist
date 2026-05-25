'use client'

import { useState } from 'react'

// Array de imágenes
// Para cambiar imágenes, modifica este array
const images = ['1.png', 'A.png', '2.png', 'B.png', '3.png', 'C.png', '4.png', 'D.png', '5.png', 'E.png']

// Posiciones aleatorias fijas para cada imagen
const positions = images.map(() => ({
  rotate: Math.random() * 10 - 5, // -5deg to 5deg
  translateX: Math.random() * 40 - 20, // -20px to 20px
  translateY: Math.random() * 40 - 20, // -20px to 20px
}))

export default function StackedPoster() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative h-96 flex items-center justify-center perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={`/images/${img}`}
          alt={`Stacked poster ${img}`}
          className={`absolute w-48 h-48 object-cover transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-0 translate-x-0 translate-y-0 shadow-2xl' : ''
          }`}
          style={{
            zIndex: index,
            transform: isHovered
              ? 'scale(1.1) rotate(0deg) translateX(0px) translateY(0px)'
              : `rotate(${positions[index].rotate}deg) translateX(${positions[index].translateX}px) translateY(${positions[index].translateY}px)`,
            boxShadow: isHovered ? '0 25px 50px rgba(0,0,0,0.5)' : '0 5px 15px rgba(0,0,0,0.2)',
          }}
        />
      ))}
    </div>
  )
}