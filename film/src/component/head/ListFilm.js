import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListFilm(props) {
    const [films , setFilms] = useState([]);

    //  useEffect(()=>{
    //      console.log(1);
    //      axios.get('http://www.omdbapi.com/?apikey=c867a671&t=star')
    //      .then((res)=>{
    //          const nameFilm = res.data;
    //          setFilms(nameFilm);
             
    //      })
    //  },[])

    //  const showList = (film) => {
    //      return (  
    //          <div>
    //              <h1 className = 'display-5'>{film.title}</h1>
    //          </div> 
    //      )
    //  }
     const film =()=>{
        return (
            console.log(films)
            // films.map(indext => {
            // // return (<li>{() =>showList(indext)}</li>)
            // console.log(indext)
            // })
        )
     }  
    return (
        <div>
            <ul>
                {film()}
            </ul>
            
        </div>
    );
}

export default ListFilm;