import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Form as ReactstrapForm,
    Button,
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Card,
    CardHeader,
    CardFooter,
} from "reactstrap";

const VendorForm = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        vendorName: "",
        vendorDescription: "",
        businessType: "",
        vendorAddress: "",
        vendorCity: "",
        vendorContact: "",
        vendorLogo: null,
        vendorWebsite: "",
        taxInfo: "",
        departments: [""],
        emails: [""],
        phoneNumbers: [""],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setFormData({ ...formData, vendorLogo: reader.result });
            };
        }
    };

    const handleArrayChange = (index, type, value) => {
        const updatedArray = [...formData[type]];
        updatedArray[index] = value;
        setFormData({ ...formData, [type]: updatedArray });
    };

    const addRow = () => {
        if (formData.departments.length < 3) {
            setFormData({
                ...formData,
                departments: [...formData.departments, ""],
                emails: [...formData.emails, ""],
                phoneNumbers: [...formData.phoneNumbers, ""],
            });
        }
    };

    const removeRow = (index) => {
        if (formData.departments.length > 1) {
            setFormData({
                ...formData,
                departments: formData.departments.filter((_, i) => i !== index),
                emails: formData.emails.filter((_, i) => i !== index),
                phoneNumbers: formData.phoneNumbers.filter((_, i) => i !== index),
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.vendorName !== "" &&
            formData.vendorDescription !== "" &&
            formData.vendorCity !== "" &&
            formData.vendorContact !== "" &&
            formData.vendorLogo !== null
        ) {
            let storedData = JSON.parse(localStorage.getItem("vendors")) || [];
            storedData.push(formData);
            localStorage.setItem("vendors", JSON.stringify(storedData));
            alert("Vendor data saved successfully!");
            navigate("/VendorTable");
            setFormData({
                vendorName: "",
                vendorDescription: "",
                businessType: "",
                vendorAddress: "",
                vendorCity: "",
                vendorContact: "",
                vendorLogo: null,
                vendorWebsite: "",
                taxInfo: "",
                departments: [""],
                emails: [""],
                phoneNumbers: [""],
            });
        } else {
            alert("Please enter all vendor data!");
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <Card
                className="card shadow mb-5"
                style={{ width: "auto", height: "auto" }}
            >
                <CardHeader className="mb-4 text-center text-success">
                    <h3>Vendor Details Form</h3>
                </CardHeader>
                <Row className="justify-content-lg-around m-1">
                    <Col md={4}>
                        <FormGroup className="mb-3">
                            <Label>Vendor Name</Label>
                            <Input
                                type="text"
                                name="vendorName"
                                value={formData.vendorName}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="mb-3">
                            <Label>Vendor Description</Label>
                            <Input
                                type="text"
                                name="vendorDescription"
                                value={formData.vendorDescription}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="mb-3">
                            <Label>Business Type</Label>
                            <Input
                                name="businessType"
                                type="select"
                                value={formData.businessType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Wholesaler">Wholesaler</option>
                                <option value="Retailer">Retailer</option>
                                <option value="Distributor">Distributor</option>
                                <option value="Mfg">Mfg</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="mb-3">
                            <Label>Vendor Website</Label>
                            <Input
                                type="text"
                                name="vendorWebsite"
                                value={formData.vendorWebsite}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="mb-3">
                            <Label>Tax Info</Label>
                            <Input
                                type="text"
                                name="taxInfo"
                                value={formData.taxInfo}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="mb-3">
                            <Label>Vendor Address</Label>
                            <Input
                                type="text"
                                name="vendorAddress"
                                value={formData.vendorAddress}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="mb-3">
                            <Label>Vendor City</Label>
                            <Input
                                type="text"
                                name="vendorCity"
                                value={formData.vendorCity}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="mb-3">
                            <Label>Vendor Contact Info</Label>
                            <Input
                                type="text"
                                name="vendorContact"
                                value={formData.vendorContact}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="mb-3">
                            <Label>Vendor Logo</Label>
                            <Input type="file" onChange={handleFileChange} />
                        </FormGroup>
                    </Col>

                    {formData.departments.map((_, index) => (
                        <React.Fragment key={index}>
                            <Col md={3}>
                                <FormGroup className="mb-3">
                                    <Label>Department {index + 1}</Label>
                                    <Input
                                        type="text"
                                        value={formData.departments[index]}
                                        onChange={(e) =>
                                            handleArrayChange(index, "departments", e.target.value)
                                        }
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup className="mb-3">
                                    <Label>Email {index + 1}</Label>
                                    <Input
                                        type="email"
                                        value={formData.emails[index]}
                                        onChange={(e) =>
                                            handleArrayChange(index, "emails", e.target.value)
                                        }
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup className="mb-3">
                                    <Label>Phone {index + 1}</Label>
                                    <Input
                                        type="text"
                                        value={formData.phoneNumbers[index]}
                                        onChange={(e) =>
                                            handleArrayChange(index, "phoneNumbers", e.target.value)
                                        }
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3} className="mt-4">
                                <Button
                                    color="danger"
                                    onClick={() => removeRow(index)}
                                    disabled={formData.departments.length === 1}
                                >
                                    -
                                </Button>{" "}
                                {index === formData.departments.length - 1 &&
                                    formData.departments.length < 3 && (
                                        <Button color="primary" onClick={addRow}>
                                            +
                                        </Button>
                                    )}
                            </Col>
                        </React.Fragment>
                    ))}
                    <CardFooter className="text-center">
                        <Col>
                            <Button color="primary" type="submit" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </CardFooter>
                </Row>
            </Card>
        </div>
    );
};

export default VendorForm;
