import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
import { toast } from 'sonner'
import { Trash } from 'phosphor-react'
import { Coffee } from '@/pages/home'
import { priceFormatter } from '@/utils/formatter'
import { CartContext } from '@/contexts/cart-context'
import * as Styles from './styles'

interface Props {
  coffee: Coffee
  quantity: number
}

export function CoffeeItemCheckout({ coffee, quantity }: Props) {
  const theme = useTheme()
  const { updateItem, removeItem } = useContext(CartContext)
  const [coffeeQuantity, setCoffeeQuantity] = useState(quantity)

  function handleRemoveItem(coffee: Coffee) {
    removeItem(coffee)

    toast.success('Café removido do carrinho')
  }

  function incrementCoffeeQuantity() {
    if (coffeeQuantity < 50) {
      setCoffeeQuantity((prevQuantity) => prevQuantity + 1)

      updateItem(coffee, coffeeQuantity + 1)
    }
  }

  function decrementCoffeeQuantity() {
    if (coffeeQuantity > 1) {
      setCoffeeQuantity((prevQuantity) => prevQuantity - 1)

      updateItem(coffee, coffeeQuantity - 1)
    }
  }

  return (
    <Styles.CoffeeItem>
      <img
        src={`/coffee/${coffee.image}`}
        alt={coffee.title}
        draggable="false"
      />
      <Styles.InfoContainer>
        <span>{coffee.title}</span>
        <Styles.ActionsContainer>
          <Styles.CoffeeQuantity>
            <button type="button" onClick={decrementCoffeeQuantity}>
              -
            </button>
            <span>{coffeeQuantity}</span>
            <button type="button" onClick={incrementCoffeeQuantity}>
              +
            </button>
          </Styles.CoffeeQuantity>
          <Styles.RemoveButton
            type="button"
            onClick={() => handleRemoveItem(coffee)}
          >
            <Trash size={18} color={theme.purple} />
            Remover
          </Styles.RemoveButton>
        </Styles.ActionsContainer>
      </Styles.InfoContainer>
      <strong>{priceFormatter.format(coffee.price * quantity)}</strong>
    </Styles.CoffeeItem>
  )
}
