import React from 'react';
import MainPage from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './pages/Test';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
