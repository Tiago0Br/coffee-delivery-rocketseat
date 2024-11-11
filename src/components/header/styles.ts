import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10rem;
  padding-right: 10rem;
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

export const MapPinIcon = styled(MapPin)`
  color: ${({ theme }) => theme.purple};
`

export const ShoppingCartButton = styled.button`
  gap: 0.5rem;
  background-color: ${({ theme }) => theme['yellow-light']};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`

export const ShoppingCartIcon = styled(ShoppingCartSimple)`
  color: ${({ theme }) => theme['yellow-dark']};
`