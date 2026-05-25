import StackedPoster from '@/components/StackedPoster'
import Gallery from '@/components/Gallery'

export default function Skyperoom() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <StackedPoster />
      <h1 className="text-4xl font-bold text-center my-10">Skyperoom</h1>
      <p className="text-center mb-10">Texto descriptivo placeholder editable. Aquí puedes añadir información sobre el proyecto SKYPEROOM.</p>
      <Gallery />
    </div>
  )
}