import { useCharacters } from 'hooks/useCharacters';
import { ErrorBoundary } from 'components/Common/ErrorBoundary';
import { CharactersSkeleton } from 'components/CharactersSkeleton/CharactersSkeleton';
import { CharacterItem } from 'components/CharacterItem/CharacterItem';
import { Notification } from 'components/Common/Notification/Notification';

import { CharacterListStyled } from './CharacterList.styled';

export const CharacterList = () => {
  const { characters, currentPage, isSuccess, isFetching } = useCharacters();

  return (
    <ErrorBoundary>
      {isFetching && <CharactersSkeleton cards={10} />}

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
