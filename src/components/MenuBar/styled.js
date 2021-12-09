import styled from 'styled-components'
import { Link } from 'gatsby'

const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #192734;
  border-left: 1px solid #38444D;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`

const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuBarLink = styled(Link)`
  display: block;
`
const MenuBarItem = styled.span`
  color: #8899A6;
  cursor: pointer;
  display: block;
  height: 1.75rem;
  padding: 1.1rem;
  width: 1.75rem;

  &:hover {
    color: #1FA1F2;
  }
`

export {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem
}
