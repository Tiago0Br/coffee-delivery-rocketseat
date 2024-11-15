import { Minus, Plus, ShoppingCart } from 'phosphor-react'
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
  Title
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
        <img src={coffeeDeliveryLogo} alt="Coffee Delivery Banner" />
      </IntroContainer>
      <CoffeeContainer>
        <Subtitle>Nossos cafés</Subtitle>

        <CoffeeList>
          {coffeeList.map((coffee) => {
            const image = `/coffee/${coffee.image}`

            return (
              <CoffeeItem key={coffee.title}>
                <img src={image} alt={coffee.title} />
                <div>
                  {coffee.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{coffee.title}</h3>
                <p>{coffee.description}</p>
                <div>
                  <span>
                    R$ <strong>9,90</strong>
                  </span>
                  <div>
                    <Plus />
                    <span>1</span>
                    <Minus />
                  </div>
                  <div>
                    <ShoppingCart />
                  </div>
                </div>
              </CoffeeItem>
            )
          })}
        </CoffeeList>
      </CoffeeContainer>
    </main>
  )
}
