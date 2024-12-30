import { CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { defaultTheme as theme } from '@/styles/themes/default'
import * as Styles from './styles'

export function Checkout() {
  return (
    <Styles.CheckoutFormContainer>
      <div>
        <h2>Complete o seu pedido</h2>
        <Styles.AddressContainer>
          <Styles.AddressHeader>
            <MapPinLine size={22} color={theme['yellow-dark']} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço de entrega do seu pedido</p>
            </div>
          </Styles.AddressHeader>
          <Styles.InputContainer>
            <Styles.InputGroup>
              <Styles.FormInput type="text" placeholder="CEP" required />
              <Styles.FormInput type="text" placeholder="Rua" required />
            </Styles.InputGroup>
            <Styles.InputGroup>
              <Styles.FormInput type="text" placeholder="Número" required />
              <Styles.FormInput type="text" placeholder="Complemento" />
            </Styles.InputGroup>
            <Styles.InputGroup>
              <Styles.FormInput type="text" placeholder="Bairro" required />
              <Styles.FormInput type="text" placeholder="Cidade" required />
              <Styles.FormInput type="text" placeholder="UF" required />
            </Styles.InputGroup>
          </Styles.InputContainer>
        </Styles.AddressContainer>
        <Styles.PaymentContainer>
          <Styles.PaymentHeader>
            <CurrencyDollar size={22} color={theme['purple']} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Styles.PaymentHeader>
          <Styles.PaymentOptionsContainer>
            <Styles.PaymentOption>
              <input type="radio" name="payment" id="credit-card" />
              <label htmlFor="credit-card">
                <CreditCard size={18} color={theme['purple']} /> Cartão de
                credito
              </label>
            </Styles.PaymentOption>
            <Styles.PaymentOption>
              <input type="radio" name="payment" id="debit-card" />
              <label htmlFor="debit-card">
                <CreditCard size={18} color={theme['purple']} /> Cartão de
                débito
              </label>
            </Styles.PaymentOption>
            <Styles.PaymentOption>
              <input type="radio" name="payment" id="cash" />
              <label htmlFor="cash">
                <CreditCard size={18} color={theme['purple']} /> Dinheiro
              </label>
            </Styles.PaymentOption>
          </Styles.PaymentOptionsContainer>
        </Styles.PaymentContainer>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <Styles.CoffeeContainer>
          <div>
            <div>
              <img src="/coffee/with-milk.png" alt="Foto do café" />
              <div>
                <span>Expresso Tradicional</span>
                <div>
                  <div>+ 1 -</div>
                  <button>Remover</button>
                </div>
                <span>R$ 9,90</span>
              </div>
              <span></span>
            </div>
            <div>
              <img src="/coffee/with-milk.png" alt="Foto do café" />
              <div>
                <span>Expresso Tradicional</span>
                <div>
                  <div>+ 1 -</div>
                  <button>Remover</button>
                </div>
                <span>R$ 9,90</span>
              </div>
              <span></span>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </div>
            <button>Confirmar pedido</button>
          </div>
        </Styles.CoffeeContainer>
      </div>
    </Styles.CheckoutFormContainer>
  )
}
