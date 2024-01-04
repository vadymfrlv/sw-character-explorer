import styled, { keyframes } from 'styled-components';

import DeathStarImage from '../../assets/images/death-star.webp';

const flickerAnimation = keyframes`
  0% { opacity: 1; }
  15% { opacity: 0.9; }
  25% { opacity: 1; }
  35% { opacity: 0.7; }
  50% { opacity: 0.8; }
  75% { opacity: 1; }
  85% { opacity: 1; }
  100% { opacity: 0.8; }
`;

export const FooterStyled = styled.footer`
  position: relative;
  margin-top: auto;
`;

export const DeathStar = styled.div`
  position: absolute;
  right: -80px;
  bottom: 40px;
  height: 250px;
  width: 250px;
  z-index: -1;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${DeathStarImage});

  animation: ${flickerAnimation} 4s infinite;

  @media (min-width: ${p => p.theme.screens.tab}) {
    right: 20px;
    bottom: 20px;
    height: 300px;
    width: 300px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    right: 20px;
    bottom: 20px;
    height: 450px;
    width: 450px;
  }
`;
