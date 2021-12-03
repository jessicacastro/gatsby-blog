import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const AvatarWrapper = styled(GatsbyImage)`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;
`;


export { 
  AvatarWrapper
}