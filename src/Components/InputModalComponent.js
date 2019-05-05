import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

class InputModalComponent extends React.Component {

  constructor(props) {
    super(props);

   
  }
  render() {
    return (
      <div className="InputModalComponent">

        <div className="DialogContainer">
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Item text</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Control type="text" maxlength="50" placeholder="Cook dinner" />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save</Button>
            </Modal.Footer>
          </Modal.Dialog>;
        </div>

      </div>
    );
  }
}

export default InputModalComponent;
