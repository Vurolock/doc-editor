import React, { Component } from 'react';
import List from './List';
import Editor from './Editor';

class App extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			key: 0,
			title: 'Click a document to start',  
			content: '',
			docs: [
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
		  	]
    	}
  	}

  	render() {
    	return (
      	<main>
        	<List 
          		listDocs={this.state.docs}
				clickHandler={this._setListDocument}
				addNewClickHandler={this._addNewDoc}
        	/>
        	<Editor
				docKey={this.state.key}
				displayContent={this.state.content}
				displayTitle={this.state.title}
				changeHandler={this._setEditorDocument}
				clickHandler={this._editDocument}
        	/>
      	</main>
    	);
	}
	
	_setListDocument = (docContent, docTitle, docIndex) => {
		this.setState({
			key: docIndex,
			content: docContent,
			title: docTitle
		});
		console.log(docIndex);
	}

	_setEditorDocument = (docTitle, docContent) => {
		this.setState({
			title: docTitle,
			content: docContent
		});
	}

	_editDocument = (newContent, title) => {
		let newDocuments = this.state.docs.map(doc => {
			if (doc.title === title) {
				doc.content = newContent
			}
			return doc;

		});
		console.log(newDocuments);
		this.setState({
			docs: newDocuments
		});
	}

	_addNewDoc = (newTitle) => {
		this.setState({
			docs: this.state.docs.concat({
				title: newTitle,
				content: ''
			})
		});
	}
	
}


export default App;
