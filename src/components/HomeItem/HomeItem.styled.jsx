import styled from '@emotion/styled';

export const HomeItemStyled = styled.li`
  display: block;
  width: 200px;
  text-align: center;
  transition: 0.2s;

  .titles {
    text-decoration: none;
  }
  &:hover,
  focus {
    scale: 1.01;
    box-shadow: 15px 12px 15px -3px rgba(255, 255, 0, 0.7);
    -webkit-box-shadow: 15px 12px 15px -3px rgba(255, 255, 0, 0.7);
    -moz-box-shadow: 15px 12px 15px -3px rgba(255, 255, 0, 0.7);
  }
`;
