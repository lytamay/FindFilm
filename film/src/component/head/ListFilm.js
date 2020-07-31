import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/head.css';
import { Link } from 'react-router-dom';

function ListFilm(props) {
    const [films , setFilms] = useState([]);

     useEffect(()=>{
         axios.get('http://www.omdbapi.com/?apikey=c867a671&s=star&page=3')
         .then((res)=>{
             const danhSachFilmTuDuLieu = res.data.Search;
             setFilms(danhSachFilmTuDuLieu)
         })
     },[])

     const showList = (film) => {
         return (  
             <Link Link = {film.imdbID}>
             <div className = "container-fuild">
                 <div>
                    <h1 style ={{color : "#FF8000"}}>{film.Title}</h1>
                 </div>
                 <div>
                    <p className = "display-5">{film.Year}</p>
                 </div>
                 <div>
                    <p>{film.Type}</p>
                 </div>
                 <div className = "Poster"> 
                    <p>{film.Poster}</p>
                 </div>
                 <div >
                     <button  className = "showDetail" >Show Detail</button>
                 </div>
             </div>
             </Link>
         )
     }
     const filmIndex =(film)=>{
         return(
             <div className = "container-fluid filmIndex">
                 <div className = "row">
                    <div className = "col-sm-3">
                        <div>
                             <img width ="100%" height = "100%" src = {film.Poster} alt = {film.Title}/>  
                        </div>
                    </div>
                    <div className = "col-sm-9" style={{overflowWrap: 'break-word'}}>
                        <div>
                            <p>{showList(film)}</p> 
                        </div>
                    </div>
                 </div>
             </div>
         )
     }  

     const showListFilm = () => {
         const Show = films.map((film) =>{
             return (
                 <div>
                     {filmIndex(film)}
                 </div>
             )
         })
         return Show;
     }
     const changePage = () =>{
         const page  = [1,2,3];
         const listPage = page.map(index =>{
                return <a className = "page" href = "#">{index}</a>
            })
         return  listPage
     }
    return (
        <div className = "container-fluid">
            {showListFilm()}
            <div className = "changePage">{changePage()}</div>
        </div>
    );
}

export default ListFilm;