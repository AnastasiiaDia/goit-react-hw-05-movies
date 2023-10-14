import styled from '@emotion/styled';
export const Header = styled.header`
  background-color: grey;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 1rem;

    li {
      a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
        font-weight: 700;

        &:active,
        &:hover {
          color: yellow;
        }
      }
    }
  }
  /* display: flex;
flex-direction: row;
align-items: center; */
`;
