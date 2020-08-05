import React from 'react';
import ShowDetail from '../component/ShowDetail';
import Content from '../component/Content';

function Detail(props) {
    
    return (
        <div>
            <Content Title = 'chi tiet bo phim'/>
            <ShowDetail id = {props.match.params.name}/> 
        </div>
    );
}

export default Detail;