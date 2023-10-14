const LoadMore = ({ onClick }) => {
  return (
    <button type="button" onClick={() => onClick()}>
      Load more
    </button>
  );
};

export default LoadMore;