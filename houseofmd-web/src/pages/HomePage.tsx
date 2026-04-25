import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'
import { assets } from '../lib/assets'
import { galleryImages } from '../lib/gallery'
import { products } from '../lib/products'

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
                <ButtonLink to="/shop" variant="primary">
                  Explore collections
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
                      to="/shop"
                      className="rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-100 ring-1 ring-white/15 hover:bg-white/15"
                    >
                      Shop
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
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
                COLLECTIONS
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-50">
                Shop by occasion & silhouette
              </h2>
            </div>
            <ButtonLink to="/shop" variant="secondary" size="sm">
              View all
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <CollectionCard
              title="Pre stitched sarees"
              desc="Effortless drape, evening-ready"
              to="/shop?cat=Pre%20Stitched%20Sarees"
            />
            <CollectionCard
              title="Lehengas"
              desc="Reception & wedding edits"
              to="/shop?cat=Lehengas"
            />
            <CollectionCard
              title="Fusion sets"
              desc="Modern Indo western silhouettes"
              to="/shop?cat=Fusion%20Sets"
            />
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-18">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
                FEATURED
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-50">
                New & standout pieces
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/shop/${p.slug}`}
                className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/[0.07]"
              >
                <div className="grid md:grid-cols-5">
                  <div className="relative md:col-span-2">
                    <img
                      src={assets[p.image]}
                      alt={p.title}
                      className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 md:col-span-3">
                    <div className="text-xs tracking-[0.22em] text-neutral-400">
                      {p.categories.slice(0, 2).join(' • ')}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-neutral-50">
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-neutral-300">
                      {p.subtitle}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-neutral-300">
                        {p.priceFrom ? `From $${p.priceFrom}` : 'Price on request'}
                      </div>
                      <div className="text-sm font-medium text-amber-200">
                        View details →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-18">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
                APPOINTMENT SHOPPING
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-50">
                Try-on, styling, and a couture-level fit.
              </h2>
              <p className="mt-4 text-sm leading-6 text-neutral-300">
                Visit us in Dublin, CA for a personalized selection based on your occasion.
                We’ll help you style the full look—from drape to jewelry pairing.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ButtonLink to="/visit" variant="secondary">
                  Visit details
                </ButtonLink>
                <ButtonLink to="/contact" variant="primary">
                  Book an appointment
                </ButtonLink>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
                <img
                  src={assets['houseofmd-01']}
                  alt="House of MD festive couture"
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
              </div>
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

function CollectionCard({
  title,
  desc,
  to,
}: {
  title: string
  desc: string
  to: string
}) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/8 to-white/3 p-7 ring-1 ring-white/10 hover:from-white/10 hover:to-white/4"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-200/15 blur-3xl transition group-hover:bg-amber-200/20" />
      <div className="text-lg font-semibold text-neutral-50">{title}</div>
      <div className="mt-2 text-sm leading-6 text-neutral-300">{desc}</div>
      <div className="mt-5 text-sm font-medium text-amber-200">Shop now →</div>
    </Link>
  )
}

