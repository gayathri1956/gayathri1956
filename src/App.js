import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home1';
import Alphabets from './pages/Alphabets';
import Numbers from './pages/Numbers';
import Rhymes from './pages/Rhymes';
import Drawing from './pages/Drawing';
import Quiz from './pages/Quiz';
import PuzzleGames from './pages/PuzzleGames';
import CountriesAndFlags from './pages/CountriesAndFlags';
import Stories from './pages/Stories';
import TrafficSafety from './pages/TrafficSafety';
import BodyParts from './pages/BodyParts';
import DaysOfWeek from './pages/DaysOfWeek';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/alphabets" element={<Layout><Alphabets /></Layout>} />
        <Route path="/numbers" element={<Layout><Numbers /></Layout>} />
        <Route path="/rhymes" element={<Layout><Rhymes /></Layout>} />
        <Route path="/drawing" element={<Layout><Drawing /></Layout>} />
        <Route path="/quiz" element={<Layout><Quiz /></Layout>} />
        <Route path="/puzzle-games" element={<Layout><PuzzleGames /></Layout>} />
        <Route path="/countries-flags" element={<Layout><CountriesAndFlags /></Layout>} />
        <Route path="/stories" element={<Layout><Stories /></Layout>} />
        <Route path="/traffic-safety" element={<Layout><TrafficSafety /></Layout>} />
        <Route path="/body-parts" element={<Layout><BodyParts /></Layout>} />
        <Route path="/days-of-week" element={<Layout><DaysOfWeek /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
