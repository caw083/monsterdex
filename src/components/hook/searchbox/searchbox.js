import React from "react";
import './searchbox.css'
const Searchbox = ({onInputChange}) =>{
    return (
    <div>
        <input className="search-box" type="search" placeholder='search monster' onChange={onInputChange} />
    </div>
    )
}

export default Searchbox;