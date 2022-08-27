import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimeTableTest from './pages/TimeTableTest';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimeTableTest />} />
        <Route path="/timetable" element={<TimeTableTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
