import { Modal } from "react-bootstrap";
import FoodModal from "./FoodModal";
import StudentModal from "./StudentModal";

export function OpenModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {
              props.form === 'student' && "Add a new Student Information"
          }
          {
              props.form === 'food' && "Add New Food Item"
          }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {
              props.form === 'student' && <StudentModal setModalShow={props.setModalShow}/>
          }
          {
              props.form === 'food' && <FoodModal setModalShow={props.setModalShow}/>
          }
      </Modal.Body>
    </Modal>
  );
}
