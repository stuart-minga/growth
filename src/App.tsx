import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Page } from './components/layout/Page'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { BlogIndex } from './pages/BlogIndex'
import { BlogPost } from './pages/BlogPost'
import { Home } from './pages/Home'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Page>
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <SiteFooter />
      </Page>
    </BrowserRouter>
  )
}
