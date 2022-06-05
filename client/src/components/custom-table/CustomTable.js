import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Table } from "react-bootstrap";
import { deleteTransactions, getTransactions } from "../../helpers/axiosHelper";

export const CustomTable = () => {
  const [transactions, setTransactions] = useState([]);

  const [ids, setIds] = useState([]);

  const [resp, setResp] = useState([]);

  useEffect(() => {
    //   Call the function to call the API to fetch all the transactions
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    // Call axios to fetch all the transactions
    const data = await getTransactions();
    if (data.status === "success") {
      setTransactions(data.result);
    }
  };

  console.log(transactions);

  const handleOnCheck = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      // Add id to the array
      setIds([...ids, value]);
    } else {
      // Remove the id from the array
      const filteredIds = ids.filter((id) => {
        return id !== value;
      });
      setIds(filteredIds);
    }
  };

  const handleOnDelete = async () => {
    // Call API to delete the selected transactions
    // console.log(ids);

    if (
      !window.confirm(
        `Are you sure you want to delete ${ids.length} transactions?`
      )
    ) {
      return;
    }

    // Call API to delete the selected transactions
    const result = await deleteTransactions(ids);
    result.status === "success" && fetchTransactions() && setIds([]);
    setResp(result);

    // If status is success then refetch the transactions
  };

  const balance = transactions.reduce((acc, transaction) => {
    return transaction.type === "income"
      ? acc + transaction.amount
      : acc - transaction.amount;
  }, 0);
  // console.log(balance);

  return (
    <div className="mt-5">
      {transactions.length} transactions found!
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Expenses</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((trans, i) => (
            <tr key={trans._id}>
              <td>
                <Form.Check value={trans._id} onChange={handleOnCheck} />
              </td>
              <td>{new Date(trans.createdAt).toLocaleDateString()}</td>
              <td>{trans.title}</td>

              {trans.type === "income" ? (
                <>
                  <td></td>

                  <td>
                    <span className="text-success">-${trans.amount}</span>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <span className="text-danger">-${trans.amount}</span>
                  </td>
                  <td></td>
                </>
              )}
            </tr>
          ))}

          <tr>
            <td colSpan={5} className="text-end fw-bold">
              {" "}
              Balance $ {balance}
            </td>
          </tr>
        </tbody>
      </Table>
      {resp.message && (
        <Alert variant={resp.status === "success" ? "success" : "danger"}>
          {resp.message}
        </Alert>
      )}
      {ids.length > 0 && (
        <Button variant="danger" onClick={handleOnDelete} className="mb-2">
          Delete {ids.length} selected transactions
        </Button>
      )}
    </div>
  );
};
