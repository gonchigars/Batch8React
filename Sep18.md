### **Step 1: Set Up the React App**

```bash
npx create-react-app movie-app
cd movie-app
npm start
```

### **Step 2: Clean Up the Initial Project**
Delete unnecessary files (`App.test.js`, `logo.svg`, `reportWebVitals.js`, `setupTests.js`) and simplify `index.js` and `App.js`.

**`index.js`**
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

**`App.js`**
```javascript
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
    </div>
  );
}

export default App;
```

### **Step 3: Install Necessary Dependencies**

```bash
npm install axios
```

### **Step 4: Set Up TMDb API Key**
Sign up on [TMDb](https://www.themoviedb.org/) and get your API key. Then, create a `.env` file in the project root and add:

```
REACT_APP_TMDB_API_KEY=YOUR_API_KEY_HERE
```

### **Step 5: Build the Basic UI**

**`App.js`**
```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <h1>Movie App</h1>
      <div className="sidebar">
        <button>Popular</button>
        <button>Action</button>
        <button>Comedy</button>
      </div>
      <div className="movies"></div>
    </div>
  );
}

export default App;
```

**`App.css`**
```css
.App {
  display: flex;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 200px;
  padding: 20px;
}

.sidebar button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.movies {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}

.movie {
  width: 200px;
  margin: 10px;
}

.movie img {
  width: 100%;
  border-radius: 5px;
}

.movie h3 {
  margin: 10px 0 5px;
}

.movie p {
  color: #555;
}
```

### **Step 6: Fetch and Display Movies**

**`App.js`**
```jsx
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';

  const fetchMovies = async (category) => {
    try {
      let url = '';
      if (category === 'popular') {
        url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
      } else {
        const genreId = category === 'action' ? 28 : 35;
        url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
      }
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <div className="sidebar">
        <button onClick={() => fetchMovies('popular')}>Popular</button>
        <button onClick={() => fetchMovies('action')}>Action</button>
        <button onClick={() => fetchMovies('comedy')}>Comedy</button>
      </div>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : 'https://via.placeholder.com/200x300?text=No+Image'
              }
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
```

### **Step 7: Refactor Code into Components**

**`Movie.js`**
```jsx
import React from 'react';

function Movie({ movie }) {
  return (
    <div className="movie">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : 'https://via.placeholder.com/200x300?text=No+Image'
        }
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
}

export default Movie;
```

### **Step 8: Add Loading and Error Handling**

**`App.js`**
```jsx
import React, { useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';

  const fetchMovies = async (category) => {
    setLoading(true);
    setError('');
    try {
      let url = '';
      if (category === 'popular') {
        url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
      } else {
        const genreId = category === 'action' ? 28 : 35;
        url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
      }
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      setError('Failed to fetch movies.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <div className="sidebar">
        <button onClick={() => fetchMovies('popular')}>Popular</button>
        <button onClick={() => fetchMovies('action')}>Action</button>
        <button onClick={() => fetchMovies('comedy')}>Comedy</button>
      </div>
      <div className="movies">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && movies.length === 0 && <p>No movies to display.</p>}
        {!loading && !error && movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default App;
```
