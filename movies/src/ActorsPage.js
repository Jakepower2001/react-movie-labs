import React, { useState } from 'react';

const ActorsPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [actors, setActors] = useState([]);
  const [actorDetails, setActorDetails] = useState(null);
  const apiKey = 'YOUR_TMDB_API_KEY';

  const searchActors = () => {
    fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${searchInput}`)
      .then(response => response.json())
      .then(data => setActors(data.results))
      .catch(error => console.error('Error fetching actors:', error));
  };

  const showActorDetails = (actorId) => {
    fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}&append_to_response=movie_credits`)
      .then(response => response.json())
      .then(data => setActorDetails(data))
      .catch(error => console.error('Error fetching actor details:', error));
  };

  return (
    <div>
      <h1>TMDB Actors Page</h1>
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search for actors..." />
      <button onClick={searchActors}>Search</button>
      <div>
        {actors.map(actor => (
          <div key={actor.id} onClick={() => showActorDetails(actor.id)}>{actor.name}</div>
        ))}
      </div>
      {actorDetails && (
        <div>
          <h2>{actorDetails.name}</h2>
          <p><strong>Biography:</strong> {actorDetails.biography}</p>
          <h3>Filmography:</h3>
          <ul>
            {actorDetails.movie_credits.cast.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActorsPage;
