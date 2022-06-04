import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import { postUser } from "../../helpers/axiosHelper";
import { Link } from "react-router-dom";

export const Login = () => {
  // 1. Create a state to grab the form value
  const [form, setForm] = useState({});

  // 2. State to display error message to the user if registration fails
  const [response, setResponse] = useState({
    status: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //   console.log(form);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };

  console.log(response);
  return (
    <Layout>
      <div className="center">
        <Form onSubmit={handleOnSubmit}>
          <h3>Welcome back!</h3>
          <hr />

          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
          {/* <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group> */}
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
            {/* <Form.Label></Form.Label> */}
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form.Group>

          <div className="text-end">
            <p>
              Don't have an account yet<Link to="/register">Sign Up</Link>
            </p>
          </div>
        </Form>
      </div>
    </Layout>
  );
};
