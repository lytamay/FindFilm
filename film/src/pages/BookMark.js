import React, { useState } from 'react';
import Content from '../component/Content';
import Pages from '../component/common/Pages';
import ShowFilm from '../component/common/ShowFilm';

function BookMark(props) {
    const [bookLocalStorage , setBookLocalStorage] = useState(JSON.parse
        (localStorage.getItem('book')));
    const listBookMark = () =>{
        if (bookLocalStorage!==null){
            const show =  bookLocalStorage.map((book)=> {
                return (
                    <div className = "container">
                        {ShowBookMark(book)}
                    </div>
                )
            })
            return show
        }
        else{
            return (
                <h1>Danh sach trong</h1>
            )
        }
    }
    
    const ShowBookMark = (book) => {
        return (
            <div className = "row boxItem">
                <div className = 'col-4'>
                    <div>
                        <img style = {{width: '300px', height: '300px'}} alt = {book.Title} src = {book.Poster}></img>
                    </div>
                </div>
               <div className = "col-8 boxBook"> 
                <div>
                     <h4> Phim: {book.Title}</h4>    
                </div>
                <div>
                    <p>ID: {book.imdbID}</p>
                </div>
            </div>              
            </div>
        )
    }
    console.log(props.location.hash)
    return (
        <div>
            <Content Title = "Danh sach phim yeu thich cua ban" />
            {/* <ShowFilm films = {bookLocalStorage} key='a' {...props} /> */}
            {listBookMark()}
            <Pages films = {bookLocalStorage}/>
        </div>
    );
}

export default BookMark;