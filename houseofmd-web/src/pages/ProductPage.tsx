import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'
import { assets } from '../lib/assets'
import { products } from '../lib/products'

export function ProductPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <Container>
        <div className="py-16">
          <div className="text-xl font-semibold text-neutral-50">Product not found</div>
          <p className="mt-2 text-sm text-neutral-300">
            Return to the shop to explore available pieces.
          </p>
          <div className="mt-6">
            <ButtonLink to="/shop" variant="primary">
              Back to shop
            </ButtonLink>
          </div>
        </div>
      </Container>
    )
  }

  const title = `${product.title} | House of MD`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={product.subtitle} />
      </Helmet>

      <section className="py-10">
        <Container>
          <div className="text-sm text-neutral-400">
            <Link className="hover:text-neutral-200" to="/shop">
              Shop
            </Link>{' '}
            <span className="text-neutral-600">/</span>{' '}
            <span className="text-neutral-200">{product.title}</span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
                <img
                  src={assets[product.image]}
                  alt={product.title}
                  className="h-[560px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="text-xs tracking-[0.22em] text-neutral-400">
                {product.categories.join(' • ')}
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-50">
                {product.title}
              </h1>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                {product.subtitle}
              </p>

              <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-300">Starting at</div>
                  <div className="text-lg font-semibold text-neutral-50">
                    {product.priceFrom ? `$${product.priceFrom}` : 'Price on request'}
                  </div>
                </div>
                <div className="mt-4 grid gap-2">
                  {product.details.map((d) => (
                    <div key={d} className="flex gap-2 text-sm text-neutral-300">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-amber-200" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-full bg-amber-200/95 px-5 text-sm font-medium text-neutral-950 hover:bg-amber-200"
                    href="https://www.instagram.com/houseofmd_official/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inquire on Instagram
                  </a>
                  <ButtonLink to="/contact" variant="secondary">
                    Book appointment
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-b from-white/8 to-white/3 p-5 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
                  STYLING NOTE
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  Tell us your event, height, and preferred fit. We’ll recommend styling,
                  drape, and accessories to match the vibe.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

