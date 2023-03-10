import React, { useState } from "react";
import { Link } from "react-router-dom";

function Joke({ joke, favoriteJoke, unfavoriteJoke }) {
    const [isFavorited, setIsFavorited] = useState(joke.favorited);

    // Favorite / Unfavorite  Click Handler
    function clickHandler() {
        const favoriteValue = isFavorited ? false : true;

        const updatedJoke = {...joke, favorited: favoriteValue};

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedJoke)

        };

        fetch(`http://localhost:3001/jokes/${joke.id}`, configObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            if(isFavorited) {
                unfavoriteJoke(joke.id);
                setIsFavorited(false);
            } else {
                favoriteJoke(joke);
                setIsFavorited(true);
            } 
        })
        .catch(e => console.log(e));
    }

    return (
        <>
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title }</h2>
                <img src={ joke.img } className='img-fluid' alt={ joke.transcript }/>
                <br></br>
                <br></br>
                <p><b>Comic's Note:</b> { joke.alt }</p>
                <div className="gap-2 d-sm-flex">
                    {isFavorited ? <button className="btn btn-warning" type="button" onClick={ clickHandler }>Unfavorite</button> : <button className="btn btn-danger" type="button" onClick={ clickHandler }>Favorite</button>}
                    <Link className="btn btn-primary" type="button" to={`/comics/${joke.id}`}>See Details</Link>
                    <Link type="button" className="btn btn-info" to={`/comics/${joke.id}`}> Comments <span className="badge text-bg-dark">{ joke.comments.length }</span> </Link>
                </div>
            </div>
            <br></br>
        </>
    )

}

export default Joke;