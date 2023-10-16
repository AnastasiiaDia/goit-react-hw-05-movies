import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  position: absolute;
  display: flex;
  padding: 10px;
  margin-bottom: 20px;

  font-weight: bold;
  text-decoration: none;
  background-color: yellow;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const ImageWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 40px;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-weight: bold;
  }
`;
