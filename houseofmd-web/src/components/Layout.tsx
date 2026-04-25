import { Outlet } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import { SiteNav } from './SiteNav'

export function Layout() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100">
      <SiteNav />
      <main className="pt-20">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

