import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 104px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['purple']};
    color: ${({ theme }) => theme['purple-light']};
    transition: 0.3s;
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['yellow']};
    color: ${({ theme }) => theme['yellow-light']};
    transition: 0.3s;
  }
`
