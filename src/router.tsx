import { DefaultLayout } from './layouts/default'
import { Home, Checkout, Ordered } from './pages'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordered" element={<Ordered />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
