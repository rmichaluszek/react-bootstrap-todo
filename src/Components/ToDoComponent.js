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

    this.addRandom = this.addRandom.bind(this);
    this.onItemRemovePress = this.onItemRemovePress.bind(this);
    this.onItemEditPress = this.onItemEditPress.bind(this);
    this.onItemCheckboxPress = this.onItemCheckboxPress.bind(this);
    this.clearAll = this.clearAll.bind(this);

  }
  getDoneItems() {
    var result = 0;
    for(var i = 0; i < this.state.items.length; i++) {
      if(this.state.items[i].done) result++;
    }
    return result;
  }

  onItemCheckboxPress = (index) => {
    var arrayAfterChange = this.state.items;
    arrayAfterChange[index].done = !arrayAfterChange[index].done;
    this.setState({items:arrayAfterChange})
  }
  onItemRemovePress = (index) => {
    var arrayAfterChange = this.state.items;
    arrayAfterChange.splice(index,1);
    this.setState({items:arrayAfterChange})
  }
  onItemEditPress = (index) => {
   //
  }

  clearAll() {
    this.setState({items:[]});
  }
  addRandom() {
    this.setState({
      items: [
        ...this.state.items,
        {
          text: "Lorem ipsum dolor sit amet",
          done: false
        }
      ]
    })
  }

  render() {
    return (
      <div className="ToDoComponent">

        <Card className="Panel" bg="primary">
          <Card.Body>
            <Card.Title>{this.getDoneItems() +"/" +this.state.items.length} Done</Card.Title>
            
            <div ref={this.itemsContainer} className="ItemsContainer">
              {
                this.state.items.map((item,index) => 
                  <Item key={index} onEditPress={this.onItemEditPress} onRemovePress={this.onItemRemovePress} onCheckboxPress={this.onItemCheckboxPress} index={index} item={item}></Item>               
                )
              }
            </div>

            <div className="bottom d-flex flex-column">
              <ButtonGroup>
                <Button variant="success">Add Item</Button>
                <Button onClick={this.addRandom} variant="info">Add random</Button>
                <Button onClick={this.clearAll} variant="danger">Clear all</Button>
              </ButtonGroup>
            </div>

          </Card.Body>
        </Card>;
          
      </div>
    );
  }
}

export default ToDoComponent;
