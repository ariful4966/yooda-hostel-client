import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const StudentModal = ({ setModalShow }) => {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    age: "",
    class: "",
    hall:"",
    status:""
  });

  const handleBlurStudent = (e)=>{
      const newStudent = {...student};
      newStudent[e.target.name]=e.target.value;
      setStudent(newStudent)
  }
  const handleStudentSubmit = (event)=>{
      event.preventDefault();

      fetch('http://localhost:4000/student',{
          method: 'POST',
          body:JSON.stringify(student),
          headers:{
              "Content-Type":"application/json; charset=UTF-8",
              token: sessionStorage.getItem('token')
          }
      })
      .then(res=>res.json())
      .then(data=>{
          setModalShow(false)
      })
      .catch(err=>{
          console.log(err);
      })
  }
  console.log(student);
  return (
    <div>
      <Form onSubmit={handleStudentSubmit}>
        <Form.Group className="mb-3" controlId="forName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Student Name" name="name" onBlur={handleBlurStudent}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="forRoll">
          <Form.Label>Roll Number</Form.Label>
          <Form.Control type="number" placeholder="Enter student roll number" name="roll" onBlur={handleBlurStudent} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            max={20}
            min={10}
            placeholder="Enter Age"
            name="age" onBlur={handleBlurStudent}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="forClass">
          <Form.Label>Class</Form.Label>
          <Form.Select aria-label="Default select example" name="class" onBlur={handleBlurStudent}>
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
          <Form.Select aria-label="Default select example" name="hall" onBlur={handleBlurStudent}>
            <option>Open this select menu</option>
            <option value="rokeya">Rokeya</option>
            <option value="nazrul">Nazrul</option>
            <option value="robindro">Robindro</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Status</Form.Label>
          <Form.Select aria-label="Default select example" name="status" onBlur={handleBlurStudent}>
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
