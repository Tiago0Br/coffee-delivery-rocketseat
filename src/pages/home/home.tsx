import coffeeDeliveryLogo from '@/assets/coffee-delivery.png'
import coffeeList from '@/data/coffees.json'
import { CartIcon, BoxIcon, TimerIcon, CoffeeIcon } from '@/components/icons'
import { CoffeeItem } from '@/components/coffee-item/coffee-item'
import * as Styles from './styles'

export function Home() {
  return (
    <main>
      <Styles.IntroContainer>
        <div>
          <div>
            <Styles.Title>
              Encontre o café perfeito para qualquer hora do dia
            </Styles.Title>
            <Styles.Slogan>
              Com o Coffee Delivery você recebe seu cafe onde estiver, a
              qualquer hora
            </Styles.Slogan>
          </div>
          <Styles.ItemsContainer>
            <Styles.Item>
              <CartIcon />
              Compra simples e segura
            </Styles.Item>
            <Styles.Item>
              <BoxIcon />
              Entrega rápida e rastreada
            </Styles.Item>
            <Styles.Item>
              <TimerIcon />
              Embalagem mantém o café intacto
            </Styles.Item>
            <Styles.Item>
              <CoffeeIcon />O café chega fresquinho até você
            </Styles.Item>
          </Styles.ItemsContainer>
        </div>
        <img
          src={coffeeDeliveryLogo}
          alt="Coffee Delivery Banner"
          draggable={false}
        />
      </Styles.IntroContainer>
      <Styles.CoffeeContainer>
        <Styles.Subtitle>Nossos cafés</Styles.Subtitle>

        <Styles.CoffeeList>
          {coffeeList.map((coffee) => (
            <CoffeeItem key={coffee.title} coffee={coffee} />
          ))}
        </Styles.CoffeeList>
      </Styles.CoffeeContainer>
    </main>
  )
}
