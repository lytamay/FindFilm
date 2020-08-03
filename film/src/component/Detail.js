import React from 'react';
import Navbar from './head/Navbar';
import ShowDetail from './head/ShowDetail';
function Detail(props) {
    
    return (
        <div>
            <ShowDetail id = {props.match.params.name}/> 
        </div>
    );
}

export default Detail;