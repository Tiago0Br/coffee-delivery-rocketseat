import styled from 'styled-components'

export const IntroContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  gap: 50px;
`

export const Title = styled.h1`
  font-size: 48px;
  max-width: 588px;
  font-weight: bolder;
  line-height: 130%;
`

export const Slogan = styled.p`
  font-size: 20px;
  max-width: 588px;
  margin-top: 1rem;
  line-height: 130%;
`

export const ItemsContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const CoffeeContainer = styled.div`
  margin-top: 4rem;
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  line-height: 130%;
`

export const CoffeeList = styled.ul`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`

export const CoffeeItem = styled.li`
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

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme.white};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`
