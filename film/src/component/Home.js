import React, { useState } from 'react';
import Navbar from './head/Navbar';
import Content from './head/Content';
import ListFilm from './head/ListFilm';
function Home(props) {
    const [textSearch, setTextSearch] = useState('star')

    const onChange = (text)=>{
         setTextSearch(text)
    }
    return (
        <div>
            <Navbar  onChange ={onChange}/>
            <Content/>
            <ListFilm key='asadad' {...props} textSearch = {textSearch}/>     
        </div>
    );
}

export default Home;