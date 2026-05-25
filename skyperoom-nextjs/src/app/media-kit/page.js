"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const metadata = {
  title: "Media Kit TendenciasTV 2025",
  description: "Explore the premium Media Kit TendenciasTV 2025 in a modern, ultra-fluid web experience.",
  openGraph: {
    title: "Media Kit TendenciasTV 2025",
    description: "A modern editorial media kit experience optimized for web performance and storytelling.",
    url: "/media-kit",
    type: "website",
    images: [
      {
        url: "/media-kit/img/p1.webp",
        width: 1200,
        height: 1500,
      },
    ],
  },
}

const mediaPages = [
  { src: "/media-kit/img/p1.webp", alt: "Media Kit TendenciasTV 2025 cover" },
  { src: "/media-kit/img/p2.webp", alt: "Media Kit page 2" },
  { src: "/media-kit/img/p3.webp", alt: "Media Kit page 3" },
  { src: "/media-kit/img/p4.webp", alt: "Media Kit page 4" },
  { src: "/media-kit/img/p5.webp", alt: "Media Kit page 5" },
  { src: "/media-kit/img/p6.webp", alt: "Media Kit page 6" },
  { src: "/media-kit/img/p7.webp", alt: "Media Kit page 7" },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export default function MediaKitPage() {
  const [fullscreenIndex, setFullscreenIndex] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setFullscreenIndex(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = fullscreenIndex !== null ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [fullscreenIndex])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
              Media Kit
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Media Kit TendenciasTV 2025
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              A premium visual media kit experience designed for fast web reading, immersive editorial flow, and beautiful image-led storytelling.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/media-kit/pdf/mediakit.pdf"
              download
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/30 hover:bg-white/15 sm:w-auto"
            >
              Download PDF
            </a>
            <a
              href="#preview"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-100 transition hover:border-slate-500 hover:bg-white/10 sm:w-auto"
            >
              View the pages
            </a>
          </div>
        </motion.section>

        <section id="preview" className="mt-16 space-y-14">
          {mediaPages.map((page, index) => (
            <motion.article
              key={page.src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            >
              <div className="relative overflow-hidden bg-[#070707]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0 opacity-0 transition duration-700 hover:opacity-100" aria-hidden="true" />
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={page.src}
                    alt={page.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 900px"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-contain"
                    priority={index === 0}
                    fetchPriority={index === 0 ? "high" : "low"}
                  />
                </div>
              </div>
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                      Page {index + 1}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {index === 0 ? "Cover: TendenciasTV 2025" : `Editorial Spread #${index + 1}`}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFullscreenIndex(index)}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/30 hover:bg-white/15"
                  >
                    Open Fullscreen
                  </button>
                </div>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                  A refined page layout with editorial spacing, subtle shadows, and a cinematic reading rhythm.
                </p>
              </div>
            </motion.article>
          ))}
        </section>
      </div>

      <AnimatePresence>
        {fullscreenIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-auto bg-black/95 px-4 py-6 sm:px-6 sm:py-8"
          >
            <button
              type="button"
              onClick={() => setFullscreenIndex(null)}
              className="absolute right-4 top-4 z-50 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/30 hover:bg-black/90"
            >
              Close
            </button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6"
            >
              <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#070707] shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={mediaPages[fullscreenIndex].src}
                    alt={mediaPages[fullscreenIndex].alt}
                    fill
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <p className="max-w-3xl text-center text-sm leading-7 text-slate-400">
                Fullscreen preview mode — press Escape or Close to return to the editorial flow.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  )
}
