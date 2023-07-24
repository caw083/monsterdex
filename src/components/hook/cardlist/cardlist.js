import React from "react";
import Card from "../card/card";
import "./card.css";

const Cardlist = ({data}) =>{
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
};

export default Cardlist;



