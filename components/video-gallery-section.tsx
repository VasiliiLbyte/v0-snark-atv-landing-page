'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

type RutubeVideo = {
  platform: 'rutube'
  embedId: string
  title: string
  poster: string
}

type VkVideo = {
  platform: 'vk'
  embedUrl: string
  title: string
  poster: string
}

type Video = RutubeVideo | VkVideo

// TODO: положи 3 постера 1280×720 в public/videos/poster-1.jpg, poster-2.jpg, poster-3.jpg
// TODO: замени заголовки видео на реальные
const videos: Video[] = [
  {
    platform: 'rutube',
    embedId: '71ae909e17968a9858350441bb6dcf50',
    title: 'СНАРК на бездорожье',
    poster: '/videos/poster-1.jpg',
  },
  {
    platform: 'rutube',
    embedId: '8e748b392c67239d890017fafe9fe757',
    title: 'СНАРК — испытания',
    poster: '/videos/poster-2.jpg',
  },
  {
    platform: 'vk',
    embedUrl: 'https://vkvideo.ru/video_ext.php?oid=18302936&id=456241227&hash=c33965c4249516bc&hd=3',
    title: 'СНАРК — обзор',
    poster: '/videos/poster-3.jpg',
  },
]

function getAutoplaySrc(video: Video): string {
  if (video.platform === 'rutube') {
    return `https://rutube.ru/play/embed/${video.embedId}/?skinColor=d57700&autoplay=1`
  }
  return `${video.embedUrl}&autoplay=1`
}

function platformLabel(platform: Video['platform']): string {
  return platform === 'rutube' ? 'RUTUBE' : 'VK ВИДЕО'
}

function VideoCard({
  video,
  isActive,
  onActivate,
}: {
  video: Video
  isActive: boolean
  onActivate: () => void
}) {
  const [posterError, setPosterError] = useState(false)

  return (
    <div className="group relative aspect-video overflow-hidden rounded-md border border-border bg-card">
      {isActive ? (
        <iframe
          src={getAutoplaySrc(video)}
          title={video.title}
          className="absolute inset-0 h-full w-full"
          frameBorder={0}
          allow="clipboard-write; autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={onActivate}
          className="absolute inset-0 block w-full h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Воспроизвести: ${video.title}`}
        >
          {posterError ? (
            <div className="absolute inset-0 bg-gradient-to-br from-[#131316] to-[#0A0A0B]" />
          ) : (
            <Image
              src={video.poster}
              alt={video.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setPosterError(true)}
            />
          )}

          {/* Gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Platform badge */}
          <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.18em] bg-black/60 border border-white/15 text-white/90 px-2.5 py-1 rounded">
            {platformLabel(video.platform)}
          </span>

          {/* Play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <Play className="h-7 w-7 ml-1" fill="currentColor" />
            </span>
          </span>

          {/* Video title */}
          <span className="absolute bottom-4 left-4 right-4 font-display uppercase text-white text-base md:text-lg text-balance">
            {video.title}
          </span>
        </button>
      )}
    </div>
  )
}

export function VideoGallerySection() {
  const [active, setActive] = useState<Set<number>>(new Set())

  const activate = (idx: number) => {
    setActive((prev) => {
      const next = new Set(prev)
      next.add(idx)
      return next
    })
  }

  return (
    <section id="video" className="section snap-section bg-background relative">
      <div className="container-page relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow inline-block mb-4">Видео</span>
          <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6 text-balance">
            СНАРК в деле
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Никаких слов. Только техника на бездорожье.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, idx) => (
            <VideoCard
              key={video.title}
              video={video}
              isActive={active.has(idx)}
              onActivate={() => activate(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
