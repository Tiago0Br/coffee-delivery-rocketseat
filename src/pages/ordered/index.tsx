import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryIllustration from '/delivery-illustration.svg'
import { CartContext } from '@/contexts/cart-context'
import * as Styles from './styles'

export function Ordered() {
  const theme = useTheme()
  const { deliveryInfo, getPaymentOption } = useContext(CartContext)

  if (!deliveryInfo) {
    location.href = '/'
    return
  }

  const { address, paymentOption } = deliveryInfo

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
                {address.street}, {address.number}, {address.district} -{' '}
                {address.city}, {address.state}
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
              <strong>{getPaymentOption(paymentOption)}</strong>
            </p>
          </Styles.InfoItem>
        </Styles.DeliveryContainer>
        <img src={deliveryIllustration} alt="Entregador em uma motocileta" />
      </Styles.InfoContainer>
    </Styles.OrderedContainer>
  )
}
