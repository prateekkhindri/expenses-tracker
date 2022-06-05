import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getTransactions } from "../../helpers/axiosHelper";

export const CustomTable = () => {
  const [transactions, setTransactions] = useState([]);

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
              <td>{i + 1}</td>
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
            <td colSpan={5} className="text-end">
              {" "}
              Balance $444
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
