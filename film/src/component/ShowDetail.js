import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {getFilmById} from '../API/fetchApi';
function ShowDetail(props) {
    const [detail, setDetail] = useState({});

    useEffect( () =>{
        getFilmById(props.id)
        .then((res)=>{
            const danhSachFilmTuDuLieu = res.data;
            setDetail(danhSachFilmTuDuLieu)
        })
        .catch(error => console.log(error));
    },[])
    const Detail = () => {
        return (
            <div className = "container text">
                <div className = "row">
                    <div className = "col-md-6">
                        <img src = {detail.Poster} alt="img" />    
                    </div>
                    <div className = "col-md-6">
                        <div>
                            <h3 className ="display-5">Ten phim: {detail.Title}</h3>
                        </div>
                        <div>
                            <p> The loai: {detail.Type}, {detail.Genre } </p>
                        </div>
                        <div>
                            <p>Quoc Gia: {detail.Country}</p>
                        </div>
                        <div>
                            <p>Cac dien vien: {detail.Actors}</p>
                        </div>
                        <div>
                            <a className = "XemPhim" >Xem Phim</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className = "backGroundDetail">
            {Detail()}
        </div>
    );
}

export default ShowDetail;