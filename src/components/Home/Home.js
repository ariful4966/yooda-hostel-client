import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Distribution from "../Distribution/Distribution";
import FoodItems from "../FoodItems/FoodItems";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Student from "../Student/Student";

const Home = () => {

    const [tab, setTab]=useState('food')
  return (
    <>
      <Header tab={tab} />
      <Container fluid className="mt-5">
          <Row>
              <Col md={3}>
                  <Sidebar setTab={setTab}/>
              </Col>
              <Col>
                {
                    tab && tab==='food' && <FoodItems/>
                }
                {
                    tab && tab==='student' && <Student/>
                }
                {
                    tab && tab==='distribution' && <Distribution/>
                }
              </Col>
          </Row>

      </Container>
    </>
  );
};

export default Home;
