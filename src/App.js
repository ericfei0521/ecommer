import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './homepage.component'

import Lifecycles from './lifecycles.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: ''
    };
  }

  render() {
    return (
      <div >
        <HomePage/>
      </div>
    );
  }
}

export default App;
