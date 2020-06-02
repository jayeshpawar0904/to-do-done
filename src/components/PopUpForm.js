import React, {  useState } from 'react'
import {Button,Row,Col,Forn ,MyVerticallyCenteredModal} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import CreateExercise from "./create-exercise.component";
function Appl(props) {
    
  return(
    <Modal
     className="form-group"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ur Notes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <CreateExercise />
      </Modal.Body>
      
      <Modal.Footer>
      
     
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default Appl;
