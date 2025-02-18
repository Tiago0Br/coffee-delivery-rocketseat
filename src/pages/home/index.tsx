import { useTheme } from 'styled-components'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import banner from '@/assets/coffee-delivery.png'
import * as Styles from './styles'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <Styles.IntroContainer>
        <Styles.InfoContainer>
          <Styles.TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Styles.TitleContainer>
          <Styles.ItemsContainer>
            <li>
              <Styles.ItemIcon color={theme['yellow-dark']}>
                <ShoppingCart weight="fill" size={14} />
              </Styles.ItemIcon>
              Compra simples e segura
            </li>
            <li>
              <Styles.ItemIcon color={theme['text']}>
                <Package weight="fill" size={14} />
              </Styles.ItemIcon>
              Embalagem mantém o café intacto
            </li>
            <li>
              <Styles.ItemIcon color={theme['yellow']}>
                <Timer weight="fill" size={14} />
              </Styles.ItemIcon>
              Entrega rápida e rastreada
            </li>
            <li>
              <Styles.ItemIcon color={theme['purple']}>
                <Coffee weight="fill" size={14} />
              </Styles.ItemIcon>
              O café chega fresqueinho até você
            </li>
          </Styles.ItemsContainer>
        </Styles.InfoContainer>
        <img
          src={banner}
          alt="Banner de um café com a logo da Coffee Delivery"
          draggable="false"
        />
      </Styles.IntroContainer>
    </div>
  )
}
