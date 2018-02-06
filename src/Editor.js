import React from 'react';

const Editor = (props) => {
    return (
        <form className="editor">
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control editor-title"
                    placeholder="Super Awesome Document Title!"
                    value={props.displayTitle}
                    onChange={ (event) => {
                        props.changeHandler(event.target.value, props.displayContent)
                    }}
                >
                </input>

                <textarea
                    className="form-control"
                    placeholder="super awesome document content"
                    rows="20"
                    value={props.displayContent}
                    onChange={ (event) => {
                        props.changeHandler(props.displayTitle, event.target.value);
                    }}    
                />

            </div>
            <button
                className="btn btn-primary"
                type="button"
                onClick={ () => {
                    props.clickHandler(props.displayContent, props.displayTitle);
                }}
            >
                Save Changes
            </button>
        </form>
    );
}

export default Editor;