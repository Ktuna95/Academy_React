import React, { memo } from 'react';
import {Routes, Route} from "react-router-dom";
import MenuLink from './components/MenuLink';

import  News from './pages/News';
import TrafficAcc from './pages/TrafficAcc';

const App = memo(() => {
  return (
    <div>
      <h1>Exam 12, 13</h1>
      <nav>
        <MenuLink to ="/news">News</MenuLink>
        <MenuLink to ="/traffic_acc">Traffic Acc</MenuLink>
      </nav>

      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/traffic_acc" element={<TrafficAcc />} />
      </Routes>
    </div>
  );
});

export default App;