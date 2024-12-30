import { useState } from 'react'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import * as Styles from './styles'

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
    <Styles.CoffeeItemContainer key={title}>
      <img src={coffeeImage} alt={title} draggable={false} />
      <Styles.CoffeeTagContainer>
        {tags.map((tag) => (
          <Styles.CoffeeTag key={tag}>{tag}</Styles.CoffeeTag>
        ))}
      </Styles.CoffeeTagContainer>
      <Styles.CoffeeTitle>{title}</Styles.CoffeeTitle>
      <Styles.CoffeeDescription>{description}</Styles.CoffeeDescription>
      <Styles.CoffeePriceContainer>
        <Styles.CoffeePrice>
          R$ <strong>{price.toFixed(2).replace('.', ',')}</strong>
        </Styles.CoffeePrice>
        <Styles.CoffeeButtonsContainer>
          <Styles.CoffeeButton onClick={decreaseQuantity}>
            <Minus />
          </Styles.CoffeeButton>
          <Styles.CoffeeQuantity>{quantity}</Styles.CoffeeQuantity>
          <Styles.CoffeeButton onClick={increaseQuantity}>
            <Plus />
          </Styles.CoffeeButton>
        </Styles.CoffeeButtonsContainer>
        <Styles.CartButton onClick={() => (window.location.href = '/checkout')}>
          <ShoppingCartSimple />
        </Styles.CartButton>
      </Styles.CoffeePriceContainer>
    </Styles.CoffeeItemContainer>
  )
}
