import React from 'react';
import Navbar from './head/Navbar';
import Content from './head/Content';
import ListFilm from './head/ListFilm';
function Home(props) {
    return (
        <div>
            <Navbar/>
            <Content/>
            <ListFilm/>     
        </div>
    );
}

export default Home;