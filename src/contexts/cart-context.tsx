import { createContext, useState, ReactNode } from 'react'
import { Coffee } from '@/pages/home'
import { LocalStorage } from '@/utils/local-storage'

interface Item {
  coffee: Coffee
  quantity: number
}

interface CartContextType {
  items: Item[]
  deliveryPrice: number
  addItem: (coffee: Coffee, quantity: number) => void
  removeItem: (coffee: Coffee) => void
  updateItem: (coffee: Coffee, quantity: number) => void
  getPrice: () => number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  function getItemsLocalStorage(): Item[] {
    const items = LocalStorage.getItem('items')
    return items ? JSON.parse(items) : []
  }

  const deliveryPrice = 5
  const [items, setItems] = useState<Item[]>(getItemsLocalStorage)

  function addItem(coffee: Coffee, quantity: number) {
    setItems((prevItems) => [
      ...prevItems,
      { coffee: coffee, quantity: quantity }
    ])

    LocalStorage.setItem(
      'items',
      JSON.stringify([...items, { coffee: coffee, quantity: quantity }])
    )
  }

  function updateItem(coffee: Coffee, quantity: number) {
    const updateItemMap = (item: Item) =>
      item.coffee.id === coffee.id ? { ...item, quantity } : item

    setItems((prevItems) => prevItems.map(updateItemMap))

    LocalStorage.setItem('items', JSON.stringify(items.map(updateItemMap)))
  }

  function removeItem(coffee: Coffee) {
    const removeItemFilter = (item: Item) => item.coffee.id !== coffee.id

    setItems((prevItems) => prevItems.filter(removeItemFilter))

    LocalStorage.setItem(
      'items',
      JSON.stringify(items.filter(removeItemFilter))
    )
  }

  function getPrice(): number {
    return items.reduce((total, item) => {
      return total + item.coffee.price * item.quantity
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        deliveryPrice,
        addItem,
        removeItem,
        getPrice,
        updateItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
