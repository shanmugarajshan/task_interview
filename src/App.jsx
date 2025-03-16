import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Form from './taskOne/Form';
import { Button } from 'reactstrap';
import VendorTable from './taskOne/VendorTable';
import CategoryForm from './taskTwo/Category';
import Sidebar from './TaskThree/Sidebar';
import Dashboard from './TaskThree/DashBoard';
import Invoice from './TaskThree/Invoice';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('/');

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

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
