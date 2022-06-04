import React from "react";
import { Table } from "react-bootstrap";

export const CustomTable = () => {
  return (
    <div className="mt-5">
      100 transactions found!
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
          <tr>
            <td>1</td>
            <td>2022-5-6</td>
            <td>Shopping Bags</td>
            <td>- $500</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>2022-5-4</td>
            <td>Freelancing Software</td>
            <td></td>
            <td>
              <span className="text-success rounded p-1 fw-bold">$20000</span>
            </td>
          </tr>
          {/* <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};
