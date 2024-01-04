import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;

  margin: 30px auto 0;
  padding: 7px 17px;

  border-radius: 3px;
  border: 2px solid ${p => p.theme.colors.white};
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: inset 0 0 9px 0 ${p => p.theme.colors.white}, 0 0 9px 0 ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 200px;
  }
`;

export const Button = styled.button`
  font-size: 25px;

  color: ${p => p.theme.colors.white};

  transition: color 250ms ease-in-out;
  cursor: pointer;

  &:disabled {
    color: rgba(250, 250, 250, 0.5);
  }
`;

export const PageText = styled.span`
  margin: 0 12px;
  font-size: 25px;
  color: ${p => p.theme.colors.white};
`;
