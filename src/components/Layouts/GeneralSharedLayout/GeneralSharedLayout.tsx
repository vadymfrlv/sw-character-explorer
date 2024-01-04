import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { ResponsiveFlexContainer } from 'components/Containers/ResponsiveFlexContainer';
import { Footer } from 'components/Footer/Footer';

import { MainStyled } from './GeneralSharedLayout.styled';

export const GeneralSharedLayout = () => {
  return (
    <>
      <Header />

      <ResponsiveFlexContainer>
        <MainStyled>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainStyled>
      </ResponsiveFlexContainer>

      <Footer />
    </>
  );
};
