import { createContext, useState, ReactNode } from 'react'
import { Coffee } from '@/pages/home'
import { LocalStorage } from '@/utils/local-storage'

interface Item {
  coffee: Coffee
  quantity: number
}

interface DeliveryInfo {
  address: {
    zipcode: number
    street: string
    number: number
    complement?: string
    district: string
    city: string
    state: string
  }
  paymentOption: 'credit' | 'debit' | 'cash'
}

interface CartContextType {
  items: Item[]
  deliveryPrice: number
  addItem: (coffee: Coffee, quantity: number) => void
  removeItem: (coffee: Coffee) => void
  updateItem: (coffee: Coffee, quantity: number) => void
  getPrice: () => number
  deliveryInfo: DeliveryInfo | null
  addDeliveryInfo: (deliveryInfo: DeliveryInfo) => void
  getPaymentOption: (paymentOption: 'credit' | 'debit' | 'cash') => string
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

  function getDeliveryInfoLocalStorage(): DeliveryInfo | null {
    const deliveryInfo = LocalStorage.getItem('delivery_info')
    return deliveryInfo ? JSON.parse(deliveryInfo) : null
  }

  const deliveryPrice = 5
  const [items, setItems] = useState<Item[]>(getItemsLocalStorage)
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo | null>(
    getDeliveryInfoLocalStorage
  )

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

  function addDeliveryInfo(deliveryInfo: DeliveryInfo) {
    setDeliveryInfo(deliveryInfo)

    LocalStorage.setItem('delivery_info', JSON.stringify(deliveryInfo))
  }

  function getPaymentOption(paymentOption: 'credit' | 'debit' | 'cash') {
    if (paymentOption === 'credit') {
      return 'Cartão de Crédito'
    } else if (paymentOption === 'debit') {
      return 'Cartão de Débito'
    } else {
      return 'Dinheiro'
    }
  }

  return (
    <CartContext.Provider
      value={{
        items,
        deliveryPrice,
        addItem,
        removeItem,
        getPrice,
        updateItem,
        deliveryInfo,
        addDeliveryInfo,
        getPaymentOption
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
