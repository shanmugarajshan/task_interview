import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './TaskThree/Sidebar';
import Invoice from './TaskThree/Invoice';
import Dashboard from './TaskThree/DashBoard';

function App() {

  return (
    <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 px-0">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
