import React from "react";

const Searchbox = ({onInputChange}) =>{
    return (
    <div>
        <input className="search-box" type="search" placeholder='search monsters' onChange={onInputChange} />
    </div>
    )
}

export default Searchbox;