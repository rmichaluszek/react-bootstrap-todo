import React from 'react';

import { Card, Button, ButtonGroup } from 'react-bootstrap';

import Item from './Item';

class ToDoComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      items: [],
    };

    this.itemsContainer = React.createRef();
  }
  render() {
    return (
      <div className="ToDoComponent">

        <Card className="Panel" bg="primary">
          <Card.Body block>
            <Card.Title>{0 +"/" +this.state.items.length} Done</Card.Title>
            
            <div ref={this.itemsContainer} className="ItemsContainer">
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
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
}

export default ToDoComponent;
