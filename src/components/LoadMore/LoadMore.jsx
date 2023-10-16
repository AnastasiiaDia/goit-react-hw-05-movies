import { LoadMoreStyled } from './LoadMore.styled';

const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreStyled type="button" onClick={() => onClick()}>
      Load more
    </LoadMoreStyled>
  );
};

export default LoadMore;
