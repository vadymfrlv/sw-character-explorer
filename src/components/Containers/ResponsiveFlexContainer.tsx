import styled from 'styled-components';

import { BREAKPOINTS } from 'constants/breakpoints';

export const ResponsiveFlexContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${BREAKPOINTS.MOB}) {
    max-width: ${BREAKPOINTS.MOB};
    padding-right: 10px;
    padding-left: 10px;
  }

  @media screen and (min-width: ${BREAKPOINTS.TAB}) {
    max-width: ${BREAKPOINTS.TAB};
    padding-right: 20px;
    padding-left: 20px;
  }

  @media screen and (min-width: ${BREAKPOINTS.NOTE}) {
    max-width: ${BREAKPOINTS.NOTE};
    padding-right: 25px;
    padding-left: 25px;
  }

  @media screen and (min-width: ${BREAKPOINTS.DESK}) {
    max-width: ${BREAKPOINTS.DESK};
    padding-right: 30px;
    padding-left: 30px;
  }
`;
