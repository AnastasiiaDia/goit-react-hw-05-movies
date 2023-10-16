import styled from '@emotion/styled';

export const MovieListStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  a {
    display: block;
    padding: 10px;
    margin-bottom: 20px;

    font-weight: bold;
    text-decoration: none;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    &:hover,
    &:focus {
      background: yellow;
    }
  }
`;
