import { ShoppingCart, MapPin } from 'phosphor-react'
import logo from '@/assets/coffee-delivery-logo.png'
import * as Styles from './styles'

export function Header() {
  return (
    <Styles.HeaderContainer>
      <img src={logo} alt="Logo do sistema Coffee Delivery" draggable="false" />

      <Styles.ButtonsContainer>
        <Styles.LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Styles.LocationButton>

        <Styles.CartButton>
          <ShoppingCart size={22} weight="fill" />
        </Styles.CartButton>
      </Styles.ButtonsContainer>
    </Styles.HeaderContainer>
  )
}
