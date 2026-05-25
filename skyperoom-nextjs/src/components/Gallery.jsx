// Componente de galería en grid responsive
// Para cambiar el número de columnas, modifica grid-cols-X en la clase
// Para cambiar imágenes, modifica el array images

const images = ['1.png', 'A.png', '2.png', 'B.png', '3.png', 'C.png', '4.png', 'D.png', '5.png', 'E.png']

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((img, index) => (
        <img
          key={index}
          src={`/images/${img}`}
          alt={`Gallery image ${img}`}
          className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
        />
      ))}
    </div>
  )
}