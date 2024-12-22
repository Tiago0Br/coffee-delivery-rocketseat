import coffeeDeliveryLogo from '@/assets/coffee-delivery.png'
import { CartIcon, BoxIcon, TimerIcon, CoffeeIcon } from '@/components/icons'
import coffeeList from '@/data/coffees.json'
import { CoffeeItem } from '@/components/coffee-item/coffee-item'
import {
  CoffeeContainer,
  CoffeeList,
  IntroContainer,
  Item,
  ItemsContainer,
  Slogan,
  Subtitle,
  Title
} from './styles'

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
          {coffeeList.map((coffee) => (
            <CoffeeItem key={coffee.title} coffee={coffee} />
          ))}
        </CoffeeList>
      </CoffeeContainer>
    </main>
  )
}
