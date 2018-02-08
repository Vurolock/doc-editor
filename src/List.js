import React from 'react';

const List = (props) => {
    let titles = props.listDocs.map((doc) => {
        let theClass = "title";
        if (doc.id === props.docId) {
            theClass = "title active-title"
        }
        return (
            <div
                key={doc.id}
                className={theClass}
                onClick={ () => {
                    props.clickHandler(doc.id, doc.title, doc.content);
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
            New Note
            </button>
            {titles}
        </div>
    );
}

export default List;