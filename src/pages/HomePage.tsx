import { LoadingScreen } from 'components/LoadingScreen/LoadingScreen';

import { VisuallyHidden } from 'components/Common/VisuallyHidden';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { Pagination } from 'components/Pagination/Pagination';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useCharacters } from 'hooks/useCharacters';

const HomePage = () => {
  const { initialLoadComplete, isFetching } = useCharacters();

  return (
    <>
      {isFetching && !initialLoadComplete ? (
        <LoadingScreen />
      ) : (
        <>
          <VisuallyHidden as="h1">Star Wars Character list</VisuallyHidden>
          <SearchBar />
          <CharacterList />
          <Pagination />
        </>
      )}
    </>
  );
};

export default HomePage;
