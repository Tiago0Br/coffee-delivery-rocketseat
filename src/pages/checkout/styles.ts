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
`
