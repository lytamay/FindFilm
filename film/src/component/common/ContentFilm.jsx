import React, { useState } from 'react';

function ContentFilm(props) {
    let film = props.film
    const [favourite , setFavourite] = useState('false')

    const showList = () => {
        let link=`/film/${film.imdbID}`
        let bookLocal=JSON.parse(localStorage.getItem('book'));
        if(bookLocal === null) bookLocal=[]
        const style= bookLocal.findIndex(value=>value.imdbID===film.imdbID)===-1? 'blue':'red'
        return (  
             <div key = {film.imdbID} className = "container-fuild">
                <div className = 'row'>
                    <div className ="col-10">
                        <a key = {link} href = {link}>
                            <h3 style ={{color : "#FF8000"}}>{film.Title}</h3>
                       </a> 
                    </div>
                    <div className = "col-2">
                        <span onClick = {()=>storeFilmBookMark(film)} style = {{color : style}} className = "fas fa-heart"></span>
                    </div>            
                </div>
                <a key = {link} href = {link}>
                <div>
                    <p className = "display-5">{film.Year}</p>
                </div>
                <div>
                    <p>{film.Title}</p>
                </div>
                <div className = "Poster"> 
                    <p>{film.Poster}</p>
                </div>
                <div >
                    <button  className = "showDetail" >Show Detail</button>
                </div>
                </a>
            </div>
         )
     }

     const storeFilmBookMark = (film) => {
        const bookLocal = JSON.parse(localStorage.getItem('book')) || []
        if (bookLocal.findIndex(value=>value.imdbID===film.imdbID)===-1){
            bookLocal.push(film)
            setFavourite("true")
        } else {
            bookLocal.splice(bookLocal.findIndex(value=>value.imdbID===film.imdbID),1)
            setFavourite("false")
        }
        localStorage.setItem('book',JSON.stringify(bookLocal))
     }
     return(
        <div>
            {showList()}
        </div>
     );

}

export default ContentFilm;