import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 4rem;
`

export const InfoContainer = styled.div`
  max-width: 588px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    color: ${({ theme }) => theme.title};
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.subtitle};
    line-height: 130%;
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export const ItemIcon = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 100%;
  color: ${({ theme }) => theme.white};
  background-color: ${(props) => props.color};
`

export const CoffeesContainer = styled.div`
  margin-top: 4rem;
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.subtitle};
  }
`

export const CoffeeList = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`

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

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.subtitle};
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.label};
    line-height: 130%;
  }
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
