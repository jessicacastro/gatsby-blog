import styled from 'styled-components'
import { Link } from 'gatsby'

const PostItemLink = styled(Link)`
  color: #8899A6;
  display: flex;
  text-decoration: none;

  &:hover {
    color: ${props => props.background};
  }
`

const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid #38444D;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
  cursor: pointer;

`

const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background};
  border-radius: 50%;
  color: #FFFFFF;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`

const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

const PostItemDate = styled.time`
  font-size: 0.9rem;
`

const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2
`

export {
  PostItemLink,
  PostItemWrapper,
  PostItemTag,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDescription
}