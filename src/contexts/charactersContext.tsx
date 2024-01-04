import { createContext, useState, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useCharactersQuery } from 'hooks/queriesHooks/useCharactersQuery';
import { Character } from 'types/character';

export interface CharactersContextType {
  characters: Character[];
  prev: string | null;
  next: string | null;
  isSuccess: boolean;
  isFetching: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CharactersContext = createContext<CharactersContextType | undefined>(undefined);

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const searchQuery = searchParams.get('search') ?? '';

  const {
    data: characters = [],
    prev: prev = null,
    next: next = null,
    isSuccess,
    isFetching,
  } = useCharactersQuery(currentPage, searchQuery);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        prev,
        next,
        isSuccess,
        isFetching,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
