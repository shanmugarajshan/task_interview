import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import VendorForm from './TaskFour/VendorForm';
import CategorySelector from './TaskFour/Category';
import VendorDetails from './TaskFour/vendorDetails';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const togglePage = () => {
    if (location.pathname === '/') {
      navigate('/Category');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-12 text-end">
          <button className="btn btn-primary me-2" onClick={togglePage}>
            Go to {location.pathname === '/' ? 'Category' : 'Vendor'}
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/vendor-details')}>
            View Vendor Details
          </button>
        </div>
      </div>
      <div className="row">
        <div>
          <Routes>
            <Route path="/" element={<VendorForm />} />
            <Route path="/Category" element={<CategorySelector />} />
            <Route path="/vendorDetails" element={<VendorDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
