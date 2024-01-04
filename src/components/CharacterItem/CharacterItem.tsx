import { useLocation } from 'react-router-dom';

import { Character } from 'types/character';
import { formatDate } from 'utils/formatDate';
import { extractIdFromUrl } from 'utils/extractIdFromUrl';

import {
  CharacterItemInfoLink,
  Name,
  DetailListWrapper,
  DetailItemWrapper,
  DetailTitle,
  DetailData,
} from './CharacterItem.styled';

export const CharacterItem = (props: Character & { isFetching: boolean; currentPage: number }) => {
  const { name, birth_year, height, created, url, currentPage } = props;
  const location = useLocation();

  const characterId = extractIdFromUrl(url);
  const formattedDate = formatDate(created);

  return (
    <CharacterItemInfoLink
      to={`/character/${characterId}`}
      state={{ from: location, character: props, currentPage }}
    >
      <Name className="hover-effect">{name}</Name>
      <DetailListWrapper>
        <DetailItemWrapper>
          <DetailTitle>Birth year:</DetailTitle>&nbsp;
          <DetailData>{birth_year}</DetailData>
        </DetailItemWrapper>
        <DetailItemWrapper>
          <DetailTitle>Height:</DetailTitle>&nbsp;
          <DetailData>{height}</DetailData>
        </DetailItemWrapper>
        <DetailItemWrapper>
          <DetailTitle>Date created:</DetailTitle>&nbsp;
          <DetailData>{formattedDate}</DetailData>
        </DetailItemWrapper>
      </DetailListWrapper>
    </CharacterItemInfoLink>
  );
};
