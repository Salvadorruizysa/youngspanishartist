'use client'

import { useState, useEffect } from 'react'

// Array de imágenes en el orden específico: 1, A, 2, B, 3, C, 4, D, 5, E
// Para cambiar imágenes, modifica este array con los nombres de archivos en /public/images
const images = ['1.png', 'A.png', '2.png', 'B.png', '3.png', 'C.png', '4.png', 'D.png', '5.png', 'E.png']

// Duplicamos el array para lograr un loop infinito sin saltos bruscos
const duplicatedImages = [...images, ...images]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    // Intervalo de 1 segundo; para cambiar velocidad, modifica el 1000
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div
      className="relative overflow-hidden w-full h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {duplicatedImages.map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt={`Podcast cover ${img}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  )
}