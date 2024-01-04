import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ResponsiveFlexContainer } from 'components/Containers/ResponsiveFlexContainer';

import { MainStyled } from './GeneralSharedLayout.styled';

export const GeneralSharedLayout = () => {
  return (
    <>
      <ResponsiveFlexContainer>
        <MainStyled>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainStyled>
      </ResponsiveFlexContainer>
    </>
  );
};
