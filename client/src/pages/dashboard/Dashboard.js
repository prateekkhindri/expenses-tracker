import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

// const auth = false;
export const Dashboard = () => {
  const navigate = useNavigate();

  // const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = JSON.parse(window.sessionStorage.getItem("user"));
    // setUser(storedUser);

    !storedUser?._id && navigate("/");
  }, []);
  return <Layout>Dashboard Page</Layout>;
};
