import React from 'react';
import MainPage from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimeTableTest from './pages/TimeTableTest';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/timetable" element={<TimeTableTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
