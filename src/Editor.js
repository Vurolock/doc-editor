import React from 'react';

const Editor = (props) => {
    return (
        <form className="editor">
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control editor-title"
                    placeholder="Title..."
                    value={props.displayTitle}
                    onChange={ (event) => {
                        props.changeHandler(props.docIndex, event.target.value, props.displayContent)
                    }}
                >
                </input>

                <textarea
                    className="form-control"
                    placeholder="Content..."
                    rows="20"
                    value={props.displayContent}
                    onChange={ (event) => {
                        props.changeHandler(props.docIndex, props.displayTitle, event.target.value);
                    }}
                />

            </div>
            <div className="form-buttons">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={ () => {
                        props.clickHandler(props.docIndex, props.displayTitle, props.displayContent);
                    }}
                >
                    Save Changes
                </button>
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={ () => {
                        props.deleteHandler(props.docIndex);
                    }}
                >
                    Delete Document
                </button>
            </div>
            
        </form>
    );
}

export default Editor;