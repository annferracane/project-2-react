import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from './NavBar';
import Hero from './Hero';
import Main from './Main';
import Favorites from "./Favorites";
import JokeDetail from "./JokeDetail";
import NewSubmission from "./NewSubmission";

function App() {
  const baseURL = "http://localhost:3001/jokes";
  const [jokes, setJokes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Fetch comics for home page
  useEffect(() => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(jokes => setJokes(jokes))
    .catch(e => console.log(e));
  }, [favorites]);

  // Fetch favorites for favorite page
  useEffect(() => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(jokes => {
      const favorites = jokes.filter(joke => joke.favorited);
      setFavorites(favorites);
    })
    .catch(e => console.log(e));

  }, []);

  // Adds comic to favorites
  function favoriteJoke(favoriteJoke) {
    const newFavorites = [...favorites, favoriteJoke];
    setFavorites(newFavorites);
  }

  // Removes comic from favorites
  function unfavoriteJoke(id){
    const newFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(newFavorites);
  }

  // Adds new comic to db.json
  function handleNewComic(newComic) { 
    setJokes([...jokes, newComic])
  }

  return (
    <div className="App">
      <NavBar />
      <Route path="/new">
        <Hero title="add new comic" image={"https://logo.clearbit.com/xkcd.com"} description="Submit your new comic here!"/>
        <NewSubmission handleNewComic={handleNewComic} />
      </Route>
      <Route path="/favorites">
        <Hero title="favorites" image={"heart_icon.png"} description="These are all of your favorite xkcd jokes!"/>
        <Favorites favorites={ favorites } unfavoriteJoke={ unfavoriteJoke }/>
      </Route>
      <Route path="/comics/:id">
        <JokeDetail />
      </Route>
      <Route exact path="/">
        <Hero title="xkcd comics" image={"https://logo.clearbit.com/xkcd.com"} description="xkcd is an old, famous comic strip that has been around for years. We hope you enjoy these!"/>
        <Main jokes={ jokes } favoriteJoke={ favoriteJoke } unfavoriteJoke={ unfavoriteJoke }/>
      </Route>
    </div>
  );
}

export default App;
