import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChapterList from './components/ChapterList';
import ChapterReader from './components/ChapterReader';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ChapterList />} />
          <Route path="/chapter/:id" element={<ChapterReader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
