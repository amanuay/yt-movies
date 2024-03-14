import Header from "./header";
import './app.css';
import Footer from "./footer";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import Player from "./player";
import movie from "./movieData";
import { useState } from "react";

function App() {
  const movies = movie
  const [searchWord, setSearchWord] = useState("");
  const filteredMovies = movies.filter(m => m.title.toLowerCase().includes(searchWord.toLowerCase()));


  function handleChange(e) {
    setSearchWord(e.target.value);
  }


  return (
    <>
      <Header searchWord={searchWord} onChange={handleChange} />
      <Routes>
        <Route path="/player/:id" Component={Player} />
        <Route path="/" element={<Home items={filteredMovies} />}>
        </Route>
      </Routes >
      <Footer />
    </>
  )
}


export default App



