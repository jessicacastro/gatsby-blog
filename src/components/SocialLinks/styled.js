import styled from 'styled-components';

const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

// Just not to tag li. We will put the name of the const;
const SocialLinksItem = styled.li``;

const SocialLinksLink = styled.a`
  color: #8899A6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1FA1F2;
  }
`;

const IconWrapper = styled.div`
  fill: #BBBBBB;
  width: 30px;
  height: 30px;
`;

export {
  SocialLinksWrapper,
  SocialLinksList,
  SocialLinksItem,
  SocialLinksLink,
  IconWrapper
}