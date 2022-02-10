import React from 'react';
import { Button, Form } from 'react-bootstrap';

const StudentModal = ({setModalShow}) => {
    return (
        <div>
             <Form>
          <Form.Group className="mb-3" controlId="forName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Student Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="forRoll">
            <Form.Label>Roll Number</Form.Label>
            <Form.Control type="text" placeholder="Enter student roll number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" max={20} min={10} placeholder="Enter Age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="forClass">
            <Form.Label>Class</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="six">Six</option>
              <option value="seven">Seven</option>
              <option value="eight">Eight</option>
              <option value="nine">Nine</option>
              <option value="ten">Ten</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Hall Name</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="rokeya">Rokeya</option>
              <option value="nazrul">Nazrul</option>
              <option value="robindro">Robindro</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Status</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="active">Active</option>
              <option value="inactive">Incative</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
    );
};

export default StudentModal;