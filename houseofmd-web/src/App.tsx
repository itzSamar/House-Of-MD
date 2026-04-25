import { Navigate, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'
import { ProductPage } from './pages/ProductPage'
import { AboutPage } from './pages/AboutPage'
import { EventsPage } from './pages/EventsPage'
import { GalleryPage } from './pages/GalleryPage'
import { VisitPage } from './pages/VisitPage'
import { ContactPage } from './pages/ContactPage'
import { PoliciesPage } from './pages/PoliciesPage'

export default function App() {
  return (
    <>
      <Helmet>
        <title>House of MD | Indian & Indo Western Couture</title>
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:slug" element={<ProductPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}
