import React, { Component } from 'react';
import List from './List';
import Editor from './Editor';

class App extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			index: 0,
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
				docIndex={this.state.index}
				displayContent={this.state.content}
				displayTitle={this.state.title}
				changeHandler={this._setEditorDocument}
				clickHandler={this._editDocument}
				deleteHandler={this._deleteDocument}
        	/>
      	</main>
    	);
	}
	
	_setListDocument = (docIndex, docContent, docTitle) => {
		this.setState({
			index: docIndex,
			content: docContent,
			title: docTitle
		});
	}

	_setEditorDocument = (docIndex, docTitle, docContent) => {
		this.setState({
			index: docIndex,
			title: docTitle,
			content: docContent
		});
	}

	_editDocument = (docIndex, editedContent, editedTitle) => {
		let newDocuments = this.state.docs.map((doc, index) => {
			if (index === docIndex) {
				doc.content = editedContent;
				doc.title = editedTitle;
			}
			return doc;
		});
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

	_deleteDocument = (docIndex) => {
		let confirmation = window.confirm(`Really delete '${this.state.title}'?`);
		console.log(confirmation);
		if (confirmation) {
			let newDocuments = this.state.docs.filter( (doc, index) => index !== docIndex);
			// console.log(newDocuments);
			this.setState({
				title: 'Click a document to start',  
				content: '',
				docs: newDocuments
			});
			// console.log('docs:');
			// console.log(this.state.docs);	
		}
	}
	
}


export default App;
