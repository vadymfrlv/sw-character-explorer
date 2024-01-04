import { Link } from 'react-router-dom';
import { useCharacters } from 'hooks/useCharacters';

import { HeaderStyled, Logo } from './Header.styled';

export const Header = () => {
  const { setCurrentPage } = useCharacters();

  return (
    <HeaderStyled>
      <Link to="/" onClick={() => setCurrentPage(1)}>
        <Logo />
      </Link>
    </HeaderStyled>
  );
};
