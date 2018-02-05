import React, { Component } from 'react';
import List from './List';

const documents = [
  {
    title: 'first doc',
    content: 'one 1 one 1 one 1 one'
  },
  {
    title: 'second doc',
    content: 'two 2 two 2 two 2 two'
  },
  {
    title: 'third doc',
    content: 'three 3 three 3 three 3 three'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <main>
        <List 
          listDocs={documents}
        />
      </main>
    );
  }
}

export default App;
