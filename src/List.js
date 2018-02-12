import React from 'react';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const List = (props) => {
    let titles = props.listDocs.map(doc => {
        let theClass = "title";
        if (doc.id === props.docId) {
            theClass = "title active-title"
        }
        return (
            <div
                key={doc.id}
                className={theClass}
                onClick={ () => props.clickHandler(doc.id, doc.title, doc.content) }
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

            <input 
                type="text"
                className="form-control list-search"
                placeholder="Search..."
                // value={props.displayTitle}
                onChange={ (event) => props.searchHandler(event.target.value) }
            >
            </input>

            <div className="dropdown">

                <button 
                    className="btn btn-info dropdown-toggle sort-doc-btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Sorted By...
                </button>

                <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                >

                    <div
                        className="dropdown-item sort-option"
                        onClick={ props.sortById }
                    >
                        ID
                    </div>

                    <div
                        className="dropdown-item sort-option"
                        onClick={ props.sortByAlphabet }
                    >
                        Alphabet
                    </div>

                    <div
                        className="dropdown-item sort-option"
                        onClick={ props.sortByUpdated }
                    >
                        Last Update
                    </div>

                </div>

                <div
                    className="sorted-by"
                >
                    {props.sortedBy}
                </div>

            </div>

            {titles}

        </div>
    );
}

export default List;