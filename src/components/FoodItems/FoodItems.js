import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const FoodItems = () => {
  const [food, setFood] = useState([]);
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({
    totalPages: 1,
    nextPage: null,
    prevPage: null,
  });

  useEffect(() => {
    fetch("http://localhost:4000/food?page=" + page)
      .then((response) => response.json())
      .then((json) => {
        const { docs, totalPages, page, prevPage, nextPage } = json.data;
        setPageInfo({ totalPages, nextPage, prevPage });
        setPage(page);
        setFood(docs);
      });
  }, [page]);

  const tableHead = ["SL. No", "Food Id", "Food Name", "Price"];

  // Paginate Function
  const prevPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>Food Data</h1>
      <div className="foodItem_list">
        <Table striped bordered hover>
          <thead>
            <tr>
              {tableHead.map((th, idx) => (
                
                  <th key={idx}>{th}</th>
                
              ))}
            </tr>
          </thead>
          <tbody>
            {food &&
              food.map((fd, idx) => (
                <tr key={fd._id}>
                  <td>{idx + 1}</td>
                  <td>{fd._id}</td>
                  <td>{fd.name}</td>
                  <td>${fd.price}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        {page && (
          <>
            <button
              className="btn btn-info"
              disabled={pageInfo.prevPage === null && true}
              onClick={prevPage}
            >
              Prev
            </button>
            <button className="btn btn-success">{page}</button>
            <button
              className="btn btn-info"
              disabled={pageInfo.nextPage === null && true}
              onClick={nextPage}
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FoodItems;
