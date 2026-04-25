import { Helmet } from 'react-helmet-async'
import { Container } from '../components/Container'

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | House of MD</title>
        <meta
          name="description"
          content="Contact House of MD for appointments, sizing, and availability."
        />
      </Helmet>

      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold tracking-[0.22em] text-amber-200">
                CONTACT
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-50">
                Let’s curate your look.
              </h1>
              <p className="mt-5 text-sm leading-7 text-neutral-300">
                For the fastest response, message us on Instagram with your occasion, size,
                and timeline.
              </p>

              <div className="mt-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.currentTarget
                    const fd = new FormData(form)
                    const name = String(fd.get('name') ?? '')
                    const email = String(fd.get('email') ?? '')
                    const message = String(fd.get('message') ?? '')
                    const subject = encodeURIComponent('House of MD Inquiry')
                    const body = encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\n\n${message}`,
                    )
                    window.location.href = `mailto:houseofmdofficial@gmail.com?subject=${subject}&body=${body}`
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name">
                      <Input name="name" placeholder="Your name" />
                    </Field>
                    <Field label="Email">
                      <Input name="email" type="email" placeholder="you@email.com" />
                    </Field>
                  </div>
                  <Field label="Message">
                    <Textarea
                      name="message"
                      placeholder="Occasion, size, preferred colors, and timeline…"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-amber-200/95 px-5 text-sm font-medium text-neutral-950 hover:bg-amber-200"
                  >
                    Email us
                  </button>
                  <p className="text-xs leading-5 text-neutral-400">
                    Email goes to houseofmdofficial@gmail.com.
                  </p>
                </form>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-neutral-50">Instagram</div>
                <a
                  className="mt-2 inline-flex rounded-full bg-white/5 px-4 py-2 text-sm text-neutral-200 ring-1 ring-white/10 hover:bg-white/8"
                  href="https://www.instagram.com/houseofmd_official/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @houseofmd_official
                </a>

                <div className="mt-6 text-sm font-semibold text-neutral-50">Location</div>
                <div className="mt-2 text-sm leading-6 text-neutral-300">Dublin, CA</div>

                <div className="mt-6 text-sm font-semibold text-neutral-50">
                  What to include
                </div>
                <ul className="mt-2 grid gap-2 text-sm text-neutral-300">
                  <li>• Occasion + date</li>
                  <li>• Size + height</li>
                  <li>• Budget range</li>
                  <li>• Color preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold tracking-[0.18em] text-neutral-300">
        {label.toUpperCase()}
      </span>
      {children}
    </label>
  )
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-11 w-full rounded-2xl bg-neutral-950/40 px-4 text-sm text-neutral-100 ring-1 ring-white/10 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-200/50"
    />
  )
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={6}
      className="w-full resize-none rounded-2xl bg-neutral-950/40 p-4 text-sm text-neutral-100 ring-1 ring-white/10 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-200/50"
    />
  )
}

