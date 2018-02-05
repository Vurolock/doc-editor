import React, { Component } from 'react';
import List from './List';
import Editor from './Editor';

let documents = [
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
			title: 'Click a document to start',  
			content: '',
			docs: documents
    	}
  	}

  	render() {
    	return (
      	<main>
        	<List 
          		listDocs={documents}
				  clickHandler={this._setContentTitle}
				  addNewClickHandler={this._addNewDoc}
        	/>
        	<Editor
				displayContent={this.state.content}
				displayTitle={this.state.title}
				changeHandler={this._setContent}
				clickHandler={this._setContent}
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

	_addNewDoc = (newTitle) => {
		this.setState({
			docs: documents.push({
				title: newTitle,
				content: ''
			})
		});
		console.log(documents);
	}
	
}


export default App;
