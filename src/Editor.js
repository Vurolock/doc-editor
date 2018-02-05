import React from 'react';

const Editor = (props) => {

    return (
        <div 
            className="editor"
        >
            {props.displayContent}
        </div>
    );
}

export default Editor;