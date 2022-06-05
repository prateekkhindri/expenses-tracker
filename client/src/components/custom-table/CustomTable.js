import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { getTransactions } from "../../helpers/axiosHelper";

export const CustomTable = () => {
  const [transactions, setTransactions] = useState([]);

  const [ids, setIds] = useState([]);

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
    console.log(ids);
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
      {ids.length > 0 && (
        <Button variant="danger" onClick={handleOnDelete}>
          Delete {ids.length} selected transactions
        </Button>
      )}
    </div>
  );
};
