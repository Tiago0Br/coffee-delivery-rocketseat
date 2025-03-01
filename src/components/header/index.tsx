import { ShoppingCart, MapPin } from 'phosphor-react'
import logo from '@/assets/coffee-delivery-logo.png'
import * as Styles from './styles'

export function Header() {
  return (
    <Styles.HeaderContainer>
      <a href="/">
        <img
          src={logo}
          alt="Logo do sistema Coffee Delivery"
          draggable="false"
        />
      </a>

      <Styles.ButtonsContainer>
        <Styles.LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Styles.LocationButton>

        <a href="/checkout">
          <Styles.CartButton>
            <ShoppingCart size={22} weight="fill" />
          </Styles.CartButton>
        </a>
      </Styles.ButtonsContainer>
    </Styles.HeaderContainer>
  )
}
