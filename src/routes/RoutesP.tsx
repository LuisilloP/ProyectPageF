
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router-dom'

// Pages
import Contact from '../pages/Contact'
import Principal from '../pages/Principal'
import Pages from '../pages/Pages'
// hook
import UpTop from '../hooks/UpTop'
const RoutesPersonalizate = (): JSX.Element => {
  return (
    <AnimatePresence>
      <HelmetProvider>
        <UpTop />
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/paginas' element={<Pages />} />
        </Routes>
      </HelmetProvider>
    </AnimatePresence>
  )
}

export default RoutesPersonalizate
