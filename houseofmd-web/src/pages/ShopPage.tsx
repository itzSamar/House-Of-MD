import { Helmet } from 'react-helmet-async'
import { Link, useSearchParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { assets } from '../lib/assets'
import { categories, products } from '../lib/products'

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ')
}

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const cat = searchParams.get('cat')

  const filtered = cat
    ? products.filter((p) => p.categories.includes(decodeURIComponent(cat) as never))
    : products

  return (
    <>
      <Helmet>
        <title>Shop | House of MD</title>
        <meta
          name="description"
          content="Shop party wear, festive wear, pre-stitched sarees, suits, lehengas, and fusion sets from House of MD."
        />
      </Helmet>

      <section className="border-b border-white/5 py-10">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
                SHOP
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-50">
                Collections
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
                High-end party wear Indian & Indo Western couture for events, receptions,
                festivals, and weddings.
              </p>
            </div>
            <div className="text-sm text-neutral-400">
              Showing <span className="text-neutral-200">{filtered.length}</span>{' '}
              item{filtered.length === 1 ? '' : 's'}
              {cat ? (
                <>
                  {' '}
                  in <span className="text-neutral-200">{cat}</span>
                </>
              ) : null}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSearchParams({})}
              className={cx(
                'rounded-full px-4 py-2 text-sm ring-1 transition',
                !cat
                  ? 'bg-amber-200/95 text-neutral-950 ring-amber-200/30'
                  : 'bg-white/5 text-neutral-200 ring-white/10 hover:bg-white/8',
              )}
            >
              All
            </button>
            {categories.map((c) => {
              const active = cat === c
              return (
                <button
                  key={c}
                  onClick={() => setSearchParams({ cat: c })}
                  className={cx(
                    'rounded-full px-4 py-2 text-sm ring-1 transition',
                    active
                      ? 'bg-amber-200/95 text-neutral-950 ring-amber-200/30'
                      : 'bg-white/5 text-neutral-200 ring-white/10 hover:bg-white/8',
                  )}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to={`/shop/${p.slug}`}
                className="group overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 hover:bg-white/[0.07]"
              >
                <div className="relative">
                  <img
                    src={assets[p.image]}
                    alt={p.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-[0.22em] text-neutral-400">
                    {p.categories.slice(0, 2).join(' • ')}
                  </div>
                  <div className="mt-2 text-base font-semibold text-neutral-50">
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
                      View →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-b from-white/8 to-white/3 p-8 ring-1 ring-white/10">
            <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
              CAN’T FIND YOUR LOOK?
            </div>
            <div className="mt-3 text-xl font-semibold text-neutral-50">
              Message us with your occasion + size and we’ll curate options.
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              We offer appointment shopping and styling help for weddings, festivals,
              receptions, and parties.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex h-11 items-center justify-center rounded-full bg-amber-200/95 px-5 text-sm font-medium text-neutral-950 hover:bg-amber-200"
                href="https://www.instagram.com/houseofmd_official/"
                target="_blank"
                rel="noreferrer"
              >
                Message on Instagram
              </a>
              <Link
                className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-white/8"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

