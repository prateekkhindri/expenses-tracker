import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import { loginUser, postUser } from "../../helpers/axiosHelper";
import { Link, navigation, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigation = useNavigate();
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
    // alert("Haven't submitted this yet");

    // console.log(form);           // Console: the user information submitted

    const res = await loginUser(form);
    console.log(res);
    if (res.status === "success") {
      navigation("/dashboard");
      return;
    }
    setResponse(res);
  };

  //   console.log(response);

  const inputField = [
    {
      name: "email",
      label: "Email address",
      type: "email",
      required: true,
    },

    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
    },
  ];
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

          {inputField.map(({ label, ...rest }, i) => {
            return (
              <Form.Group
                key={i}
                className="mb-3"
                controlId="formGroupPassword"
              >
                <Form.Label>{label}</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  placeholder={label}
                  {...rest}
                />
              </Form.Group>
            );
          })}

          {/* <Form.Group className="mb-3" controlId="formGroupPassword">
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
          </Form.Group> */}

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
