import React, { useState } from 'react';
import '.././css/head.css';


function Navbar(props) {
  const [searchValue, setSearchValue] = useState("")
  const [buttonSearch, setButtonSearch] = useState("");
  
  const onHandelChange = (e)=>{  
    setSearchValue(e.target.value)
  }

  const onClickSearch = (e) => {
    e.preventDefault();
     props.onChange(searchValue)
      setButtonSearch(searchValue);
      return buttonSearch;
  }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="https://google.com">Phimhay.com</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/detail">Detail</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bookmark">BookMark</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input value = {searchValue} onChange = {onHandelChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick = {onClickSearch} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
}

export default Navbar;