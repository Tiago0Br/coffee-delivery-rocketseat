import coffeeDeliveryLogo from '../../assets/coffee-delivery.png'
import { IntroContainer, Title } from './styles'

export function Home() {
  return (
    <main>
      <IntroContainer>
        <div>
          <div>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <p>
              Com o Coffee Delivery você recebe seu cafe onde estiver, a
              qualquer hora
            </p>
          </div>
          <div>Itens</div>
        </div>
        <img src={coffeeDeliveryLogo} alt="Coffee Delivery Banner" />
      </IntroContainer>
    </main>
  )
}
