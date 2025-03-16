import React from "react";
import "../Dashboard.css";
import banner from "../assets/banner.jpeg";

const Dashboard = () => {
  return (
    <div className="dashboard p-4">
      {/* Card Section */}
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card bg-success text-white p-3">
            <h5>Cotton Shirt</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-info text-white p-3">
            <h5>Casual Shoes</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-warning text-white p-3">
            <h5>Denim Jacket</h5>
          </div>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            <img 
              src={banner} 
              alt="Banner" 
              className="img-fluid rounded shadow"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
