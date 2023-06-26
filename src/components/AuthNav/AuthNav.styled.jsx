import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 35px;

  & a {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    color: #2196f3;
  }

  & .active {
    color: #2196f3;
    text-decoration: underline;
  }
`;
