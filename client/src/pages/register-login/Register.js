import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Layout from "../../components/layout/Layout";

export const Register = () => {
  // 1. Create a state to grab the form value

  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  console.log(form);

  return (
    <Layout>
      <div className="center">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label></Form.Label>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Layout>
  );
};
