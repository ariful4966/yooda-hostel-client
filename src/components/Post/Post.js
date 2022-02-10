import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { OpenModal } from "../Modal/Modal";

const Post = () => {
  const [modalShow, setModalShow] = useState(false);
  const [form, setForm] = useState("");
  return (
    <div>
      <h2>Post A New Information</h2>

      <div className="post_info_area d-flex justify-content-evenly">
        <Card body style={{ width: "40%" }}>
          <Button
            style={{ width: "100%" }}
            variant="primary"
            onClick={() => {
              setModalShow(true);
              setForm("student");
            }}
          >
            Add New Student
          </Button>
        </Card>
        <Card body style={{ width: "40%" }}>
          <Button
            style={{ width: "100%" }}
            variant="primary"
            onClick={() => {
              setForm("food");
              setModalShow(true);
            }}
          >
            Add New Food Item
          </Button>
        </Card>

        <OpenModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          form={form}
          setModalShow={setModalShow}
        />
      </div>
    </div>
  );
};

export default Post;
