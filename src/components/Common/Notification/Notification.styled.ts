import styled from 'styled-components';

export const NotificationText = styled.p`
  margin-top: 30px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;

  color: ${p => p.theme.colors.lightsaberRed};
`;
