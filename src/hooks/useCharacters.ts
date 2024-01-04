import { useContext } from 'react';
import { CharactersContext, CharactersContextType } from 'contexts/charactersContext';

export const useCharacters = (): CharactersContextType => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
