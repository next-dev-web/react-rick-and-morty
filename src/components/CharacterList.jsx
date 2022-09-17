import { useEffect, useState } from "react";
import Character from "./Character";
import Navigation from "./Navigation";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      {loading ? (
        <div className="text-center">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <Navigation page={page} setPage={setPage} />
          <div className="row">
            {characters.map((character) => {
              return (
                <div className="col-md-4" key={character.id}>
                  <Character character={character} />
                </div>
              );
            })}
          </div>
          <Navigation page={page} setPage={setPage} />
        </div>
      )}

      <br />
    </div>
  );
}
