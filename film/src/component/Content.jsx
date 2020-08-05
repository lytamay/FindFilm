import React from 'react';

function Content(props) {
    return (
        <div className="jumbotron jumbotron-fluid contents">
            <div className="container">
                <h1 className ="display-4" style = {{fontSize: '50px'}}>{props.Title} </h1>
                <hr style = {{background: 'white'}}/>
            </div>
        </div>
    );
}

export default Content;