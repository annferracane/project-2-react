import React from "react";
import Joke from "./Joke";


function JokeList({ jokes, favoriteJoke, unfavoriteJoke }) {
    const jokeArray = jokes.map(joke => <Joke key={ joke.id} joke={ joke } favoriteJoke={ favoriteJoke } unfavoriteJoke={ unfavoriteJoke }/>)
    return (
        <div className="col">
            { jokeArray }
        </div>
    )
}

export default JokeList;