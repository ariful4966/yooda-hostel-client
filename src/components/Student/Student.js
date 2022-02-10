import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, Table } from "react-bootstrap";

const Student = () => {
  const [stdData, setStdData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo]=useState({
    totalPages: 1,
    nextPage: null,
    prevPage: null
  })
  useEffect(() => {
    fetch("http://localhost:4000/student?page=" + page)
      .then((response) => response.json())
      .then((json) => {
        const { docs, totalPages, page, prevPage, nextPage } = json.data;
        setStdData(docs);
        setPageInfo({totalPages, nextPage, prevPage})

        setPage(page);
      });
  }, [page]);
  const tableHeader = [
    "Full Name",
    "Roll Number",
    "Age",
    "Class",
    "Hall",
    "Status",
  ];

  //Pagination

  const prevPage = () => {
   setPage(page-1)
  };
  const nextPage = () => {
   setPage(page+1)
  };

  return (
    <div >
      <div className="std_header d-flex justify-content-between">
      <h1>Here is students</h1>
      <div className="search_area">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      </div>
      </div>
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
                  <td>{data.roll}</td>
                  <td>{data.age}</td>
                  <td>{data.class.toUpperCase()}</td>
                  <td>{data.hall.toUpperCase()}</td>
                  <td>
                    <Form.Select aria-label="Default select example">
                      {data.status === "active" ? (
                        <>
                          <option selected={true} value="active">
                            Active
                          </option>
                          <option value="inactive">Inactive</option>
                        </>
                      ) : (
                        <>
                          <option value="active">Active</option>
                          <option selected={true} value="inactive">
                            Inactive
                          </option>
                        </>
                      )}
                    </Form.Select>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        {page && (
          
         <>
          <button className="btn btn-info" disabled={pageInfo.prevPage === null && true} onClick={prevPage}>Prev</button>
          <button className="btn btn-success">{page}</button>
          <button className="btn btn-info" disabled={pageInfo.nextPage === null && true} onClick={nextPage}>Next</button>
         </>
        )}
      </div>
    </div>
  );
};

export default Student;
