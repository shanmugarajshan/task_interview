import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const VendorForm = () => {
    const [formData, setFormData] = useState({
        vendorName: '',
        vendorDescription: '',
        businessType: '',
        vendorAddress: '',
        vendorCity: '',
        vendorContact: '',
        vendorWebsite: '',
        taxInfo: '',
        departments: [{ name: '', email: '', phone: '' }],
    });
    const navigate = useNavigate();

    const [logo, setLogo] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem('vendorFormData');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setFormData(parsed.formData);
            setLogoPreview(parsed.logoPreview);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDepartmentChange = (index, e) => {
        const { name, value } = e.target;
        const updatedDepartments = [...formData.departments];
        updatedDepartments[index][name] = value;
        setFormData(prev => ({ ...prev, departments: updatedDepartments }));
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogo(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddDepartment = () => {
        setFormData(prev => ({
            ...prev,
            departments: [...prev.departments, { name: '', email: '', phone: '' }],
        }));
    };

    const handleRemoveDepartment = () => {
        if (formData.departments.length > 1) {
            setFormData(prev => ({
                ...prev,
                departments: prev.departments.slice(0, -1),
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSave = {
            formData,
            logoPreview,
        };
        localStorage.setItem('vendorFormData', JSON.stringify(dataToSave));
        alert('Form data saved to successfully!');
        navigate('/vendorDetails')
        setFormData({
            vendorName: '',
            vendorDescription: '',
            businessType: '',
            vendorAddress: '',
            vendorCity: '',
            vendorContact: '',
            vendorWebsite: '',
            taxInfo: '',
            departments: [{ name: '', email: '', phone: '' }],
        });
        setLogoPreview(null);
    };

    return (
        <div className="container my-4">
            <h3 className="text-center mb-4">Vendor Registration Form</h3>

            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                <h5 className="mb-3">Vendor Information</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label className="form-label">Vendor Name</label>
                        <input type="text" className="form-control" name="vendorName" value={formData.vendorName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Business Type</label>
                        <select className="form-select" name="businessType" value={formData.businessType} onChange={handleChange} required>
                            <option value="">Choose...</option>
                            <option>Wholesaler</option>
                            <option>Retailer</option>
                            <option>Distributor</option>
                            <option>Mfg</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Vendor Contact</label>
                        <input type="text" className="form-control" name="vendorContact" value={formData.vendorContact} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Vendor Address</label>
                        <input type="text" className="form-control" name="vendorAddress" value={formData.vendorAddress} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Vendor City</label>
                        <input type="text" className="form-control" name="vendorCity" value={formData.vendorCity} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Vendor Website</label>
                        <input type="url" className="form-control" name="vendorWebsite" value={formData.vendorWebsite} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Tax Info</label>
                        <input type="text" className="form-control" name="taxInfo" value={formData.taxInfo} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Vendor Description</label>
                        <textarea className="form-control" name="vendorDescription" value={formData.vendorDescription} onChange={handleChange} rows="3" />
                    </div>
                </div>

                <hr className="my-4" />

                <h5 className="mb-3">Upload Logo</h5>
                <div className="row g-3 align-items-center">
                    <div className="col-md-6">
                        <input type="file" className="form-control" accept="image/*" onChange={handleLogoUpload} />
                    </div>
                    <div className="col-md-6">
                        {logoPreview && (
                            <img src={logoPreview} alt="Preview" className="img-thumbnail" style={{ maxHeight: '100px' }} />
                        )}
                    </div>
                </div>

                <hr className="my-4" />

                <h5 className="mb-3">Departments</h5>
                {formData.departments.map((dept, index) => (
                    <div key={index} className="border p-3 mb-3 bg-white rounded">
                        <div className="row g-3 align-items-center">
                            <div className="col-md-4">
                                <label className="form-label">Department Name</label>
                                <input type="text" className="form-control" name="name" value={dept.name} onChange={(e) => handleDepartmentChange(index, e)} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={dept.email} onChange={(e) => handleDepartmentChange(index, e)} />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" value={dept.phone} onChange={(e) => handleDepartmentChange(index, e)} />
                            </div>
                            <div className="col-md-1 d-flex mt-4">
                                <button type="button" className="btn btn-success btn-sm me-2" onClick={handleAddDepartment}>+</button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={handleRemoveDepartment} disabled={formData.departments.length === 1}>−</button>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary px-5">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default VendorForm;
