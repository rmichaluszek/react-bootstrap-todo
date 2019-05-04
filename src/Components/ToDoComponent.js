import React from 'react';

import { Card, Button, ButtonGroup } from 'react-bootstrap';

function ToDoComponent() {
  return (
    <div className="ToDoComponent">

      <Card className="Panel" bg="primary" style={{ width: '26rem' }}>
        <Card.Body block>
          <Card.Title>5 / 12 Done</Card.Title>
          
          <div className="ItemsContainer">
          
          </div>

          <div className="bottom d-flex flex-column">
            <ButtonGroup>
              <Button variant="success">Add random</Button>
              <Button variant="danger">Clear all</Button>
            </ButtonGroup>
          </div>

        </Card.Body>
      </Card>;
        
    </div>
  );
}

export default ToDoComponent;
