import { useCharacters } from 'hooks/useCharacters';

import { PaginationContainer, Button, PageText } from './Pagination.styled';

export const Pagination = () => {
  const { currentPage, prev, next, onPageChange, isPlaceholderData, shouldShowPagination } =
    useCharacters();

  return (
    shouldShowPagination && (
      <PaginationContainer>
        <Button
          type="button"
          disabled={!prev || isPlaceholderData}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &#171;
        </Button>
        <PageText>{currentPage}</PageText>
        <Button
          type="button"
          disabled={!next || isPlaceholderData}
          onClick={() => onPageChange(currentPage + 1)}
        >
          &#187;
        </Button>
      </PaginationContainer>
    )
  );
};
