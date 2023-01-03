import React from "react";
import { Link } from "react-router-dom";

function Joke({ joke, favoriteJoke }) {
    console.log(joke);

    function favoriteHandler() {
        fetch()
        .then()
        .then()
        .catch()
        favoriteJoke(joke);
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
                    <button className="btn btn-danger" type="button" onClick={ favoriteHandler }>Favorite</button>
                    <Link className="btn btn-primary" type="button" to={`/comics/${joke.id}`}>See Details</Link>
                </div>
            </div>
            <br></br>
        </>
    )

}

export default Joke;