import React from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';

class Item extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Item d-flex flex-column">
        <ButtonGroup>
          <Button input-block-level>SIEMAAAAd sad asd asd asdsa asd asd asd asdasd sadas das dasd sadaas dsas dsad</Button>
          <Button className="Square Edit">Edit</Button>
          <Button className="Square Remove">X</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Item;
