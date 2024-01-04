import { BackButton } from 'components/BackButton/BackButton';
import { VisuallyHidden } from 'components/Common/VisuallyHidden';

const CharacterDetailsPage = () => {
  return (
    <>
      <VisuallyHidden as="h1">Character details</VisuallyHidden>
      <BackButton />
    </>
  );
};

export default CharacterDetailsPage;
