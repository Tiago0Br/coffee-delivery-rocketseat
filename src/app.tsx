import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/cart-context'
import { Toaster } from 'sonner'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Toaster richColors closeButton position="top-center" />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
