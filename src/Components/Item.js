import React from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';

class Item extends React.Component {

  constructor(props) 
  {
    super(props);

    this.onCheckboxPress = this.onCheckboxPress.bind(this)
  }
  onCheckboxPress = () => {
    this.props.onCheckboxPress(this.props.index)
  }
  onRemovePress = () => {
    this.props.onRemovePress(this.props.index)
  }
  onEditPress = () => {
    this.props.onEditPress(this.props.index)
  }
  render() {
    return (
      <div className="Item d-flex flex-column">
        <ButtonGroup>
          <input onChange={this.onCheckboxPress} type="checkbox" checked={this.props.item.done} className="Done" />
          <Button onClick={this.onCheckboxPress} className={this.props.item.done? "TextLine":""} >{this.props.item.text}</Button>
          <Button onClick={this.onEditPress} className="Square Edit">Edit</Button>
          <Button onClick={this.onRemovePress} className="Square Remove">X</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Item;
