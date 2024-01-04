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
  isPlaceholderData: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  onPageChange: (page: number) => void;
  searchQuery: string | undefined;
  handleSearchSubmit: (characterName: string) => void;
  shouldShowPagination: boolean;
}

export const CharactersContext = createContext<CharactersContextType | undefined>(undefined);

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [initialSearchPage, setInitialSearchPage] = useState(1);
  const searchQuery = searchParams.get('search') ?? '';

  const {
    data: characters = [],
    totalCharacters = 1,
    prev: prev = null,
    next: next = null,
    isSuccess,
    isFetching,
    isPlaceholderData,
  } = useCharactersQuery(currentPage, searchQuery);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSearchSubmit = (search: string) => {
    if (search === '') {
      setCurrentPage(initialSearchPage);
    } else {
      if (searchQuery === '') {
        setInitialSearchPage(currentPage);
      }
      setCurrentPage(1);
    }
    setSearchParams({ search });
  };

  const shouldShowPagination = isSuccess && characters && totalCharacters > 10;

  return (
    <CharactersContext.Provider
      value={{
        characters,
        prev,
        next,
        isSuccess,
        isFetching,
        isPlaceholderData,
        currentPage,
        setCurrentPage,
        onPageChange,
        searchQuery,
        handleSearchSubmit,
        shouldShowPagination,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
