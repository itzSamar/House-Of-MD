import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'
import { assets } from '../lib/assets'
import { galleryImages } from '../lib/gallery'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>House of MD | Indian & Indo Western Couture</title>
        <meta
          name="description"
          content="Party wear Indian & Indo Western couture, festive wear, pre-stitched sarees, suits, lehengas, and fusion sets. Based in Dublin, CA."
        />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
          <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-300/10 blur-3xl" />
        </div>

        <Container>
          <div className="grid items-center gap-10 py-12 md:grid-cols-12 md:py-16">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs tracking-wide text-neutral-300 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
                Based in Dublin, CA
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-50 sm:text-5xl">
                High-end Indian & Indo Western couture for your next celebration.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300">
                Party wear • Festive • Pre stitched sarees • Suits • Lehengas • Fusion Sets.
                Styling help and appointment shopping available.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink to="/gallery" variant="primary">
                  View gallery
                </ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  Contact
                </ButtonLink>
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-white/8"
                  href="https://www.instagram.com/houseofmd_official/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Instagram
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Kpi title="Curated" desc="High-end pieces for events" />
                <Kpi title="Tailored" desc="Fit & styling guidance" />
                <Kpi title="Modern" desc="Indo western fusion edits" />
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-b from-amber-200/10 to-transparent blur-xl" />
                <div className="relative overflow-hidden rounded-[28px] ring-1 ring-white/10">
                  <img
                    src={assets['houseofmd-02']}
                    alt="House of MD couture look"
                    className="h-[520px] w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/5 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xs tracking-[0.22em] text-neutral-200">
                        FEATURED LOOK
                      </div>
                      <div className="mt-1 text-sm text-neutral-300">
                        Modern saree styling with a couture finish
                      </div>
                    </div>
                    <Link
                      to="/gallery"
                      className="rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-100 ring-1 ring-white/15 hover:bg-white/15"
                    >
                      Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-14 md:py-18">
        <Container>
          <div className="rounded-3xl bg-gradient-to-b from-white/8 to-white/3 p-8 ring-1 ring-white/10">
            <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
              IMPORTANT
            </div>
            <div className="mt-3 text-xl font-semibold text-neutral-50">
              Event tomorrow — we’re hosting.
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              Details (time/location) will be posted shortly. For RSVP and info, contact
              us or DM on Instagram.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ButtonLink to="/contact" variant="primary">
                Contact for details
              </ButtonLink>
              <a
                className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-white/8"
                href="https://www.instagram.com/houseofmd_official/"
                target="_blank"
                rel="noreferrer"
              >
                DM on Instagram
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-18">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
                LOOKBOOK
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-50">
                Featured gallery
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
                A glimpse of our styling and silhouettes. Explore the full gallery for
                more.
              </p>
            </div>
            <ButtonLink to="/gallery" variant="secondary" size="sm">
              View gallery
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.slice(0, 6).map((img) => (
              <div
                key={img.key}
                className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-80 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

function Kpi({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
      <div className="text-sm font-semibold text-neutral-100">{title}</div>
      <div className="mt-1 text-xs leading-5 text-neutral-400">{desc}</div>
    </div>
  )
}

