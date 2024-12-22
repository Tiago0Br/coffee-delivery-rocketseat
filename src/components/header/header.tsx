import {
  ButtonContainer,
  HeaderContainer,
  LocationButton,
  MapPinIcon,
  ShoppingCartButton,
  ShoppingCartIcon
} from './styles'
import logo from '@/assets/coffee-delivery-logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="Coffee Delivery logo" draggable={false} />
      </a>
      <ButtonContainer>
        <LocationButton>
          <MapPinIcon size={22} />
          Porto Alegre, RS
        </LocationButton>
        <ShoppingCartButton
          onClick={() => (window.location.href = '/checkout')}
        >
          <ShoppingCartIcon size={22} />
        </ShoppingCartButton>
      </ButtonContainer>
    </HeaderContainer>
  )
}
