import React from 'react';
import MainPage from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppliedMatching from './components/AppliedMatching';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<AppliedMatching />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
