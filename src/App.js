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
				changeHandler={this._setTitleContent}
				clickHandler={this._editContent}
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

	_setTitleContent = (docTitle, docContent) => {
		this.setState({
			title: docTitle,
			content: docContent
		});
	}

	_editContent = (newContent, title) => {
		let newDocuments = documents.map(doc => {
			if (doc.title === title) {
				doc.content = newContent
			}
		})
		this.setState({
			docs: newDocuments
		})
	}

	_addNewDoc = (newTitle) => {
		this.setState({
			docs: documents.push({
				title: newTitle,
				content: ''
			})
		});
	}
	
}


export default App;
