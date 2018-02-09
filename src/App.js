import React, { Component } from 'react';
import List from './List';
import Editor from './Editor';
import reactNotes from './getReactNotes';
import { API } from './config';

class App extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			id: null,
			title: '',
			content: '',
			docs: reactNotes
    	}
  	}
	
	componentDidMount() {
		fetch(API)
			.then(res => res.json())
			.then(notes => {
				this.setState({
					docs: notes
				});
			});
	}

  	render() {
    	return (
      	<main>
			<List
				docId={this.state.id}
          		listDocs={this.state.docs}
				clickHandler={this._setDocument}
				newDocClickHandler={this._addNewDoc}
        	/>
        	<Editor
				docId={this.state.id}
				displayContent={this.state.content}
				displayTitle={this.state.title}
				changeHandler={this._setDocument}
				clickHandler={this._editOrNewDocument}
				deleteHandler={this._deleteDocument}
        	/>
      	</main>
    	);
	}
	
	_setDocument = (docId, docTitle, docContent) => {
		this.setState({
			id: docId,
			title: docTitle,
			content: docContent
		});
	}

	_editOrNewDocument = (docId, docTitle, docContent) => {
		const regex = /^\s*$/;
		if (docTitle.match(regex)) {
			alert('You must have a title!');
		} else {
			if (docId === null) {
				// New note
				// POSTS to db using JSON header, body must be stringified to be sent to backend
				fetch(API, {
					method: 'POST',
					headers: new Headers({
						'Content-Type': 'application/json'}),
					body: JSON.stringify({
						title: docTitle,
						content: docContent
					})
				// parse JSON from response
				}).then(res => res.json())
					.then(newNote => {
						this.setState({
							id: newNote.id,
							docs: this.state.docs.concat(newNote)
						}, () => localStorage.setItem('react-notes', JSON.stringify(this.state.docs)));
					});
			} else {
				// Edit note
				// PUTS to db using JSON header, body must be stringified to be sent to backend
				fetch(API, {
					method: 'PUT',
					headers: new Headers({
						'Content-Type': 'application/json'}),
					body: JSON.stringify({
						id: docId,
						title: docTitle,
						content: docContent
					})
				// parse JSON from response
				}).then(res => res.json())
					.then(editedNote => {
						let editedDocs = this.state.docs.map(doc => {
							if (doc.id === editedNote.id) {
								doc.title = editedNote.title;
								doc.content = editedNote.content;
							}
							return doc;
						});
						this.setState({
							id: editedNote.id,
							docs: editedDocs
						});
					});
			}
		}
	}
		
	_addNewDoc = () => {
		this.setState({
			id: null,
			title: '',  
			content: ''
		});
	}

	_deleteDocument = (docId) => {
		let confirmation = window.confirm(`Really delete '${this.state.title}'?`);
		if (confirmation) {
			fetch(API, {
				method: 'DELETE',
				headers: new Headers({
					'Content-Type': 'application/json'}),
				body: JSON.stringify({
					id: docId
				})
			}).then(() => {
				let newDocuments = this.state.docs.filter( (doc) => doc.id !== docId);
				this.setState({
					id: null,
					title: '',  
					content: '',
					docs: newDocuments
				}, () => localStorage.setItem('react-notes', JSON.stringify(this.state.docs)));
			});
		}
	}
	
}

export default App;
