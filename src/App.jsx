import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Form from './taskOne/Form';
import DashBoard from './taskOne/DashBoard';
import { Button } from 'reactstrap';
import VendorTable from './taskOne/VendorTable';
import CategoryForm from './taskTwo/Category';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('/');

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <div className='d-flex justify-content-center gap-5 mt-2'>
        <Button
          type="button"
          onClick={() => navigate('/')}
          className={`btn ${activeTab === '/' ? 'btn-warning' : 'btn-secondary'}`}
        >
          Task One
        </Button>
        <Button
          type="button"
          onClick={() => navigate('/Category')}
          className={`btn ${activeTab === '/Category' ? 'btn-warning' : 'btn-secondary'}`}
        >
          Task Two
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/VendorTable" element={<VendorTable />} />
        <Route path="/Category" element={<CategoryForm />} />
      </Routes>
    </div>
  );
}

export default App;
