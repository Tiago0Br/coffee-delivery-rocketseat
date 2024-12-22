import styled from 'styled-components'

export const CoffeeItemContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme['card']};
  max-width: 256px;
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;
  text-align: center;
  img {
    margin-top: -1.25rem;
  }
`

export const CoffeeTagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`

export const CoffeeTag = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background-color: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`

export const CoffeeTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 130%;
`

export const CoffeeDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.label};
  line-height: 130%;
`

export const CoffeePriceContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const CoffeePrice = styled.span`
  color: ${({ theme }) => theme.text};
  line-height: 130%;
  strong {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const CoffeeButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme['button']};
  border-radius: 6px;
`

export const CoffeeButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme['purple-dark']};
  }
  &:hover {
    background-color: ${({ theme }) => theme['hover']};
  }
`

export const CoffeeQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme.white};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme['purple']};
    transition: background-color 0.2s;
  }
`
