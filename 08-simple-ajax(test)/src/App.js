import React from 'react';
import MenuLink from './components/MenuLink';
import {Routes, Route} from 'react-router-dom';

import DepartmentList from './pages/DepartmentList';
import DepartmentAdd from './pages/DepartmentAdd';

const App = () => {
  return (
    <div>
      <h1>08-simple-ajax</h1>

      <nav>
        <MenuLink to = '/department_list'>학과관리</MenuLink>
      </nav>
      
      <hr />

      <Routes>
        <Route path='/' element={<DepartmentList />} />
        <Route path='/department_list' element={<DepartmentList/>} />
        <Route path='/department_add' element={<DepartmentAdd/>} /> 
      </Routes>
    </div>
  );
};

export default App;