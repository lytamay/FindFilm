import React from 'react';
import FilmItem from './FilmItem';

function ShowFilm(props) {
    
    let films = props.films

    const showListFilm = () => {
        let crpage=props.location.hash
        if(crpage != null){
            crpage=crpage.slice(1)
        }  
        const Show = films.map((film,index) =>{
            if(crpage!= ''){
                if((index>=(crpage-1)*5) && (index<5*crpage)){
                    return (
                        <div key={index}><FilmItem {...props} film = {film}/></div>
                    )
                }
            }
            else{
                while(index < 5){
                    return (
                        <div key={index}><FilmItem {...props} film = {film}/> </div>
                    )
                }
            }
         })
         return Show
    }
    return (
        <div>
            {showListFilm()}
        </div>
    );
}

export default ShowFilm;