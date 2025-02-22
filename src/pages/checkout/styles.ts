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
