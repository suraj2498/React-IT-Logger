import React, { useEffect, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';


import './App.css';
import TechlistModal from './components/techs/TechlistModal';



const App = () => {

  useEffect(() => {
    // initializes materialize js 
    M.AutoInit();
  });

  return (
    <Fragment>
        <Searchbar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <AddTechModal />
          <EditLogModal />
          <TechlistModal />
          <Logs />
        </div>
    </Fragment>
  );
}

export default App;
