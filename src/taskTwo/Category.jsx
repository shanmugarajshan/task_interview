import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";

const categoryData = {
  Fasteners: {
    Nuts: [
      "Knurled Check Nuts",
      "Acorn Nuts",
      "T-Slot Nuts",
      "Coupling Nuts",
      "Flange Nuts",
      "Hex Nuts",
    ],
    Screws: {
      "Screw Jacks": [
        "Adjustable Locating Buttons",
        "Manual Work Supports",
        "Through-Hole Leveling Jacks",
        "Torque Screw Jacks",
      ],
    },
  },
};

const CategoryForm = () => {
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [category4, setCategory4] = useState("");

  return (
    <Container className="mt-4">
      <Form>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="category1">Category 1</Label>
              <Input
                type="select"
                id="category1"
                value={category1}
                onChange={(e) => {
                  setCategory1(e.target.value);
                  setCategory2("");
                  setCategory3("");
                  setCategory4("");
                }}
              >
                <option value="">Select</option>
                {Object.keys(categoryData).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="category2">Category 2</Label>
              <Input
                type="select"
                id="category2"
                value={category2}
                onChange={(e) => {
                  setCategory2(e.target.value);
                  setCategory3("");
                  setCategory4("");
                }}
                disabled={!category1}
              >
                <option value="">Select</option>
                {category1 &&
                  Object.keys(categoryData[category1] || {}).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="category3">Category 3</Label>
              <Input
                type="select"
                id="category3"
                value={category3}
                onChange={(e) => {
                  setCategory3(e.target.value);
                  setCategory4("");
                }}
                disabled={!category2}
              >
                <option value="">Select</option>
                {category2 &&
                  Object.keys(categoryData[category1]?.[category2] || {}).map(
                    (cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    )
                  )}
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="category4">Category 4</Label>
              <Input
                type="select"
                id="category4"
                value={category4}
                onChange={(e) => setCategory4(e.target.value)}
                disabled={!category3}
              >
                <option value="">Select</option>
                {category3 &&
                  (Array.isArray(categoryData[category1]?.[category2]?.[category3])
                    ? categoryData[category1][category2][category3].map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))
                    : [])}
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CategoryForm;