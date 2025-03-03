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
