import React, { useContext } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import { z } from 'zod'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CartContext } from '@/contexts/cart-context'
import { priceFormatter } from '@/utils/formatter'
import { CoffeeItemCheckout } from '@/components'
import * as Styles from './styles'

const orderDetailsFormSchema = z.object({
  zipcode: z.string().nonempty(),
  street: z.string().nonempty(),
  number: z.coerce.number(),
  complement: z.string().optional(),
  district: z.string().nonempty(),
  city: z.string().nonempty(),
  state: z.string().nonempty(),
  paymentOption: z.enum(['credit', 'debit', 'cash'])
})

type orderDetailsFormInputs = z.infer<typeof orderDetailsFormSchema>

export function Checkout() {
  const theme = useTheme()
  const { items, getPrice, deliveryPrice } = useContext(CartContext)

  const { register, handleSubmit } = useForm<orderDetailsFormInputs>({
    resolver: zodResolver(orderDetailsFormSchema)
  })

  function handleCreateOrder(data: orderDetailsFormInputs) {
    console.log(data)
  }

  return (
    <>
      {items.length > 0 ? (
        <Styles.CheckoutForm onSubmit={handleSubmit(handleCreateOrder)}>
          <Styles.CheckoutFormContainer>
            <h2>Complete seu pedido</h2>

            <Styles.FormContainer>
              <header>
                <span>
                  <MapPinLine size={22} color={theme['yellow-dark']} />
                </span>
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </header>

              <Styles.AddressForm>
                <Styles.InputGroup>
                  <Styles.FormInput
                    placeholder="CEP"
                    width="30%"
                    {...register('zipcode')}
                  />
                  <Styles.FormInput placeholder="Rua" {...register('street')} />
                </Styles.InputGroup>
                <Styles.InputGroup>
                  <Styles.FormInput
                    placeholder="Número"
                    width="30%"
                    {...register('number')}
                  />
                  <Styles.FormInput
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                </Styles.InputGroup>
                <Styles.InputGroup>
                  <Styles.FormInput
                    placeholder="Bairro"
                    {...register('district')}
                  />
                  <Styles.FormInput
                    placeholder="Cidade"
                    {...register('city')}
                  />
                  <Styles.FormInput
                    placeholder="UF"
                    width="20%"
                    {...register('state')}
                  />
                </Styles.InputGroup>
              </Styles.AddressForm>
            </Styles.FormContainer>

            <Styles.FormContainer>
              <header>
                <span>
                  <CurrencyDollar size={22} color={theme['purple']} />
                </span>
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </header>

              <Styles.PaymentOptionContainer>
                <Styles.PaymentOption>
                  <input
                    type="radio"
                    id="credit-card"
                    value="credit"
                    {...register('paymentOption')}
                  />
                  <label htmlFor="credit-card">
                    <CreditCard size={16} color={theme['purple']} />
                    Cartão de crédito
                  </label>
                </Styles.PaymentOption>
                <Styles.PaymentOption>
                  <input
                    type="radio"
                    id="debit-card"
                    value="debit"
                    {...register('paymentOption')}
                  />
                  <label htmlFor="debit-card">
                    <Bank size={16} color={theme['purple']} />
                    Cartão de debito
                  </label>
                </Styles.PaymentOption>
                <Styles.PaymentOption>
                  <input
                    type="radio"
                    id="cash"
                    value="cash"
                    {...register('paymentOption')}
                  />
                  <label htmlFor="cash">
                    <Money size={16} color={theme['purple']} />
                    Dinheiro
                  </label>
                </Styles.PaymentOption>
              </Styles.PaymentOptionContainer>
            </Styles.FormContainer>
          </Styles.CheckoutFormContainer>

          <Styles.OrderContainer>
            <h2>Cafés selecionados</h2>

            <Styles.CoffeeContainer>
              {items.map(({ coffee, quantity }) => (
                <React.Fragment key={coffee.id}>
                  <CoffeeItemCheckout coffee={coffee} quantity={quantity} />
                  <hr />
                </React.Fragment>
              ))}
              <Styles.PriceContainer>
                <div>
                  <span>Total de itens</span>
                  <span>{priceFormatter.format(getPrice())}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>{priceFormatter.format(deliveryPrice)}</span>
                </div>
                <div>
                  <strong>Total</strong>
                  <strong>
                    {priceFormatter.format(getPrice() + deliveryPrice)}
                  </strong>
                </div>
              </Styles.PriceContainer>

              <Styles.ConfirmButton type="submit">
                Confirmar pedido
              </Styles.ConfirmButton>
            </Styles.CoffeeContainer>
          </Styles.OrderContainer>
        </Styles.CheckoutForm>
      ) : (
        <h1>Seu carrinho está vazio</h1>
      )}
    </>
  )
}
