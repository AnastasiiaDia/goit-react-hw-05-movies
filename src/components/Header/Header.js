import { HeaderStyle } from './Header.styled';

export function Header() {
  return (
    <>
      <HeaderStyle className="header">
        <a href="/">Home</a>
        <a href="/movie">Movies</a>
      </HeaderStyle>
    </>
  );
}
