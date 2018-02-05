import React, { Component } from 'react';
import List from './List';
import Editor from './Editor';

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
          		clickHandler={this._setContent}
        	/>
        	<Editor
				displayContent={this.state.content}
        	/>
      	</main>
    	);
	}
	
	_setContent = (docContent) => {
		this.setState({
			content: docContent
		});
	}
	
}


export default App;
