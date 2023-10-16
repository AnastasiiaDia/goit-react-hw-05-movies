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
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: none;
        color: white;

        &:hover {
          color: yellow;
        }
      }
      .active {
        color: yellow;
      }
    }
  }
`;
