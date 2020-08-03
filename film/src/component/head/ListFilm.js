import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/head.css';

function ListFilm(props) {
    const [films , setFilms] = useState([]);
    const [numberPage , setNumberPage] = useState();
    const defaultPage = 5;
    const length = films.length
    if (numberPage!==Math.round(length/5))
    setNumberPage (Math.round(length/5))
    
    const link = 'http://www.omdbapi.com/?apikey=c867a671&s=' + props.textSearch
     useEffect(()=>{
         axios.get(link)
         .then((res)=>{
             if (res.data.Response==='False') {
                const link1 = 'http://www.omdbapi.com/?apikey=c867a671&t=' + props.textSearch
                axios.get(link1)
                .then((res)=>{
                    const danhSachFilmTuDuLieu = res.data;
                    let search = []
                    search.push(danhSachFilmTuDuLieu)
                    setFilms(search)
                })
                .catch(err => alert(err))
            } else {
                const danhSachFilmTuDuLieu = res.data.Search;
                setFilms(danhSachFilmTuDuLieu)
            }
             
         })
         .catch(error => alert(error));
     },[props.textSearch])

     const showList = (film) => {
         return (  
             <div key = {films.imdbID} className = "container-fuild">
                 <div>
                    <h1 style ={{color : "#FF8000"}}>{film.Title}</h1>
                 </div>
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
             </div>
         )
     }
     const filmIndex =(film)=>{
        let link=`/film/${film.imdbID}`
         return(
             <a key={link} href = {link}>
             <div className = "container-fluid filmIndex">
                 <div className = "row">
                    <div className = "col-sm-3">
                        <div>
                             <img width ="100%" height = "100%" src = {film.Poster} alt = {film.Title}/>  
                        </div>
                    </div>
                    <div className = "col-sm-9" style={{overflowWrap: 'break-word'}}>
                        <div>
                            {showList(film)}
                        </div>
                    </div>
                 </div>
             </div>
             </a>
         )
     }  

     const showListFilm = () => {
         let crpage=props.location.hash
         crpage=crpage.slice(1)
         const Show = films.map((film,index) =>{
             if((index>=(crpage-1)*5) && (index<5*crpage)){
                       return (
                    <div key={index}>{filmIndex(film)} </div>
                )
             }
         })
         return Show;
     }
     const Page = () =>{
        const page  = [];
        for(let i =1 ; i<= numberPage ;i++){
            page.push(i)
        }
        console.log('aasasa' + films.length)
         const listPage = page.map(index =>{
                let a=`#${index}`
                return <a key={index} className = "page" href = {a}>{index}</a>
            })
         return  listPage
     }
     
    return (
        <div className = "container-fluid">
            {showListFilm()}
            <div className = "Page">{Page()}</div>
        </div>
    );
}

export default ListFilm;