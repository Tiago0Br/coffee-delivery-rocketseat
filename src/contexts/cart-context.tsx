import { createContext, useState, ReactNode } from 'react'
import { Coffee } from '@/pages/home'

interface Item {
  coffee: Coffee
  quantity: number
}

interface CartContextType {
  items: Item[]
  addItem: (coffee: Coffee, quantity: number) => void
  removeItem: (coffee: Coffee) => void
  getPrice: () => number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  function getItemsLocalStorage(): Item[] {
    const items = localStorage.getItem('coffee-delivery:items')
    return items ? JSON.parse(items) : []
  }

  const [items, setItems] = useState<Item[]>(getItemsLocalStorage)

  function addItem(coffee: Coffee, quantity: number) {
    setItems((prevItems) => [
      ...prevItems,
      { coffee: coffee, quantity: quantity }
    ])

    localStorage.setItem(
      'coffee-delivery:items',
      JSON.stringify([...items, { coffee: coffee, quantity: quantity }])
    )
  }

  function removeItem(coffee: Coffee) {
    setItems((prevItems) =>
      prevItems.filter((item) => item.coffee.id !== coffee.id)
    )

    localStorage.setItem(
      'coffee-delivery:items',
      JSON.stringify(items.filter((item) => item.coffee.id !== coffee.id))
    )
  }

  function getPrice(): number {
    return items.reduce((total, item) => {
      return total + item.coffee.price * item.quantity
    }, 0)
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, getPrice }}>
      {children}
    </CartContext.Provider>
  )
}
