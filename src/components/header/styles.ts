import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`

export const ShoppingCartButton = styled.button`
  gap: 0.5rem;
  background-color: ${({ theme }) => theme['yellow-light']};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`
