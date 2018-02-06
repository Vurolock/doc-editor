import React from 'react';

const List = (props) => {
    let titles = props.listDocs.map((doc, index) => {
        return (
            <div
                key={index}
                className="title"
                onClick={ () => {
                    props.clickHandler(index, doc.title, doc.content);
                }}
            >
                {doc.title}
            </div>
        )
    });

    return (
        <div className="title-list">
            <button
                className="btn btn-success new-doc-btn"
                type="button"
                onClick={ props.newDocClickHandler }
            >
            Add New Doc
            </button>
            {titles}
        </div>
    );
}

export default List;