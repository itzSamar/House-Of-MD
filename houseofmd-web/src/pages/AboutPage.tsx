import { Helmet } from 'react-helmet-async'
import { Container } from '../components/Container'

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | House of MD</title>
        <meta
          name="description"
          content="House of MD — high-end Indian & Indo Western couture in Dublin, CA."
        />
      </Helmet>

      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
              ABOUT
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-50">
              Elevated looks for celebrations.
            </h1>
            <p className="mt-5 text-sm leading-7 text-neutral-300">
              House of MD curates party wear Indian & Indo Western couture with a focus on
              premium finishing, statement detail, and modern silhouettes. From festive
              edits to wedding-ready pieces, we help you build a complete look—made to
              feel confident, polished, and high-end.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Value
                title="Curated assortment"
                desc="Handpicked styles across sarees, suits, lehengas, and fusion sets."
              />
              <Value
                title="Styling support"
                desc="Fit guidance and styling notes based on your event and vibe."
              />
              <Value
                title="Couture details"
                desc="Premium borders, embellishment work, and luxe fabrics."
              />
              <Value
                title="Appointment shopping"
                desc="Visit us in Dublin, CA for a personalized selection."
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function Value({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="text-base font-semibold text-neutral-50">{title}</div>
      <div className="mt-2 text-sm leading-6 text-neutral-300">{desc}</div>
    </div>
  )
}

