import { CharacterList } from 'components/CharacterList/CharacterList';
import { Pagination } from 'components/Pagination/Pagination';

const HomePage = () => {
  return (
    <>
      <CharacterList />
      <Pagination />
    </>
  );
};

export default HomePage;
