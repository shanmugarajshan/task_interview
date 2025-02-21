import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

const VendorTable = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("vendors")) || [];
        setVendors(storedData);
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center text-success">Vendor List</h2>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Vendor Name</th>
                        <th>Business Type</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Contact</th>
                        <th>Website</th>
                        <th>Tax Info</th>
                        <th>Departments</th>
                        <th>Emails</th>
                        <th>Phone Numbers</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map((vendor, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{vendor.vendorName}</td>
                            <td>{vendor.businessType}</td>
                            <td>{vendor.vendorAddress}</td>
                            <td>{vendor.vendorCity}</td>
                            <td>{vendor.vendorContact}</td>
                            <td>{vendor.vendorWebsite}</td>
                            <td>{vendor.taxInfo}</td>
                            <td>{vendor.departments.join(", ")}</td>
                            <td>{vendor.emails.join(", ")}</td>
                            <td>{vendor.phoneNumbers.join(", ")}</td>
                            <td>
                                {vendor.vendorLogo ? (
                                    <img
                                        src={vendor.vendorLogo}
                                        alt="Vendor Logo"
                                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                    />
                                ) : (
                                    "No Logo"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default VendorTable;
