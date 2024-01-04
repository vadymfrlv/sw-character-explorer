import { Link } from 'react-router-dom';

import { HeaderStyled, Logo } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo />
      </Link>
    </HeaderStyled>
  );
};
