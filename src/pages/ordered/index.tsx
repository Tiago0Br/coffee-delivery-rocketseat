import deliveryIllustration from '/delivery-illustration.svg'
import * as Styles from './styles'
import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Ordered() {
  const theme = useTheme()

  return (
    <Styles.OrderedContainer>
      <Styles.TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Styles.TitleContainer>
      <Styles.InfoContainer>
        <Styles.DeliveryContainer>
          <Styles.InfoItem iconColor={theme['purple']}>
            <div>
              <MapPin size={22} weight="fill" />
            </div>
            <p>
              Entrega em{' '}
              <strong>
                Rua João Daniel Martinelli, 102, Farrapos - Porto Alegre, RS
              </strong>
            </p>
          </Styles.InfoItem>
          <Styles.InfoItem iconColor={theme['yellow']}>
            <div>
              <Timer size={22} weight="fill" />
            </div>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </Styles.InfoItem>
          <Styles.InfoItem iconColor={theme['yellow-dark']}>
            <div>
              <CurrencyDollar size={22} weight="fill" />
            </div>
            <p>
              Pagamento na entrega <br />
              <strong>Cartão de crédito</strong>
            </p>
          </Styles.InfoItem>
        </Styles.DeliveryContainer>
        <img src={deliveryIllustration} alt="Entregador em uma motocileta" />
      </Styles.InfoContainer>
    </Styles.OrderedContainer>
  )
}
