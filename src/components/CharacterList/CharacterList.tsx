import { useCharacters } from 'hooks/useCharacters';
import { ErrorBoundary } from 'components/Common/ErrorBoundary';
import { CharacterItemSkeleton } from 'components/CharacterItemSkeleton/CharacterItemSkeleton';
import { CharacterItem } from 'components/CharacterItem/CharacterItem';
import { Notification } from 'components/Common/Notification/Notification';

import { CharacterListStyled } from './CharacterList.styled';

export const CharacterList = () => {
  const { characters, currentPage, isSuccess, isFetching } = useCharacters();

  return (
    <ErrorBoundary>
      {isFetching && <CharacterItemSkeleton cards={10} />}

      {isSuccess && !isFetching && characters.length === 0 && (
        <Notification message="Nothing was found" />
      )}

      {isSuccess && !isFetching && characters.length > 0 && (
        <CharacterListStyled>
          {isSuccess &&
            characters?.map(character => (
              <CharacterItem
                key={character.url}
                {...character}
                currentPage={currentPage}
                isFetching={isFetching}
              />
            ))}
        </CharacterListStyled>
      )}
    </ErrorBoundary>
  );
};
