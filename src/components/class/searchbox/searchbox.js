import React, {Component} from "react";

class Searchbox extends Component{
    render(){
        const { onInputChange } = this.props;
        return(
            <div>
                <input className="search-box" type="search" placeholder='search monsters' onChange={onInputChange} />
            </div>
        )
    }

}

export default Searchbox;