import { VisuallyHidden } from 'components/Common/VisuallyHidden';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { Pagination } from 'components/Pagination/Pagination';

const HomePage = () => {
  return (
    <>
      <VisuallyHidden as="h1">Star Wars Character list</VisuallyHidden>
      <CharacterList />
      <Pagination />
    </>
  );
};

export default HomePage;
