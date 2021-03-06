import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Content from '../component/Content';
import ListFilm from '../component/ListFilm';
function Home(props) {
    const [textSearch, setTextSearch] = useState('star')

    const onChange = (text)=>{
         setTextSearch(text)
    }
    const   Title = "THAO SUC VOI PHIMHAY.COM"
    return (
        <div>
            <Navbar  onChange ={onChange}/>
            <Content Title = {Title}/>
            <ListFilm key='asadad' {...props} textSearch = {textSearch}/>     
        </div>
    );
}

export default Home;