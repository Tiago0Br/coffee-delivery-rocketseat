import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Coffee } from '@/pages/home'
import * as Styles from './styles'
import { CartContext } from '@/contexts/cart-context'
import { toast } from 'sonner'

export function CoffeeItem({ coffee }: { coffee: Coffee }) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)
  const { addItem } = useContext(CartContext)

  function incrementCoffeeQuantity() {
    if (coffeeQuantity < 50) {
      setCoffeeQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  function decrementCoffeeQuantity() {
    if (coffeeQuantity > 1) {
      setCoffeeQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  function handleAddCoffeeToCart() {
    addItem(coffee, coffeeQuantity)

    setCoffeeQuantity(1)

    toast.success('Café adicionado ao carrinho')
  }

  return (
    <Styles.CoffeeItem>
      <img
        src={`/coffee/${coffee.image}`}
        alt={coffee.title}
        draggable="false"
      />
      <Styles.CoffeeTagContainer>
        {coffee.tags.map((tag) => (
          <Styles.CoffeeTag key={tag}>{tag}</Styles.CoffeeTag>
        ))}
      </Styles.CoffeeTagContainer>

      <Styles.CoffeeTitle>{coffee.title}</Styles.CoffeeTitle>

      <p>{coffee.description}</p>

      <Styles.CoffeeItemFooter>
        <Styles.CoffeePrice>
          <span>R$ </span>
          <strong>{coffee.price.toFixed(2).replace('.', ',')}</strong>
        </Styles.CoffeePrice>

        <Styles.CoffeeQuantity>
          <button type="button" onClick={decrementCoffeeQuantity}>
            -
          </button>
          <span>{coffeeQuantity}</span>
          <button type="button" onClick={incrementCoffeeQuantity}>
            +
          </button>
        </Styles.CoffeeQuantity>

        <Styles.CartButton type="button" onClick={handleAddCoffeeToCart}>
          <ShoppingCart size={22} weight="fill" />
        </Styles.CartButton>
      </Styles.CoffeeItemFooter>
    </Styles.CoffeeItem>
  )
}
