import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const movieId = params.id
    
 useEffect(()=>{
      fetch(`http://localhost:4000/movies/${movieId}`)
      .then(resp => resp.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error(error))
  }, [movieId]);

  if(!movieDetails.title){
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Movie Details</h1>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.time} minutes</p>
        {
          movieDetails.genres.map((genre, index)=>(
            <span key={index}>{genre}</span>
          ))
        }
      </main>
    </>
  );
};

export default Movie;
