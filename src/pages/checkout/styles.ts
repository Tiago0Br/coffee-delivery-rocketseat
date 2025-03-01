import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2.5rem;
  margin-top: 2.5rem;
`

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.subtitle};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px;

  header {
    display: flex;
    gap: 8px;

    div {
      display: flex;
      flex-direction: column;

      h3 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.125rem;
        font-weight: 500;
        color: ${({ theme }) => theme.subtitle};
      }

      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.text};
      }
    }
  }
`

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const FormInput = styled.input<{ width?: string }>`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.button};
  background-color: ${({ theme }) => theme.input};
  &:focus,
  &:active {
    outline: 1px solid ${({ theme }) => theme['yellow-dark']};
  }

  width: ${(props) => props.width || '100%'};
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.subtitle};
  }
`

export const PaymentOptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const PaymentOption = styled.div`
  flex: 1;

  input[type='radio'] {
    display: none;
  }

  label {
    background-color: ${({ theme }) => theme.button};
    border-radius: 6px;
    border: none;
    cursor: pointer;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  input[type='radio']:checked + label {
    background-color: ${({ theme }) => theme['purple-light']};
    outline: 1px solid ${({ theme }) => theme.purple};
  }

  label:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px 36px 6px 36px;

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.button};
  }
`

export const CoffeeItem = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }

  strong {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.text};
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.subtitle};
  }

  div {
    display: flex;
    gap: 6px;
  }
`

export const CoffeeQuantity = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.button};
  border-radius: 6px;

  button {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.purple};
    cursor: pointer;
  }

  button:first-child {
    border-radius: 6px 0 0 6px;
  }

  button:last-child {
    border-radius: 0 6px 6px 0;
  }

  button:hover {
    color: ${({ theme }) => theme['purple-dark']};
    background-color: ${({ theme }) => theme.hover};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.button};
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
  gap: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 1.2rem;
    }
  }
`

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
    transition: 0.3s;
  }
`
