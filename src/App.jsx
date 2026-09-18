import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TexturePage from './pages/TexturePage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop/:texture" element={<TexturePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route
          path="*"
          element={
            <section className="page-hero">
              <div className="container">
                <span className="eyebrow">404</span>
                <h1>Page not found</h1>
              </div>
            </section>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
