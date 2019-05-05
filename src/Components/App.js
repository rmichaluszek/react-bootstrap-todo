import React from 'react';

import NavbarComponent from './NavbarComponent';
import ToDoComponent from './ToDoComponent';
import InputModalComponent from './InputModalComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <ToDoComponent/>
      <InputModalComponent/>
    </div>
  );
}

export default App;
