import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

const auth = false;
export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !auth && navigate("/");
  });
  return <Layout>Dashboard Page</Layout>;
};
