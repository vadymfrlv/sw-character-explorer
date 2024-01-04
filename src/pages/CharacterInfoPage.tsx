import { BackButton } from 'components/BackButton/BackButton';
import { CharacterInfoCard } from 'components/CharacterInfoCard/CharacterInfoCard';
import { VisuallyHidden } from 'components/Common/VisuallyHidden';

const CharacterDetailsPage = () => {
  return (
    <>
      <VisuallyHidden as="h1">Character details</VisuallyHidden>
      <BackButton />
      <CharacterInfoCard />
    </>
  );
};

export default CharacterDetailsPage;
