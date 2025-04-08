import React, { useEffect, useState } from 'react';

const VendorDetails = () => {
    const [vendorData, setVendorData] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem('vendorFormData');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setVendorData(parsed);
        }
    }, []);

    if (!vendorData) {
        return <p className="text-center mt-4">No vendor data found.</p>;
    }

    const { formData, logoPreview } = vendorData;

    return (
        <div className="container mt-4 border p-4 rounded shadow-sm">
            <h3 className="text-center mb-4">Submitted Vendor Details</h3>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Vendor Name:</strong> {formData.vendorName}</div>
                <div className="col-md-4"><strong>Business Type:</strong> {formData.businessType}</div>
                <div className="col-md-4"><strong>City:</strong> {formData.vendorCity}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4"><strong>Address:</strong> {formData.vendorAddress}</div>
                <div className="col-md-4"><strong>Contact:</strong> {formData.vendorContact}</div>
                <div className="col-md-4"><strong>Website:</strong> {formData.vendorWebsite}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6"><strong>Description:</strong> {formData.vendorDescription}</div>
                <div className="col-md-6"><strong>Tax Info:</strong> {formData.taxInfo}</div>
            </div>

            {logoPreview && (
                <div className="mb-4">
                    <strong>Vendor Logo:</strong>
                    <div>
                        <img src={logoPreview} alt="Vendor Logo" className="img-thumbnail mt-2" style={{ maxHeight: '120px' }} />
                    </div>
                </div>
            )}

            <h5 className="mt-4">Departments</h5>
            {formData.departments.map((dept, idx) => (
                <div className="border p-3 mb-2 rounded" key={idx}>
                    <p><strong>Name:</strong> {dept.name}</p>
                    <p><strong>Email:</strong> {dept.email}</p>
                    <p><strong>Phone:</strong> {dept.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default VendorDetails;
