import React from 'react';
import MainPage from './pages/Main';
import TestProfile from './components/Profile/profile';
import TestProfileEdit from './components/Profile/editProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestProfile />} />
        <Route path="/testEdit" element={<TestProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
