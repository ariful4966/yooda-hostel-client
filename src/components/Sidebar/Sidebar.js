import React, { useContext } from "react";
import { Nav, Tab } from "react-bootstrap";
import { DataProvider } from "../../App";

const Sidebar = ({setTab, setModalShow}) => {
    const data = useContext(DataProvider)
    
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" onClick={()=>setTab('food')}>Food Items</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" onClick={()=>setTab('student')}>Students</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third" onClick={()=>setTab('distribution')}>Distribution</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="four" onClick={() => setTab('post')}>Post Page</Nav.Link>
        </Nav.Item>
      </Nav>
    </Tab.Container>
  );
};

export default Sidebar;
