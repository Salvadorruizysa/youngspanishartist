# SKYPEROOM

Proyecto Next.js para portfolio con carousel infinito y animaciones stacked poster.

## Instalación

1. Instala las dependencias: `npm install`
2. Ejecuta el servidor de desarrollo: `npm run dev`
3. Abre http://localhost:3000/work para ver la página principal.

## Estructura

- `/work`: Página con carousel infinito de portadas de podcast.
- `/skyperoom`: Página con animación stacked poster y galería.

## Personalización

- **Imágenes**: Coloca las imágenes en `public/images/`. Modifica los arrays en los componentes para cambiar las imágenes.
- **Velocidad del carousel**: En `components/Carousel.jsx`, cambia el valor en `setInterval`.
- **Estilos**: Usa Tailwind CSS. Modifica las clases para ajustar colores, tamaños, etc.
- **Animaciones**: En `components/StackedPoster.jsx`, ajusta las transiciones y posiciones.

## Componentes

- `Carousel.jsx`: Carrusel horizontal infinito.
- `StackedPoster.jsx`: Animación de posters apilados.
- `Gallery.jsx`: Galería en grid responsive.