import axios from 'axios';

export function getFilmBySearch(search) {
    return (
        axios.get('http://www.omdbapi.com/?apikey=c867a671&s=' + search)
    )
}

export function getFilmByTitle(search) {
    return (
        axios.get('http://www.omdbapi.com/?apikey=c867a671&t=' + search)
    )
}

export function getFilmById(id) {
    return (
        axios.get('http://www.omdbapi.com/?apikey=c867a671&i=' + id)
    )
}
