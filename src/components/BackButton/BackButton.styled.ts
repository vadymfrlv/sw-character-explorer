import styled from 'styled-components';
import BackIcon from '../../assets/images/svg/arrow-back.svg';

import { Link } from 'react-router-dom';

export const StyledBackBtn = styled(Link)`
  display: inline-block;
  align-items: center;
  margin-bottom: 20px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 20px;
  color: ${p => p.theme.colors.white};
  fill: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.screens.note}) {
    margin-bottom: 15px;
    font-size: 21px;
  }

  &:hover {
    color: ${p => p.theme.colors.yellow};
    fill: ${p => p.theme.colors.yellow};
  }
`;

export const IconBack = styled(BackIcon)`
  height: 17px;
  width: 17px;
  margin-right: 5px;

  transform: rotate(90deg);
  transition: fill 250ms ease-in-out;

  @media (min-width: ${p => p.theme.screens.note}) {
    height: 18px;
    width: 18px;
  }
`;
