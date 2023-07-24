import React, {Component} from "react";
import './searchbox.css'
class Searchbox extends Component{
    render(){
        const { onInputChange } = this.props;
        return(
            <div>
                <input className="search-box" type="search" placeholder='search monster' onChange={onInputChange} />
            </div>
        )
    }

}

export default Searchbox;