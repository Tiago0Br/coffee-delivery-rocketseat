import styled from 'styled-components'

export const CheckoutFormContainer = styled.form`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
`

export const AddressContainer = styled.div`
  background-color: ${({ theme }) => theme['card']};
  padding: 40px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const AddressHeader = styled.div`
  display: flex;
  gap: 8px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 12px;
`

export const FormInput = styled.input`
  background-color: ${({ theme }) => theme['input']};
  border-radius: 4px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme['button']};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme['label']};
  }
  flex: 1;
`

export const PaymentContainer = styled.div`
  margin-top: 12px;
  background-color: ${({ theme }) => theme['card']};
  padding: 40px;
  border-radius: 6px;
`

export const PaymentHeader = styled.div`
  display: flex;
  gap: 8px;
`

export const PaymentOptionsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 12px;
`

export const PaymentOption = styled.div`
  flex: 1;
  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: ${({ theme }) => theme['button']};
    border-radius: 6px;
    padding: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    color: ${({ theme }) => theme['text']};
    font-size: 14px;
    text-transform: uppercase;
  }

  input:checked + label {
    background-color: ${({ theme }) => theme['purple-light']};
    border-color: ${({ theme }) => theme.purple};
  }
`

export const CoffeeContainer = styled.div`
  background-color: ${({ theme }) => theme['card']};
  padding: 40px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`
