import React from 'react';
import MainPage from './pages/Main';
import MyPage from './pages/MyPage';
import MatchingPage from './pages/Matching';
import MakePage from './pages/Make';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/matching/detail" element={<MatchingPage />} />
        <Route path="/matching/make" element={<MakePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
