import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CharacterItemInfoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  z-index: 1;

  padding: 10px 18px 13px;

  border-radius: 3px;
  border: 2px solid ${p => p.theme.colors.lightsaberBlue};
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: inset 0 0 9px 0 ${p => p.theme.colors.lightsaberBlue},
    0 0 9px 0 ${p => p.theme.colors.lightsaberBlue};

  transition: border 250ms ease-in-out, box-shadow 250ms ease-in-out;

  &:hover {
    border: 2px solid ${p => p.theme.colors.lightsaberRed};
    box-shadow: inset 0 0 9px 0 ${p => p.theme.colors.lightsaberRed},
      0 0 9px 0 ${p => p.theme.colors.lightsaberRed};
  }

  &:hover {
    & .hover-effect {
      color: ${p => p.theme.colors.lightsaberRed};
    }
  }
`;

export const Name = styled.h2`
  margin-bottom: 12px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 23px;
  text-align: center;

  color: ${p => p.theme.colors.lightsaberBlue};
  transition: color 250ms ease-in-out;

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 28px;
  }
`;

export const DetailListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailItemWrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const DetailTitle = styled.h3`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 15px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 18px;
  }
`;

export const DetailData = styled.span`
  font-size: 15px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 18px;
  }
`;
