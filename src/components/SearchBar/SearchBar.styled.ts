import styled from 'styled-components';
import { Form, Field } from 'formik';

import SearchIcon from '../../assets/images/svg/search.svg';

export const StyledForm = styled(Form)`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  margin: 0 auto 30px;

  border-radius: 3px;
  overflow: hidden;

  @media (min-width: ${p => p.theme.screens.note}) {
    width: 367px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 678px;
  }
`;

export const StyledField = styled(Field)`
  display: inline-block;
  height: 55px;
  width: 100%;
  padding-left: 12px;
  padding-right: 50px;

  font-family: 'Oswald', sans-serif;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: 22px;

  color: ${p => p.theme.colors.white};
  border-radius: 3px;
  border: 2px solid ${p => p.theme.colors.white};
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: inset 0 0 9px 0 ${p => p.theme.colors.white}, 0 0 9px 0 ${p => p.theme.colors.white};
  outline: none;

  &::placeholder {
    color: #ffffff48;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  display: block;
  padding: 10px 12px 10px 10px;

  cursor: pointer;
`;

export const SearchIcn = styled(SearchIcon)`
  height: 25px;
  width: 25px;
  fill: ${p => p.theme.colors.white};
`;
