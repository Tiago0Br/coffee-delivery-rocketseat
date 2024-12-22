import { CurrencyDollar, MapPin } from 'phosphor-react'

export function Checkout() {
  return (
    <form>
      <div>
        <h2>Complete o seu pedido</h2>
        <div>
          <MapPin />
          <div>
            <h3>Endereço de entrega</h3>
            <p>Informe o endereço de entrega do seu pedido</p>
          </div>
        </div>
        <div>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </div>
        <div>
          <div>
            <CurrencyDollar />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div>
            <button type="submit">Confirmar Pedido</button>
          </div>
        </div>
      </div>
    </form>
  )
}
