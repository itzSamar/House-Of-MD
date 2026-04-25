import { Helmet } from 'react-helmet-async'
import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'

export function VisitPage() {
  return (
    <>
      <Helmet>
        <title>Visit | House of MD</title>
        <meta
          name="description"
          content="Visit House of MD in Dublin, CA. Appointment shopping and styling support available."
        />
      </Helmet>

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
                VISIT
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-50">
                Dublin, CA
              </h1>
              <p className="mt-5 text-sm leading-7 text-neutral-300">
                We’re based in Dublin, California. Book an appointment to shop a curated
                edit for your event—party wear, festive looks, pre stitched sarees,
                lehengas, suits, and modern fusion sets.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Info title="Appointments" desc="Recommended for personalized curation." />
                <Info title="Styling" desc="Drape, fit, and accessory guidance." />
                <Info title="Occasions" desc="Weddings, receptions, festivals, parties." />
                <Info title="Try-on" desc="Find your most flattering silhouette." />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink to="/contact" variant="primary">
                  Book an appointment
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

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-neutral-50">Location</div>
                <div className="mt-2 text-sm leading-6 text-neutral-300">
                  Dublin, CA
                </div>
                <div className="mt-6 text-sm font-semibold text-neutral-50">Hours</div>
                <div className="mt-2 text-sm leading-6 text-neutral-300">
                  By appointment
                </div>
                <div className="mt-6 text-sm font-semibold text-neutral-50">Directions</div>
                <div className="mt-2 text-sm leading-6 text-neutral-300">
                  Add your preferred map link/address once finalized.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function Info({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="text-base font-semibold text-neutral-50">{title}</div>
      <div className="mt-2 text-sm leading-6 text-neutral-300">{desc}</div>
    </div>
  )
}

