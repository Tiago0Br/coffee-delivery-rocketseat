import { Minus, Plus, ShoppingCart, ShoppingCartSimple } from 'phosphor-react'
import coffeeDeliveryLogo from '../../assets/coffee-delivery.png'
import {
  CartIcon,
  BoxIcon,
  TimerIcon,
  CoffeeIcon
} from '../../components/icons'
import {
  CoffeeContainer,
  CoffeeItem,
  CoffeeList,
  IntroContainer,
  Item,
  ItemsContainer,
  Slogan,
  Subtitle,
  CoffeeTag,
  CoffeeTagContainer,
  Title,
  CoffeeTitle,
  CoffeeDescription,
  CoffeePriceContainer,
  CoffeePrice,
  CoffeeButtonsContainer,
  CoffeeButton,
  CartContainer
} from './styles'
import coffeeList from '../../data/coffees.json'

export function Home() {
  return (
    <main>
      <IntroContainer>
        <div>
          <div>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Slogan>
              Com o Coffee Delivery você recebe seu cafe onde estiver, a
              qualquer hora
            </Slogan>
          </div>
          <ItemsContainer>
            <Item>
              <CartIcon />
              Compra simples e segura
            </Item>
            <Item>
              <BoxIcon />
              Entrega rápida e rastreada
            </Item>
            <Item>
              <TimerIcon />
              Embalagem mantém o café intacto
            </Item>
            <Item>
              <CoffeeIcon />O café chega fresquinho até você
            </Item>
          </ItemsContainer>
        </div>
        <img
          src={coffeeDeliveryLogo}
          alt="Coffee Delivery Banner"
          draggable={false}
        />
      </IntroContainer>
      <CoffeeContainer>
        <Subtitle>Nossos cafés</Subtitle>

        <CoffeeList>
          {coffeeList.map((coffee) => {
            const image = `/coffee/${coffee.image}`

            return (
              <CoffeeItem key={coffee.title}>
                <img src={image} alt={coffee.title} draggable={false} />
                <CoffeeTagContainer>
                  {coffee.tags.map((tag) => (
                    <CoffeeTag key={tag}>{tag}</CoffeeTag>
                  ))}
                </CoffeeTagContainer>
                <CoffeeTitle>{coffee.title}</CoffeeTitle>
                <CoffeeDescription>{coffee.description}</CoffeeDescription>
                <CoffeePriceContainer>
                  <CoffeePrice>
                    R$ <strong>9,90</strong>
                  </CoffeePrice>
                  <CoffeeButtonsContainer>
                    <CoffeeButton>
                      <Minus />
                    </CoffeeButton>
                    <span>1</span>
                    <CoffeeButton>
                      <Plus />
                    </CoffeeButton>
                  </CoffeeButtonsContainer>
                  <CartContainer>
                    <ShoppingCartSimple />
                  </CartContainer>
                </CoffeePriceContainer>
              </CoffeeItem>
            )
          })}
        </CoffeeList>
      </CoffeeContainer>
    </main>
  )
}
