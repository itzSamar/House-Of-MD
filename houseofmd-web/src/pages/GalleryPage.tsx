import { Helmet } from 'react-helmet-async'
import { Container } from '../components/Container'
import { galleryImages } from '../lib/gallery'

export function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Gallery | House of MD</title>
        <meta
          name="description"
          content="House of MD lookbook gallery — party wear, festive, and Indo Western couture."
        />
      </Helmet>

      <section className="border-b border-white/5 py-12">
        <Container>
          <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
            GALLERY
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-50">
            Lookbook
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
            A curated set of visuals. You’ll provide your photo organization system later—
            for now, these live here as a high-end gallery.
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((img) => (
              <figure
                key={img.key}
                className="mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

