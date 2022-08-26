import React from 'react';
import MainPage from './pages/Main';
import MatchingPage from './pages/Matching';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/matching/detail" element={<MatchingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;