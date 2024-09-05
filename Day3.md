To connect to the TMDB API and show popular movies in the main body of your React application, we'll need to modify the `Body` component and add some new functionality. Here's how we can do that:

1. First, let's install the necessary package to make API requests. In your project directory, run:

   ```
   npm install axios
   ```

2. Now, let's update the `Body` component to fetch and display popular movies:



```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

function Body() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "YOUR_TMDB_API_KEY_HERE", // Replace with your actual API key
            },
          }
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (err) {
        setError("Error fetching movies. Please try again later.");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}/10</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Body;

```

Now, let's go through the changes and what you need to do:

1. Replace `YOUR_TMDB_API_KEY_HERE` with your actual TMDB API key. You can get this by signing up at https://www.themoviedb.org/ and requesting an API key.

2. This component now fetches popular movies from the TMDB API when it mounts, using the `useEffect` hook.

3. It uses `useState` to manage the state of movies, loading, and error.

4. While loading, it displays a loading message. If there's an error, it shows the error message.

5. Once the data is fetched, it renders a grid of movie cards, each showing the movie poster, title, and rating.

To make this look better, you might want to add some CSS. You can add the following to your `App.css` file:



```css
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.movie-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-card img {
  width: 100%;
  height: auto;
}

.movie-card h3 {
  padding: 10px;
  margin: 0;
  font-size: 1rem;
}

.movie-card p {
  padding: 0 10px 10px;
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

```

These changes will fetch popular movies from the TMDB API and display them in a grid layout in the main body of your app. Remember to keep your API key secure and not to expose it in client-side code in a production environment. For a production app, you'd want to set up a backend server to handle API requests and keep your API key secure.
