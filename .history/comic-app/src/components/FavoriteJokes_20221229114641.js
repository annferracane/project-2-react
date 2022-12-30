import React from "react";
import FavoriteJoke from "./FavoriteJoke";

function FavoriteJokes({ favorites }) {
    const favoritesArray = favorites.map(favorite => <FavoriteJoke key=favorite={ favorite }/>)
    return (
        <div className="col">
            { favoritesArray }
        </div>
    )
}

export default FavoriteJokes;