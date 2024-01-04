import { useCharacters } from 'hooks/useCharacters';
import { CharacterItemSkeleton } from 'components/CharacterItemSkeleton/CharacterItemSkeleton';
import { CharacterItem } from 'components/CharacterItem/CharacterItem';

import { CharacterListStyled } from './CharacterList.styled';

export const CharacterList = () => {
  const { characters, currentPage, isSuccess, isFetching } = useCharacters();

  return (
    <>
      {isFetching && <CharacterItemSkeleton cards={10} />}

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
    </>
  );
};
