import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/head.css';
import ShowFilm from './common/ShowFilm.jsx';
import Pages from './common/Pages';
import {getFilmBySearch, getFilmByTitle} from '../API/fetchApi.js'

function ListFilm(props) {
    const [films , setFilms] = useState([]);
    const [numberPage , setNumberPage] = useState();
    const [favourite , setFavourite] = useState('false')

    const length = films.length
    if (numberPage!= Math.round(length/5))
    setNumberPage (Math.round(length/5))
    
     useEffect(()=>{
        getFilmBySearch(props.textSearch)
        .then((res)=>{
             if (res.data.Response==='False') {
                getFilmByTitle(props.textSearch)
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

    return (
        <div className = "container-fluid">
            {/* {showListFilm()} */}
            <ShowFilm films = {films} key='a' {...props} />
            <div className = "Page">
                <Pages films = {films}/>
            </div>
        </div>
    );
}

export default ListFilm;