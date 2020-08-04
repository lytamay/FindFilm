import React, { useState } from 'react';

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
                <h1>Danh sach phim yeu thich trong</h1>
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
    const navbar = () => {
        return(
            <div className = "container">
                <div className = 'row ' >
                    <div className = "jumbotron col-12" style = {{background: '#1f262a'}}>
                        <h2 style = {{ color : 'white', textAlign: 'center'}}>Danh sach phim yeu thich cua ban</h2>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {navbar()}
            {listBookMark()}
        </div>
    );
}

export default BookMark;