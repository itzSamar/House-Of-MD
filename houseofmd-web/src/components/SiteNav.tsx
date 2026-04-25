import { Link, NavLink } from 'react-router-dom'
import { BrandMark } from './BrandMark'
import { Container } from './Container'
import { ButtonLink } from './Button'

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ')
}

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-neutral-950/60 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/60">
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full px-4 py-2 text-sm text-neutral-200 ring-1 ring-white/10 hover:bg-white/5 md:inline-flex"
              href="https://www.instagram.com/houseofmd_official/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <ButtonLink to="/contact" variant="primary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  )
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx(
          'text-sm tracking-wide text-neutral-200 hover:text-white',
          isActive && 'text-amber-200',
        )
      }
    >
      {children}
    </NavLink>
  )
}

