import { MapPinLine, ShoppingCart } from 'phosphor-react'
import logo from '@/assets/coffee-delivery-logo.png'
import { defaultTheme as theme } from '@/styles/themes/default'
import * as Styles from './styles'

export function Header() {
  return (
    <Styles.HeaderContainer>
      <a href="/">
        <img src={logo} alt="Coffee Delivery logo" draggable={false} />
      </a>
      <Styles.ButtonContainer>
        <Styles.LocationButton>
          <MapPinLine size={22} color={theme['purple']} />
          Porto Alegre, RS
        </Styles.LocationButton>
        <Styles.ShoppingCartButton
          onClick={() => (window.location.href = '/checkout')}
        >
          <ShoppingCart size={22} color={theme['yellow-dark']} />
        </Styles.ShoppingCartButton>
      </Styles.ButtonContainer>
    </Styles.HeaderContainer>
  )
}
