import styled from 'styled-components'

export const CoffeeItem = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }

  strong {
    width: 80px;
    text-align: center;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.text};
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.subtitle};
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 6px;
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
    text-align: center;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.button};
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.75rem;
  gap: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`
