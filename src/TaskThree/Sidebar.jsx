import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartBar } from "react-icons/fa";
import "../Sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column p-3 bg-warning text-white">
      <h4 className="text-center">Textile Management</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            <FaHome className="me-2" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/invoice" className="nav-link text-white">
            <FaChartBar className="me-2" /> Invoice
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
