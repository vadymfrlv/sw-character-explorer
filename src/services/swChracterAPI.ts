import axios from 'axios';

import { BASE_URL } from 'constants/apiBaseUrl';
import { FetchCharacterResponse, Species, Starship } from 'types/character';
import { toQueryString } from 'utils/toQueryString';

axios.defaults.baseURL = BASE_URL;

export const fetchCharacters = async (
  page?: number,
  search?: string
): Promise<FetchCharacterResponse> => {
  const queryString = toQueryString({ page, search });
  const response = await axios(`people/${queryString}`);
  const { data } = response;
  return data;
};

export const fetchCharacterSpecies = async (specieId: string): Promise<Species> => {
  const response = await axios(`species/${specieId}`);
  const { data } = response;
  return data;
};

export const fetchCharacterStarships = async (starshipId: string): Promise<Starship> => {
  const response = await axios(`starships/${starshipId}`);
  const { data } = response;
  return data;
};
