import React, { useContext } from "react";
import { Nav, Tab } from "react-bootstrap";
import { DataProvider } from "../../App";

const Sidebar = ({setTab}) => {
    const data = useContext(DataProvider)
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link onClick={()=>setTab('food')}>Food Items</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>setTab('student')}>Students</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>setTab('distribution')}>Distribution</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>setTab('distribution')}>Add Student</Nav.Link>
        </Nav.Item>
      </Nav>
    </Tab.Container>
  );
};

export default Sidebar;
