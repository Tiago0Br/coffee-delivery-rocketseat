import * as Styles from './styles'

export function Checkout() {
  return (
    <Styles.CheckoutContainer>
      <Styles.CheckoutFormContainer>
        <h2>Complete seu pedido</h2>
      </Styles.CheckoutFormContainer>

      <Styles.OrderContainer>
        <h2>Cafés selecionados</h2>
      </Styles.OrderContainer>
    </Styles.CheckoutContainer>
  )
}
