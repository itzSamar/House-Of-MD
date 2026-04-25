import { Helmet } from 'react-helmet-async'
import { useMemo, useState } from 'react'
import { Container } from '../components/Container'
import { events, eventTimestamp } from '../lib/events'

type Tab = 'upcoming' | 'past'

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ')
}

export function EventsPage() {
  const [tab, setTab] = useState<Tab>('upcoming')

  const { upcoming, past } = useMemo(() => {
    const now = Date.now()
    const sorted = [...events].sort(
      (a, b) => eventTimestamp(a.date) - eventTimestamp(b.date),
    )

    const upcoming = sorted.filter((e) => eventTimestamp(e.date) >= now)
    const past = sorted
      .filter((e) => eventTimestamp(e.date) < now)
      .sort((a, b) => eventTimestamp(b.date) - eventTimestamp(a.date))

    return { upcoming, past }
  }, [])

  const list = tab === 'upcoming' ? upcoming : past

  return (
    <>
      <Helmet>
        <title>Events | House of MD</title>
        <meta
          name="description"
          content="Upcoming events, pop-ups, and trunk shows for House of MD."
        />
      </Helmet>

      <section className="border-b border-white/5 py-12">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
                EVENTS
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-50">
                Upcoming & past events
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
                This page automatically archives events into “Past events” after the date
                has passed. You’ll provide the dates/locations and I’ll drop them in.
              </p>
            </div>

            <div className="inline-flex rounded-full bg-white/5 p-1 ring-1 ring-white/10">
              <TabButton active={tab === 'upcoming'} onClick={() => setTab('upcoming')}>
                Upcoming
              </TabButton>
              <TabButton active={tab === 'past'} onClick={() => setTab('past')}>
                Past events
              </TabButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          {list.length === 0 ? (
            <div className="rounded-3xl bg-white/5 p-8 text-sm text-neutral-300 ring-1 ring-white/10">
              {tab === 'upcoming' ? (
                <>
                  No upcoming events posted yet. Check back soon, or DM us on{' '}
                  <a
                    className="text-amber-200 hover:text-amber-100"
                    href="https://www.instagram.com/houseofmd_official/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                  .
                </>
              ) : (
                <>No past events yet.</>
              )}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {list.map((e) => (
                <EventCard key={e.id} {...e} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cx(
        'h-10 rounded-full px-5 text-sm font-medium transition',
        active ? 'bg-amber-200/95 text-neutral-950' : 'text-neutral-200 hover:bg-white/5',
      )}
    >
      {children}
    </button>
  )
}

function formatDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`)
  return d.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function EventCard({
  title,
  subtitle,
  location,
  date,
  time,
  description,
  ctaLabel,
  ctaUrl,
}: {
  title: string
  subtitle?: string
  location: string
  date: string
  time?: string
  description?: string
  ctaLabel?: string
  ctaUrl?: string
}) {
  return (
    <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
          {formatDate(date)}
        </div>
        <div className="text-xs tracking-[0.22em] text-neutral-400">{location}</div>
      </div>
      <div className="mt-3 text-xl font-semibold text-neutral-50">{title}</div>
      {subtitle ? (
        <div className="mt-2 text-sm leading-6 text-neutral-300">{subtitle}</div>
      ) : null}
      {time ? <div className="mt-3 text-sm text-neutral-300">{time}</div> : null}
      {description ? (
        <p className="mt-4 text-sm leading-7 text-neutral-300">{description}</p>
      ) : null}

      {ctaUrl ? (
        <div className="mt-6">
          <a
            className="inline-flex h-11 items-center justify-center rounded-full bg-amber-200/95 px-5 text-sm font-medium text-neutral-950 hover:bg-amber-200"
            href={ctaUrl}
            target="_blank"
            rel="noreferrer"
          >
            {ctaLabel ?? 'Learn more'}
          </a>
        </div>
      ) : null}
    </div>
  )
}

