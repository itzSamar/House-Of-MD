import { Navigate, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { GalleryPage } from './pages/GalleryPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <>
      <Helmet>
        <title>House of MD | Indian & Indo Western Couture</title>
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}
