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
