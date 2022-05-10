import React from 'react';
import Myprops from './pages/Myprops';
import MyPropTypes from './pages/MyPropTypes';
import MyChildren from './pages/MyChildren';
import Meta from './components/Meta';

import { Link, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>04-props</h1>
      <nav>
        <Link to="/Myprops">[Myprops]</Link>
        <Link to="/MyPropTypes">[MyProptypes]</Link>
        <Link to="/MyChildren">[MyChildren]</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/Myprops" element={<Myprops/>} />
        <Route path="/MyPropTypes" element={<MyPropTypes/>} />
        <Route path="/MyChildren" element={<MyChildren/>} />
      </Routes>
    </div>
  );
};

export default App;
