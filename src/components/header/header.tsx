import {
  ButtonContainer,
  HeaderContainer,
  LocationButton,
  MapPinIcon,
  ShoppingCartButton,
  ShoppingCartIcon
} from './styles'
import logo from '../../assets/coffee-delivery-logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery logo" />
      <ButtonContainer>
        <LocationButton>
          <MapPinIcon size={22} />
          Porto Alegre, RS
        </LocationButton>
        <ShoppingCartButton>
          <ShoppingCartIcon size={22} />
        </ShoppingCartButton>
      </ButtonContainer>
    </HeaderContainer>
  )
}
