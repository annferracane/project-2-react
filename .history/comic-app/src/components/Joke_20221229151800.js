import React from "react";

function Joke({ joke, favoriteHandler }) {
    console.log(joke);

    function onFavorite(e) {

        //favoriteHandler()

    }

    return (
        <>
        {/* Wendy to work on Joke.js */}
            <div className="p-5 text-bg-dark rounded-3">
                <h2>{ joke.title }</h2>
                <p>{ joke.description }</p>
                <button className="btn btn-outline-light" type="button" onClick={ onFavorite }>Favorite</button>
            </div>
            <br></br>
        </>
    )

}

export default Joke;