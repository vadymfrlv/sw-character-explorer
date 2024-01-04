import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const CharacterInfoPage = lazy(() => import('pages/CharacterInfoPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="character/:characterId" element={<CharacterInfoPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
