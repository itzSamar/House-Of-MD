export type Event = {
  id: string
  title: string
  subtitle?: string
  location: string
  /**
   * ISO date in YYYY-MM-DD format.
   * Use local time comparison (no timezone drift) by treating it as midday.
   */
  date: string
  time?: string
  description?: string
  ctaLabel?: string
  ctaUrl?: string
}

/**
 * Add your events here.
 * Anything with a date in the past automatically shows under "Past events".
 */
export const events: Event[] = [
  // Example (delete/replace when you provide real events):
  // {
  //   id: 'trunk-show-2026-05',
  //   title: 'Trunk Show',
  //   subtitle: 'Festive & party wear edit',
  //   location: 'Dublin, CA',
  //   date: '2026-05-18',
  //   time: '11:00 AM – 5:00 PM',
  //   description:
  //     'Join us for a curated selection of festive and couture looks. Appointment slots available.',
  //   ctaLabel: 'RSVP on Instagram',
  //   ctaUrl: 'https://www.instagram.com/houseofmd_official/',
  // },
]

export function eventTimestamp(dateYYYYMMDD: string) {
  // Force midday local time to avoid timezone shifting to previous day.
  return new Date(`${dateYYYYMMDD}T12:00:00`).getTime()
}

