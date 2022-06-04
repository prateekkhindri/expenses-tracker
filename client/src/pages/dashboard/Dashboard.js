import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { postTransaction } from "../../helpers/axiosHelper";
import { CustomTable } from "../../components/custom-table/CustomTable";

// const auth = false;
export const Dashboard = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [resp, setResp] = useState({});

  // const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = JSON.parse(window.sessionStorage.getItem("user"));
    // setUser(storedUser);

    !storedUser?._id && navigate("/");
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const result = await postTransaction(form);
    // console.log(result);
    setResp(result);
  };

  return (
    <Layout>
      <Form className="mt-5" onSubmit={handleOnSubmit}>
        {resp?.message && (
          <Alert variant={resp?.status === "success" ? "success" : "danger"}>
            {resp?.message}
          </Alert>
        )}
        <Row className="g-2">
          <Col md={2}>
            <Form.Select name="type" onChange={handleOnChange}>
              <option value="">Choose...</option>
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </Form.Select>
          </Col>
          <Col md={6}>
            <Form.Control
              onChange={handleOnChange}
              name="title"
              placeholder="Transaction title"
              required
            />
          </Col>
          <Col md={2}>
            <Form.Control
              onChange={handleOnChange}
              name="amount"
              placeholder="50"
              type="number"
              required
            />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit" className="form-control">
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      <hr />

      <Row>
        <CustomTable />
      </Row>
    </Layout>
  );
};
