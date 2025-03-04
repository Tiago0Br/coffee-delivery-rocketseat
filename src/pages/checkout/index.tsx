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
  zipcode: z
    .number({ invalid_type_error: 'O CEP é obrigatório' })
    .min(8, 'CEP inválido'),
  street: z.string().nonempty('A rua é obrigatória'),
  number: z.number({ invalid_type_error: 'O número é obrigatório' }),
  complement: z.string().optional(),
  district: z.string().nonempty('O bairro é obrigatório'),
  city: z.string().nonempty('A cidade é obrigatória'),
  state: z.string().nonempty('UF é obrigatório'),
  paymentOption: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Selecione uma opção de pagamento'
  })
})

type orderDetailsFormInputs = z.infer<typeof orderDetailsFormSchema>

export function Checkout() {
  const theme = useTheme()
  const { items, getPrice, deliveryPrice, addDeliveryInfo } =
    useContext(CartContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<orderDetailsFormInputs>({
    resolver: zodResolver(orderDetailsFormSchema)
  })

  function handleCreateOrder(data: orderDetailsFormInputs) {
    addDeliveryInfo({
      address: {
        zipcode: data.zipcode,
        street: data.street,
        number: data.number,
        complement: data.complement,
        district: data.district,
        city: data.city,
        state: data.state
      },
      paymentOption: data.paymentOption
    })

    location.href = '/ordered'
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
                  <Styles.FormInput width="30%">
                    <input
                      type="number"
                      min={0}
                      placeholder="CEP"
                      {...register('zipcode', { valueAsNumber: true })}
                    />
                    {errors.zipcode && (
                      <Styles.ErrorMessage>
                        {errors.zipcode.message}
                      </Styles.ErrorMessage>
                    )}
                  </Styles.FormInput>
                  <Styles.FormInput>
                    <input
                      type="text"
                      placeholder="Rua"
                      {...register('street')}
                    />
                    {errors.street && (
                      <Styles.ErrorMessage>
                        {errors.street.message}
                      </Styles.ErrorMessage>
                    )}
                  </Styles.FormInput>
                </Styles.InputGroup>
                <Styles.InputGroup>
                  <Styles.FormInput width="30%">
                    <input
                      type="number"
                      min={0}
                      placeholder="Número"
                      {...register('number', { valueAsNumber: true })}
                    />
                    {errors.number && (
                      <Styles.ErrorMessage>
                        {errors.number.message}
                      </Styles.ErrorMessage>
                    )}
                  </Styles.FormInput>
                  <Styles.FormInput>
                    <input
                      type="text"
                      placeholder="Complemento"
                      {...register('complement')}
                    />
                    {errors.complement && (
                      <Styles.ErrorMessage>
                        {errors.complement.message}
                      </Styles.ErrorMessage>
                    )}
                  </Styles.FormInput>
                </Styles.InputGroup>
                <Styles.InputGroup>
                  <Styles.FormInput>
                    <input
                      type="text"
                      placeholder="Bairro"
                      {...register('district')}
                    />
                    {errors.district && (
                      <Styles.ErrorMessage>
                        {errors.district.message}
                      </Styles.ErrorMessage>
                    )}
                  </Styles.FormInput>
                  <Styles.FormInput>
                    <input
                      type="text"
                      placeholder="Cidade"
                      {...register('city')}
                    />
                    {errors.city && (
                      <Styles.ErrorMessage>
                        {errors.city.message}
                      </Styles.ErrorMessage>
                    )}
                  </Styles.FormInput>
                  <Styles.FormInput width="20%">
                    <input
                      type="text"
                      placeholder="UF"
                      {...register('state')}
                    />
                    {errors.state && (
                      <Styles.ErrorMessage>
                        {errors.state.message}
                      </Styles.ErrorMessage>
                    )}
                  </Styles.FormInput>
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

              <div>
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
                {errors.paymentOption && (
                  <Styles.ErrorMessage>
                    {errors.paymentOption.message}
                  </Styles.ErrorMessage>
                )}
              </div>
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
