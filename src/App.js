import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import Sidebar from './navigation/Sidebar';

function App() {

  return (
    <div className="main-app-wrapper" style={{
      display: 'flex',
      height: '100vh',
      width: '100vw'
    }}>
      <div className="sidebar" style={{
        height: '100%'
      }}>
        <Sidebar />
      </div>
      <div className="main-layout" style={{
        width: '100%',
      }}>
        <Routes>
          <Route exact path={ '/' } element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
