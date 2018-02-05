import React, { Component } from 'react';
import List from './List';
import Editor from './Editor';

const documents = [
  	{
    	title: 'First Doc',
    	content: 'One 1 one 1 one 1 one'
  	},
  	{
    	title: 'Second Doc',
    	content: 'Two 2 two 2 two 2 two'
  	},
  	{
    	title: 'Third Doc',
    	content: 'Three 3 three 3 three 3 three'
  	}
];

class App extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			content: '',
			title: 'Click a document to start'  
    	}
  	}

  	render() {
    	return (
      	<main>
        	<List 
          		listDocs={documents}
          		clickHandler={this._setContentTitle}
        	/>
        	<Editor
				displayContent={this.state.content}
				displayTitle={this.state.title}
				changeHandler={this._setContent}
        	/>
      	</main>
    	);
	}
	
	_setContentTitle = (docContent, docTitle) => {
		this.setState({
			content: docContent,
			title: docTitle
		});
	}

	_setContent = (docContent) => {
		this.setState({
			content: docContent
		});
	}
	
}


export default App;
