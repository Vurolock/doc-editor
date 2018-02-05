import React from 'react';

const List = (props) => {

    let titles = props.listDocs.map((doc, index) => {
        return (
            <div
                key={index}
                className="title"
                onClick={ (event) => {
                    // console.log(doc.content);
                    props.clickHandler(doc.content, doc.title);
                }}
            >
                {doc.title}
            </div>
        )
    });

    return (
        <div className="title-list">
            {titles}
        </div>
    );
}

export default List;