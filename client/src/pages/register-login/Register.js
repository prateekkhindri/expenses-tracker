import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import { postUser } from "../../helpers/axiosHelper";
import { Link } from "react-router-dom";
import { registerAction } from "./regLogin.action";
import { useDispatch, useSelector } from "react-redux";

export const Register = () => {
  const dispatch = useDispatch();

  // 1. Create a state to grab the form value
  const [form, setForm] = useState({});

  const { response, isLoading } = useSelector((state) => state.regLogin);

  // 2. State to display error message to the user if registration fails
  // const [response, setResponse] = useState({
  //   status: "",
  //   message: "",
  // });

  // const [loading, setLoading] = useState(false);

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
    // const result = await postUser(form);
    // console.log(form, "Call api to send this data to the server");
    // console.log(result, "Call api to send this data to the server");
    // setResponse(result);

    dispatch(registerAction(form));
  };

  // console.log(response);
  return (
    <Layout>
      <div className="center">
        <Form onSubmit={handleOnSubmit}>
          <h3>Register new user</h3>
          <hr />

          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}

          {isLoading && <Spinner animation="border" variant="primary" />}
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
            {/* <Form.Label></Form.Label> */}
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form.Group>

          <div className="text-end">
            <p>
              Already have an account <Link to="/">Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </Layout>
  );
};
