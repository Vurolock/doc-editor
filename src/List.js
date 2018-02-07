import React from 'react';

const List = (props) => {
    let titles = props.listDocs.map((doc, index) => {
        let theClass = "title";
        if (index === props.docIndex) {
            theClass = "title active-title"
        }
        return (
            <div
                key={index}
                className={theClass}
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
            New Note
            </button>
            {titles}
        </div>
    );
}

export default List;