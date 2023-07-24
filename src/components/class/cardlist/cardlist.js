import React, {Component} from "react";
import Card from "../card/card";
import './card.css'

class Cardlist extends Component {
    render(){
        const {data} = this.props;
        return(
            <div className='card-list'>
                {
                    data.map((monster) => {
                        return(
                        <div className='card-list' key={monster.id}>
                            <Card name={monster.name} id={monster.id} email={monster.email}/>
                        </div>)
                        }
                    )
                }
            </div>
        )
    }
}

export default Cardlist;