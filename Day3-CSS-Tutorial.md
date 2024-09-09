# Step-by-Step HTML and CSS Tutorial

## Step 1: Basic HTML Structure

Let's start with a basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Website</title>
    <style>
        /* We'll add our CSS here */
    </style>
</head>
<body>
    <div class="App">
        <!-- We'll add our content here -->
    </div>
</body>
</html>
```

## Step 2: App Container

Add the following CSS to the `<style>` tag:

```css
.App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
```

This creates a flex container that takes up at least the full height of the viewport.

## Step 3: Header

Add the header HTML inside the `<div class="App">`:

```html
<header>
    <div class="header-content">
        <div class="logo-container">
            <img src="logo.png" alt="Logo" class="logo">
        </div>
        <h1>Movie Website</h1>
    </div>
</header>
```

Now add the corresponding CSS:

```css
header {
    background-color: #282c34;
    padding: 20px;
    color: white;
}

.header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.logo-container {
    margin-right: 20px;
}

.logo {
    width: 50px;
    height: 50px;
}
```

## Step 4: Content Wrapper

Add the content wrapper HTML after the `<header>`:

```html
<div class="content-wrapper">
    <!-- We'll add sidebar and main content here -->
</div>
```

Add the CSS:

```css
.content-wrapper {
    display: flex;
    flex: 1;
}
```

## Step 5: Sidebar

Inside the content wrapper, add the sidebar HTML:

```html
<aside class="sidebar">
    <nav>
        <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
        </ul>
    </nav>
</aside>
```

Add the CSS:

```css
.sidebar {
    width: 100px;
    background-color: #f0f0f0;
    padding: 20px;
}
```

## Step 6: Main Content Area

After the sidebar, add the main content HTML:

```html
<main>
    <div class="movie-grid">
        <!-- We'll add movie cards here -->
    </div>
</main>
```

Add the CSS:

```css
main {
    flex: 1;
    padding: 20px;
}

.movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}
```

## Step 7: Movie Cards

Inside the `<div class="movie-grid">`, add some movie cards:

```html
<div class="movie-card">
    <img src="movie1.jpg" alt="Movie 1">
    <h3>Movie Title 1</h3>
    <p>Release Year: 2023</p>
</div>
<div class="movie-card">
    <img src="movie2.jpg" alt="Movie 2">
    <h3>Movie Title 2</h3>
    <p>Release Year: 2022</p>
</div>
<!-- Add more movie cards as needed -->
```

Add the CSS for movie cards:

```css
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

## Step 8: Footer

After the `</div>` closing the content wrapper, add the footer HTML:

```html
<footer>
    <p>&copy; 2023 Movie Website. All rights reserved.</p>
</footer>
```

Add the CSS:

```css
footer {
    background-color: #282c34;
    padding: 10px;
    color: white;
    text-align: center;
}
```

## Final Result

Your complete HTML should look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Website</title>
    <style>
        /* All the CSS we've added throughout the tutorial goes here */
    </style>
</head>
<body>
    <div class="App">
        <header>
            <div class="header-content">
                <div class="logo-container">
                    <img src="logo.png" alt="Logo" class="logo">
                </div>
                <h1>Movie Website</h1>
            </div>
        </header>
        <div class="content-wrapper">
            <aside class="sidebar">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>TV Shows</li>
                    </ul>
                </nav>
            </aside>
            <main>
                <div class="movie-grid">
                    <div class="movie-card">
                        <img src="movie1.jpg" alt="Movie 1">
                        <h3>Movie Title 1</h3>
                        <p>Release Year: 2023</p>
                    </div>
                    <div class="movie-card">
                        <img src="movie2.jpg" alt="Movie 2">
                        <h3>Movie Title 2</h3>
                        <p>Release Year: 2022</p>
                    </div>
                    <!-- Add more movie cards as needed -->
                </div>
            </main>
        </div>
        <footer>
            <p>&copy; 2023 Movie Website. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
```

This tutorial provides a step-by-step guide to creating the HTML structure and applying the CSS styles. You can save this as an HTML file and open it in a web browser to see the result. Remember to replace the image sources (`logo.png`, `movie1.jpg`, etc.) with actual image files for a complete visual experience.
