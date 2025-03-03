import styled from 'styled-components'

export const CoffeeItem = styled.div`
  max-width: 256px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  text-align: center;

  img {
    margin: -2.25rem auto 1.25rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.label};
    line-height: 130%;
  }
`

export const CoffeeTitle = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.subtitle};
`

export const CoffeeTagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`

export const CoffeeTag = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background-color: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  font-size: 0.625rem;
  text-transform: uppercase;
  font-weight: 700;
`

export const CoffeeItemFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const CoffeePrice = styled.div`
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme.text};
  span {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.5rem;
    font-weight: bold;
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

  span {
    width: 20px;
  }
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`
