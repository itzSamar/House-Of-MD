import { Helmet } from 'react-helmet-async'
import { Container } from '../components/Container'

export function PoliciesPage() {
  return (
    <>
      <Helmet>
        <title>Policies | House of MD</title>
        <meta
          name="description"
          content="House of MD policies for shipping, returns, sizing, and garment care."
        />
      </Helmet>

      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
              POLICIES
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-50">
              Shipping, returns, sizing & care
            </h1>
            <p className="mt-5 text-sm leading-7 text-neutral-300">
              Replace the placeholders below with your final policy language.
            </p>

            <PolicyBlock
              title="Shipping"
              items={[
                'Processing times vary by item and customization.',
                'Local pickup or appointment delivery can be arranged.',
                'Shipping costs and timelines are shared at checkout/inquiry.',
              ]}
            />

            <PolicyBlock
              title="Returns & exchanges"
              items={[
                'Because many pieces are customized, returns may be limited.',
                'If eligible, exchanges must be requested within a specified window.',
                'Items must be unworn with tags/packaging intact.',
              ]}
            />

            <PolicyBlock
              title="Sizing"
              items={[
                'We recommend sharing height, bust/waist/hip measurements.',
                'Alterations may be available depending on the piece.',
                'For the best fit, book an appointment in Dublin, CA.',
              ]}
            />

            <PolicyBlock
              title="Care"
              items={[
                'Dry clean recommended for embellished garments.',
                'Store in breathable garment bags; avoid direct sunlight.',
                'Handle borders and mirror-work/embellishment gently.',
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  )
}

function PolicyBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="text-base font-semibold text-neutral-50">{title}</div>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-neutral-300">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  )
}

