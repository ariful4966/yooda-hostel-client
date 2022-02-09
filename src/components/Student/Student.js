import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";

const Student = () => {
  const [stdData, setStdData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/student")
      .then((response) => response.json())
      .then((json) => setStdData(json.data));
  }, []);

  console.log(stdData);

  const tableHeader = [
    "Full Name",
    "Roll Number",
    "Age",
    "Class",
    "Hall",
    "Status",
  ];
  return (
    <div>
      <h1>Here is students</h1>
      <div className="std_info">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Select Item</th>
              {tableHeader.map((th, idx) => (
                <th key={idx}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stdData &&
              stdData.length > 0 &&
              stdData.map((data) => (
                <tr key={data._id}>
                  <td>
                    <input type="checkbox" value={data._id} />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.rollNumber}</td>
                  <td>{data.age}</td>
                  <td>{data.class.toUpperCase()}</td>
                  <td>{data.hall.toUpperCase()}</td>
                  <td>
                    <Form.Select
                      aria-label="Default select example"
                      seleced={data.status === 'active' ? 'active': 'inActive'}
                    >
                      {data.status === "active" && 
                        <>
                          <option value="active">Active</option>
                          <option value="inActive">Inactive</option>
                          </>
                     }
                    </Form.Select>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Student;
