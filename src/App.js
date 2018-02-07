import React, { Component } from 'react';
import List from './List';
import Editor from './Editor';
import reactNotes from './getReactNotes';

class App extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			index: null,
			title: '',  
			content: '',
			docs: reactNotes
    	}
  	}

  	render() {
    	return (
      	<main>
			<List
				docIndex={this.state.index}
          		listDocs={this.state.docs}
				clickHandler={this._setListDocument}
				newDocClickHandler={this._addNewDoc}
        	/>
        	<Editor
				docIndex={this.state.index}
				displayContent={this.state.content}
				displayTitle={this.state.title}
				changeHandler={this._setEditorDocument}
				clickHandler={this._editOrNewDocument}
				deleteHandler={this._deleteDocument}
        	/>
      	</main>
    	);
	}
	
	_setListDocument = (docIndex, docTitle, docContent) => {
		this.setState({
			index: docIndex,
			title: docTitle,
			content: docContent
		});
	}

	_setEditorDocument = (docIndex, docTitle, docContent) => {
		this.setState({
			index: docIndex,
			title: docTitle,
			content: docContent
		});
	}

	_editOrNewDocument = (docIndex, docTitle, docContent) => {
		const regex = /^\s*$/;
		if (docTitle.match(regex)) {
			alert('You must have a title!');
		} else {
			if (docIndex === null) {
				this.setState({
					index: (this.state.docs.length),
					docs: this.state.docs.concat({
						title: docTitle,
						content: docContent
					})
				}, () => localStorage.setItem('react-notes', JSON.stringify(this.state.docs)));
			} else {
				let newDocuments = this.state.docs.map((doc, index) => {
					if (index === docIndex) {
						doc.title = docTitle;
						doc.content = docContent;
					}
					return doc;
				});
				this.setState({
					docs: newDocuments
				}, () => localStorage.setItem('react-notes', JSON.stringify(this.state.docs)));
			}
			console.log(this.state.index);
		}
	}
		

	_addNewDoc = () => {
		this.setState({
			index: null,
			title: '',  
			content: ''
		});
	}

	_deleteDocument = (docIndex) => {
		let confirmation = window.confirm(`Really delete '${this.state.title}'?`);
		if (confirmation) {
			let newDocuments = this.state.docs.filter( (doc, index) => index !== docIndex);
			this.setState({
				index: null,
				title: '',  
				content: '',
				docs: newDocuments
			}, () => localStorage.setItem('react-notes', JSON.stringify(this.state.docs)));
		}
		console.log(this.state.index);
	}
	
}

export default App;
