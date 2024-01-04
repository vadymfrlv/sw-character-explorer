import styled, { css } from 'styled-components';

import StarshipIcon from '../../assets/images/svg/starship.svg';
import PassengersIcon from '../../assets/images/svg/passengers.svg';

const sharedStyleForText = css`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 14px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 18px;
  }
`;

const sharedStyleForIcons = css`
  height: 14px;
  width: 14px;
  margin-right: 3px;
  fill: ${p => p.theme.colors.yellow};

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 16px;
    width: 16px;
  }
`;

export const CharacterCard = styled.div`
  width: 100%;
  min-height: 420px;
  padding: 10px 18px 20px;

  border-radius: 3px;
  border: 2px solid ${p => p.theme.colors.yellow};
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: inset 0 0 9px 0 ${p => p.theme.colors.yellow}, 0 0 9px 0 ${p => p.theme.colors.yellow};

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 35px;
  }
`;

export const Name = styled.h2`
  margin-bottom: 12px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 27px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 35px;
  }
`;

export const AllDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 16px;
  border-top: 2px solid ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.screens.tab}) {
    flex-direction: row;
    font-size: 18px;
  }
`;

export const SectionWrapper = styled.div`
  width: 400px;
  margin-top: 15px;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: ${p => p.theme.colors.yellow};

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 19px;
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
    margin-bottom: 7px;
  }
`;

export const DetailTitle = styled.h3`
  ${sharedStyleForText}
`;

export const DetailData = styled.span`
  ${sharedStyleForText}

  font-weight: ${p => p.theme.fontWeights.regular};
`;

export const AddInfoList = styled.div``;

export const StarshipsList = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const StarshipName = styled.h3`
  ${sharedStyleForText}
`;

export const StarshipInfo = styled.div`
  ${sharedStyleForText}

  display: flex;
  align-items: center;
  font-weight: ${p => p.theme.fontWeights.regular};
`;

export const StarshipInfoDescr = styled.span`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const StarshipIcn = styled(StarshipIcon)`
  ${sharedStyleForIcons}
`;

export const PassengersIcn = styled(PassengersIcon)`
  ${sharedStyleForIcons}
`;

export const NoDataNotification = styled.span``;
