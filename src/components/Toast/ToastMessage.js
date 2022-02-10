import React, { useState } from "react";
import { Toast } from "react-bootstrap";

export function ToastMessage(props) {
    const [showA, setShowA] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    console.log(props.children);
  
    return (
      
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Body>{props.children}</Toast.Body>
          </Toast>
        
    );
  }
  