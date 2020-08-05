import React from 'react';
import ContentFilm from './ContentFilm.jsx';

function FilmItem(props) {

    let film = props.film
    let link=`/film/${film.imdbID}`

    return (
        <div className = "container-fluid filmIndex">
            <div className = "row">
                <div className = "col-sm-3">
                    <div>
                        <a key={link} href = {link}><img width ="100%" height = "100%" src = {film.Poster} alt = {film.Title}/></a> 
                    </div>
                </div>
                <div className = "col-sm-9" style={{overflowWrap: 'break-word'}}>
                    <div>
                        <ContentFilm film = {film}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmItem;