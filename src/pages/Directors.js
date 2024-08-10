import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directorDetails, setdirectorDetails] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then(resp => resp.json())
      .then(data => setdirectorDetails(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {
          directorDetails.map(director => (
            <article>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map(movie => (
                  <li>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        }
      </main>
    </>
  );
};

export default Directors;
