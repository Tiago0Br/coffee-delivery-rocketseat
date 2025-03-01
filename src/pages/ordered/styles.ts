import styled from 'styled-components'

export const OrderedContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 20px;
`

export const TitleContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.subtitle};
  }
`

export const InfoContainer = styled.div`
  max-width: 80rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DeliveryContainer = styled.div`
  max-width: 526px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 32px;
  border: 1px solid ${({ theme }) => theme.purple};
  border-radius: 6px 36px 6px 36px;
`

export const InfoItem = styled.div<{ iconColor: string }>`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 100%;
    background-color: ${({ iconColor }) => iconColor};
    color: white;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    line-height: 130%;
  }
`
