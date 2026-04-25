import { Link } from 'react-router-dom'
import { Container } from './Container'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-sm font-semibold tracking-[0.22em] text-neutral-100">
              HOUSE OF MD
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-400">
              Party wear Indian & Indo Western Couture • Festive • Pre stitched sarees •
              Suits • Lehengas • Fusion Sets. Based in Dublin, CA.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <a
                className="rounded-full bg-white/5 px-4 py-2 text-neutral-200 ring-1 ring-white/10 hover:bg-white/8"
                href="https://www.instagram.com/houseofmd_official/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <Link
                className="rounded-full px-4 py-2 text-neutral-200 ring-1 ring-white/10 hover:bg-white/5"
                to="/contact"
              >
                  Contact
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-2">
            <FooterCol title="Explore">
              <FooterLink to="/gallery">Gallery</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterCol>
            <FooterCol title="Social">
              <a
                className="text-sm text-neutral-400 hover:text-neutral-200"
                href="https://www.instagram.com/houseofmd_official/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </FooterCol>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/5 py-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} House of MD. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a
              className="hover:text-neutral-300"
              href="https://www.instagram.com/houseofmd_official/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function FooterCol({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-[0.22em] text-neutral-200">
        {title.toUpperCase()}
      </div>
      <div className="mt-4 grid gap-2">{children}</div>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link className="text-sm text-neutral-400 hover:text-neutral-200" to={to}>
      {children}
    </Link>
  )
}

