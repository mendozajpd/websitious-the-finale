import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layouts
import LandingLayout from './components/layouts/LandingLayout';
import ExploreLayout from './components/layouts/ExploreLayout';

// Pages
import HomePage from './components/pages/HomePage';
import ExplorePage from './components/pages/ExplorePage';
import WonderPage from './components/pages/WonderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingLayout />} >
          <Route index element={<HomePage />} />
          {/* <Route path="explore" element={<ExplorePage />} /> */}
        </Route>
        <Route path="/explore" element={<ExploreLayout />} >
          <Route index element={<ExplorePage />} />
          <Route path=":id" element={<WonderPage />} />
        </Route>
        {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
