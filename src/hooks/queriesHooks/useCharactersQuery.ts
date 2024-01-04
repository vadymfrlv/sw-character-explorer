import { useQuery, keepPreviousData } from '@tanstack/react-query';

import { fetchCharacters } from 'services/swChracterAPI';

export const useCharactersQuery = (currentPage: number, characterName?: string) => {
  const queryInfo = useQuery({
    queryFn: () => fetchCharacters(currentPage, characterName),
    queryKey: ['characters', currentPage, characterName],
    staleTime: 2000 * 10,
    placeholderData: keepPreviousData,
    throwOnError: true,
  });

  const characters = queryInfo.data?.results;
  const totalCharacters = queryInfo.data?.count;
  const prev = queryInfo.data?.previous;
  const next = queryInfo.data?.next;

  return {
    ...queryInfo,
    data: characters,
    totalCharacters,
    prev,
    next,
  };
};
