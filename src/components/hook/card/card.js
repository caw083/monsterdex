import React from "react";

const Card = ({email, name, id}) =>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?set=set2&size=180x180`} width={"200px"}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;