import React, { Component } from 'react';
import List from './List';
import Editor from './Editor';

class App extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			index: null,
			title: '',  
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
				})
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
				});
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
			});
		}
		console.log(this.state.index);
	}
	
}


export default App;
