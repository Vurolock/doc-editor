import React from 'react';

const List = (props) => {
    let titles = props.listDocs.map((doc, index) => {
        return (
            <div
                key={index}
                className="title"
                onClick={ () => {
                    // console.log(doc.content);
                    props.clickHandler(doc.content, doc.title, index);
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
                onClick={ () => {
                    let newTitle = prompt("Title:");
                    props.addNewClickHandler(newTitle);
                }}
            >
            Add New Doc
            </button>
            {titles}
        </div>
    );
}

export default List;