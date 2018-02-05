import React from 'react';

const Editor = (props) => {
    return (
        <form className="editor">
            <div className="form-group">
                <label className="editor-title">{props.displayTitle}</label>
                <textarea className="form-control" placeholder="super awesome document content" value={props.displayContent} />
            </div>
            <button className="btn btn-primary" type="submit">Save Changes</button>
        </form>
    );
}

export default Editor;