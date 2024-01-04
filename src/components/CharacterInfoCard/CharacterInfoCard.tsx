import { useLocation } from 'react-router-dom';

import { useCharacterAdditionalDetailsQuery } from 'hooks/queriesHooks/useCharacterQuery';
import { Species, Starship } from 'types/character';
import { formatDate } from 'utils/formatDate';

import {
  CharacterCard,
  Name,
  AllDetailsWrapper,
  SectionWrapper,
  SectionTitle,
  DetailListWrapper,
  DetailItemWrapper,
  DetailTitle,
  DetailData,
  AddInfoList,
  StarshipsList,
  StarshipName,
  StarshipInfo,
  StarshipInfoDescr,
  StarshipIcn,
  PassengersIcn,
  NoDataNotification,
} from './CharacterInfoCard.styled';

export const CharacterInfoCard = () => {
  const location = useLocation();
  const character = location.state.character;
  const { queryResults, queryKeys } = useCharacterAdditionalDetailsQuery(character);

  const characterSpecies = character.species.length > 0;
  const characterStarships = character.starships.length > 0;
  const { name, birth_year, height, gender, mass, created } = character;

  const speciesResults: Species[] = queryResults
    .filter((query, idx) => queryKeys[idx] === 'species' && query.isSuccess)
    .map(query => query.data as Species);

  const starshipsResults: Starship[] = queryResults
    .filter((query, idx) => queryKeys[idx] === 'starships' && query.isSuccess)
    .map(query => query.data as Starship);

  const formattedDate = formatDate(created);

  return (
    <CharacterCard>
      <Name>{name}</Name>
      <AllDetailsWrapper>
        <SectionWrapper>
          <SectionTitle>General info</SectionTitle>
          <DetailListWrapper>
            <DetailItemWrapper>
              <DetailTitle>Height:</DetailTitle>&nbsp;
              <DetailData>{height}</DetailData>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <DetailTitle>Mass:</DetailTitle>&nbsp;
              <DetailData>{mass}</DetailData>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <DetailTitle>Birth year:</DetailTitle>&nbsp;
              <DetailData>{birth_year}</DetailData>
            </DetailItemWrapper>
            <DetailItemWrapper>
              <DetailTitle>Date created:</DetailTitle>&nbsp;
              <DetailData>{formattedDate}</DetailData>
            </DetailItemWrapper>
          </DetailListWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <SectionTitle>Additional info</SectionTitle>
          <DetailItemWrapper>
            <DetailTitle>Gender:</DetailTitle>&nbsp;
            <DetailData>{gender}</DetailData>
          </DetailItemWrapper>
          {!characterSpecies ? (
            <AddInfoList>
              <DetailItemWrapper>
                <DetailTitle>Classification:</DetailTitle>&nbsp;
                <DetailData>&#8212;</DetailData>
              </DetailItemWrapper>
              <DetailItemWrapper>
                <DetailTitle>Average lifespan:</DetailTitle>&nbsp;
                <DetailData>&#8212;</DetailData>
              </DetailItemWrapper>
              <DetailItemWrapper>
                <DetailTitle>Language:</DetailTitle>&nbsp;
                <DetailData>&#8212;</DetailData>
              </DetailItemWrapper>
            </AddInfoList>
          ) : (
            speciesResults.map(({ classification, average_lifespan, language }, idx) => (
              <AddInfoList key={`species-${idx}`}>
                <DetailItemWrapper>
                  <DetailTitle>Classification:</DetailTitle>&nbsp;
                  <DetailData>{classification}</DetailData>
                </DetailItemWrapper>
                <DetailItemWrapper>
                  <DetailTitle>Average lifespan:</DetailTitle>&nbsp;
                  <DetailData>{average_lifespan}</DetailData>
                </DetailItemWrapper>
                <DetailItemWrapper>
                  <DetailTitle>Language:</DetailTitle>&nbsp;
                  <DetailData>{language}</DetailData>
                </DetailItemWrapper>
              </AddInfoList>
            ))
          )}
        </SectionWrapper>

        <SectionWrapper>
          <SectionTitle>Starships</SectionTitle>
          {!characterStarships ? (
            <NoDataNotification>&#8212;</NoDataNotification>
          ) : (
            starshipsResults.map(({ name, model, passengers }, idx) => (
              <StarshipsList key={`starship-${idx}`}>
                <StarshipName>{name}</StarshipName>
                <StarshipInfo>
                  <StarshipIcn />
                  &nbsp;
                  <StarshipInfoDescr>{model}</StarshipInfoDescr>
                  <PassengersIcn />
                  &nbsp;
                  <StarshipInfoDescr>{passengers}</StarshipInfoDescr>
                </StarshipInfo>
              </StarshipsList>
            ))
          )}
        </SectionWrapper>
      </AllDetailsWrapper>
    </CharacterCard>
  );
};
