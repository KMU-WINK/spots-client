import React from 'react';
import MainPage from './pages/Main';
import MakePage from './pages/Make';
import Test from './components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/matching/make" element={<MakePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
