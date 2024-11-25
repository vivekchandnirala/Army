// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontSizeProvider, FontSizeContext } from './FontSizeContext';
import ScrollToTop from './components/ScrollToTop';
import WelcomePage from './pages/WelcomePage'; // Welcome page
import Layout from './components/Layout'; // Layout for shared components
import Home from './pages/Home'; // Home page
import MissionVision from './pages/about/MissionVision'; // About pages
import Organization from './pages/about/Organization';
import Awards from './pages/about/Awards';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import War1947 from './pages/war/War1947';
import War1962 from './pages/war/War1962';
import War1965 from './pages/war/War1965';
import War1967 from './pages/war/War1967';
import War1971 from './pages/war/War1971';
import War1999 from './pages/war/War1999';
// import EliteForces from './pages/EliteForces';
// import Regiments from './pages/Regiments';
import Entries from './pages/Entries';
import SouthernCommand from './pages/SouthernCommand'; // Southern Command
import NorthernCommand from './pages/NorthernCommand'; // Northern Command
import WesternCommand from './pages/WesternCommand'; // Western Command
import EasternCommand from './pages/EasternCommand'; // Eastern Command
import CentralCommand from './pages/CentralCommand'; // Central Command
import SouthWesternCommand from './pages/SouthWesternCommand'; // South-West Command
import TrainingCommand from './pages/TrainingCommand'; // Training Command

function AppContent() {
  const { fontSize } = useContext(FontSizeContext);

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Welcome Page */}
          <Route path="/" element={<WelcomePage />} />

          {/* Main Layout with nested routes */}
          <Route path="/home" element={<Layout />}>
            <Route index element={<Home />} />
            {/* About Us */}
            <Route path="about/mission-vision" element={<MissionVision />} />
            <Route path="about/organization" element={<Organization />} />
            <Route path="about/awards" element={<Awards />} />

            {/* Shop and Gallery */}
            <Route path="shop" element={<Shop />} />
            <Route path="gallery" element={<Gallery />} />

            {/* War Pages */}
            <Route path="war/1947" element={<War1947 />} />
            <Route path="war/1962" element={<War1962 />} />
            <Route path="war/1965" element={<War1965 />} />
            <Route path="war/1967" element={<War1967 />} />
            <Route path="war/1971" element={<War1971 />} />
            <Route path="war/1999" element={<War1999 />} />

            {/* Commands */}
            <Route path="southern-command" element={<SouthernCommand />} />
            <Route path="northern-command" element={<NorthernCommand />} />
            <Route path="western-command" element={<WesternCommand />} />
            <Route path="eastern-command" element={<EasternCommand />} />
            <Route path="central-command" element={<CentralCommand />} />
            <Route path="south-west-command" element={<SouthWesternCommand />} />
            <Route path="training-command" element={<TrainingCommand />} />

            {/* Other Pages */}
            {/* <Route path="elite-forces" element={<EliteForces />} />
            <Route path="regiments" element={<Regiments />} /> */}
            <Route path="entries" element={<Entries />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function App() {
  return (
    <FontSizeProvider>
      <AppContent />
    </FontSizeProvider>
  );
}

export default App;
