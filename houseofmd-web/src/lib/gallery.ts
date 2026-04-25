type GlobModule = { default: string }

const modules = import.meta.glob<GlobModule>('../assets/photos/*.{jpg,jpeg,png}', {
  eager: true,
})

export type GalleryImage = {
  src: string
  alt: string
  key: string
}

function guessAltFromFilename(filename: string) {
  // Keep generic (no assumptions); user can later supply a labeling system.
  void filename
  return 'House of MD look'
}

export const galleryImages: GalleryImage[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const key = path.split('/').pop() ?? path
    return { key, src: mod.default, alt: guessAltFromFilename(key) }
  })

