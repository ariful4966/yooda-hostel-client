import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Distribution = () => {

    const tableHead = ["Student Id", "Data", "Food Item List", "Shift", "Status"]

    const [distribution, setDistribution] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:4000/distribution")
      .then((response) => response.json())
      .then((json) => setDistribution(json.data));
  }, []);
  return (
    <div>
      <h1>This is distributions</h1>

      <div className="distibution_table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Select Item</th>
              {
                  tableHead.map((th, idx)=><th key={idx}>{th}</th>)
              }
            </tr>
          </thead>
          <tbody>
           {
               distribution && distribution.length> 0 && distribution.map((dts)=>
               
               <tr key={dts._id}>
                   <td><input type="checkbox" value={dts._id}/></td>
                   <td>{dts.studentId}</td>
                   <td>{new Date(dts.date).toDateString()}</td>
                   <td>{(dts.foodItemList && dts.foodItemList.map(fdl=><><li key={fdl}>{fdl}</li></>))}</td>
                   <td>{dts.shift ? "Shifted": "Unshift"}</td>
                   <td>{(dts.status)}</td>
               </tr>)
           }
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Distribution;
