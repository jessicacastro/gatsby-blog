import React from 'react'

import { Home, Grid } from 'styled-icons/boxicons-solid'
import { 
  SearchAlt2 as Search, 
  UpArrowAlt as Arrow
} from 'styled-icons/boxicons-regular'

import { LightBulb as Light } from 'styled-icons/heroicons-solid'

import * as Styled from './styled'

const MenuBar = () => (
  <Styled.MenuBarWrapper>

    <Styled.MenuBarGroup>
      <Styled.MenuBarLink to="/" title="Voltar para Home">
        <Styled.MenuBarItem>
          <Home />
        </Styled.MenuBarItem>
      </Styled.MenuBarLink>
      <Styled.MenuBarLink to="/search/" title="Pesquisar">
        <Styled.MenuBarItem>
          <Search />
        </Styled.MenuBarItem>
      </Styled.MenuBarLink>
    </Styled.MenuBarGroup>

    <Styled.MenuBarGroup>
      <Styled.MenuBarItem title="Mudar o tema">
        <Light />
      </Styled.MenuBarItem>
      <Styled.MenuBarItem title="Mudar visualização">
        <Grid />
      </Styled.MenuBarItem>
      <Styled.MenuBarItem title="Ir para o topo">
        <Arrow />
      </Styled.MenuBarItem>
    </Styled.MenuBarGroup>
  </Styled.MenuBarWrapper>
)

export default MenuBar