import React from "react";
import { Link } from "react-router-dom";

function Joke({ joke, favoriteHandler }) {
    console.log(joke);

    function onFavorite(e) {
        console.log(e)
        //favoriteHandler();
    }

    return (
        <>
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title }</h2>
                <p>Published: {joke.month}/{joke.day}/{joke.year}</p>
                <p>{ joke.alt }</p>
                <img src={ joke.img } alt={ joke.transcript } />
                <br></br>
                <br></br>
                <div className="gap-2 d-sm-flex">
                    <button className="btn btn-outline-light" type="button" onClick={ onFavorite }>Favorite</button>
                    <Link className="btn btn-outline-light" type="button" to={`/comics/${joke.id}`}>See Details</Link>
                </div>
            </div>
            <br></br>
        </>
    )

}

export default Joke;