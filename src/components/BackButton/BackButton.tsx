import { useLocation } from 'react-router-dom';
import { StyledBackBtn, IconBack } from './BackButton.styled';
import { useCharacters } from 'hooks/useCharacters';

export const BackButton = () => {
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';
  const currentPage = location?.state?.currentPage ?? 1;

  const { setCurrentPage } = useCharacters();

  const handleBack = () => {
    setCurrentPage(currentPage);
  };

  return (
    <StyledBackBtn to={backLinkHref} onClick={handleBack}>
      <IconBack />
      Back
    </StyledBackBtn>
  );
};
