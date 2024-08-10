import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actorDetails, setActorDetails] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
      .then(resp => resp.json())
      .then(data => setActorDetails(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {
          actorDetails.map(actor => (
            <article>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map(movie => (
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

export default Actors;
