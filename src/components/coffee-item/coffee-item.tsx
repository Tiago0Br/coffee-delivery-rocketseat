import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import {
  CartButton,
  CoffeeButton,
  CoffeeButtonsContainer,
  CoffeeDescription,
  CoffeeItemContainer,
  CoffeePrice,
  CoffeePriceContainer,
  CoffeeQuantity,
  CoffeeTag,
  CoffeeTagContainer,
  CoffeeTitle
} from './styles'
import { useState } from 'react'

export interface Coffee {
  title: string
  description: string
  price: number
  image: string
  tags: string[]
}

interface CoffeeItemProps {
  coffee: Coffee
}

export function CoffeeItem({
  coffee: { title, description, price, image, tags }
}: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(0)
  const coffeeImage = '/coffee/' + image

  function increaseQuantity() {
    setQuantity((state) => (state < 20 ? state + 1 : state))
  }

  function decreaseQuantity() {
    setQuantity((state) => (state > 0 ? state - 1 : 0))
  }

  return (
    <CoffeeItemContainer key={title}>
      <img src={coffeeImage} alt={title} draggable={false} />
      <CoffeeTagContainer>
        {tags.map((tag) => (
          <CoffeeTag key={tag}>{tag}</CoffeeTag>
        ))}
      </CoffeeTagContainer>
      <CoffeeTitle>{title}</CoffeeTitle>
      <CoffeeDescription>{description}</CoffeeDescription>
      <CoffeePriceContainer>
        <CoffeePrice>
          R$ <strong>{price.toFixed(2).replace('.', ',')}</strong>
        </CoffeePrice>
        <CoffeeButtonsContainer>
          <CoffeeButton onClick={decreaseQuantity}>
            <Minus />
          </CoffeeButton>
          <CoffeeQuantity>{quantity}</CoffeeQuantity>
          <CoffeeButton onClick={increaseQuantity}>
            <Plus />
          </CoffeeButton>
        </CoffeeButtonsContainer>
        <CartButton onClick={() => (window.location.href = '/checkout')}>
          <ShoppingCartSimple />
        </CartButton>
      </CoffeePriceContainer>
    </CoffeeItemContainer>
  )
}
