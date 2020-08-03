import React from 'react';
import ShowDetail from '../component/ShowDetail';

function Detail(props) {
    
    return (
        <div>
            <ShowDetail id = {props.match.params.name}/> 
        </div>
    );
}

export default Detail;