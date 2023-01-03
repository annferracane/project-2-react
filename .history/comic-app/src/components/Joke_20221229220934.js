import React, { useState } from "react";
import { Link } from "react-router-dom";

function Joke({ joke, favoriteJoke }) {
    const [isFavorited, setIsFavorited] = useState(joke.favorited);

    function favoriteHandler() {
        const updatedJoke = {...joke, favorited: true};

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
            unfavoriteJoke(joke.id);
        })
        .catch(e => console.log(e));
    }

    return (
        <>
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title }</h2>
                <p>Published: {joke.month}/{joke.day}/{joke.year}</p>
                <img src={ joke.img } alt={ joke.transcript } />
                <br></br>
                <br></br>
                <p><b>Comic's Note:</b> { joke.alt }</p>
                <div className="gap-2 d-sm-flex">
                    {isFavorited ? <button className="btn btn-danger" type="button" onClick={ favoriteHandler }>Favorite</button> : <button className="btn btn-warning" type="button" onClick={ favoriteHandler }>Unfavorite</button>}
                    
                    <Link className="btn btn-primary" type="button" to={`/comics/${joke.id}`}>See Details</Link>
                </div>
            </div>
            <br></br>
        </>
    )

}

export default Joke;