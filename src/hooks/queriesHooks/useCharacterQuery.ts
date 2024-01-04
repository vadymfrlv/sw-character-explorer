import { useQueries } from '@tanstack/react-query';

import { fetchCharacterSpecies, fetchCharacterStarships } from 'services/swChracterAPI';
import { Character } from 'types/character';
import { extractIdFromUrl } from 'utils/extractIdFromUrl';

export const useCharacterAdditionalDetailsQuery = (characterData: Character) => {
  const speciesQueries = characterData.species.map(url => ({
    queryKey: ['species', url],
    queryFn: () => fetchCharacterSpecies(extractIdFromUrl(url)),
  }));

  const starshipsQueries = characterData.starships.map(url => ({
    queryKey: ['starships', url],
    queryFn: () => fetchCharacterStarships(extractIdFromUrl(url)),
  }));

  const detailQueries =
    characterData.species.length === 0 && characterData.starships.length === 0
      ? []
      : [...speciesQueries, ...starshipsQueries];

  const queryKeys = detailQueries.map(query => query.queryKey[0]);
  const queryResults = useQueries({ queries: detailQueries });

  return { queryResults, queryKeys };
};
