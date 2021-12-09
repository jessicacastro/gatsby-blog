import styled from 'styled-components'
import { Link } from 'gatsby';

const ProfileWrapper = styled.section`
  color: #8899A6;
  display: flex;
  flex-direction: column;
`;

const ProfileLink = styled(Link)`
  color: #8899A6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #4760AA;
  }
`;

const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.2rem auto;
`;

const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;

const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`;


export { 
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription
}