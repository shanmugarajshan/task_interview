import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Container, Row, Col, Button, Table } from "reactstrap";

const getInitialState = () => ({
  categoryOne: "",
  categoryTwo: "",
  categoryThree: "",
  categoryFour: ""
});

const CategoryForm = () => {
  const [category, setCategory] = useState(getInitialState());
  const [tableData, setTableData] = useState([]);

  const updateState = (field, value) => {
    setCategory((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, category]);
    setCategory(getInitialState());
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={2}>
            <FormGroup>
              <Label for="categoryOne">Category 1</Label>
              <Input
                type="text"
                id="categoryOne"
                value={category.categoryOne}
                onChange={(e) => updateState("categoryOne", e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="categoryTwo">Category 2</Label>
              <Input
                type="text"
                id="categoryTwo"
                value={category.categoryTwo}
                onChange={(e) => updateState("categoryTwo", e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="categoryThree">Category 3</Label>
              <Input
                type="text"
                id="categoryThree"
                value={category.categoryThree}
                onChange={(e) => updateState("categoryThree", e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="categoryFour">Category 4</Label>
              <Input
                type="text"
                id="categoryFour"
                value={category.categoryFour}
                onChange={(e) => updateState("categoryFour", e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
        <Button color="primary" type="submit" className="mt-4">Add Category</Button>
        </Col>
        </Row>
      </Form>

      {tableData.length > 0 && (
        <Table striped bordered className="mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Category 1</th>
              <th>Category 2</th>
              <th>Category 3</th>
              <th>Category 4</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.categoryOne}</td>
                <td>{item.categoryTwo}</td>
                <td>{item.categoryThree}</td>
                <td>{item.categoryFour}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CategoryForm;
