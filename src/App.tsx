import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { GeneralSharedLayout } from 'components/Layouts/GeneralSharedLayout/GeneralSharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const CharacterInfoPage = lazy(() => import('pages/CharacterInfoPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<GeneralSharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="character/:characterId" element={<CharacterInfoPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
