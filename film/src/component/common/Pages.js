import React, { useState } from 'react';

function Pages(props) {
    const [numberPage , setNumberPage] = useState();

    let films = props.films

    const length = films.length

    if (numberPage!==Math.round(length/5))
    setNumberPage (Math.round(length/5))

    const Page = () =>{
        const page  = [];
        for(let i =1 ; i<= numberPage ;i++){
            page.push(i)
        }

         const listPage = page.map(index =>{
                let a=`#${index}`
                return <a key={index} className = "page" href = {a}>{index}</a>
            })
         return  listPage
    }
    return (
        <div className = 'container Page'> 
            {Page()}
        </div>
    );
}

export default Pages;