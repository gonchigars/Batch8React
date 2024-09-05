# React App Tutorial: Creating an App with Header, Body, and Footer Components

## Step 1: Set up the React app

1. Open your terminal and navigate to the directory where you want to create your project.
2. Run the following command to create a new React app:
   ```
   npx create-react-app my-react-app
   ```
3. Once the installation is complete, navigate into the project folder:
   ```
   cd my-react-app
   ```

## Step 2: Create the components

1. In the `src` folder, create a new folder called `components`.
2. Inside the `components` folder, create three new files: `Header.js`, `Body.js`, and `Footer.js`.

3. In `Header.js`, add the following code:
   ```jsx
   import React from 'react';

   function Header() {
     return (
       <header>
         <h1>Welcome to My React App</h1>
       </header>
     );
   }

   export default Header;
   ```

4. In `Body.js`, add the following code:
   ```jsx
   import React from 'react';

   function Body() {
     return (
       <main>
         <p>This is the main content of the app.</p>
       </main>
     );
   }

   export default Body;
   ```

5. In `Footer.js`, add the following code:
   ```jsx
   import React from 'react';

   function Footer() {
     return (
       <footer>
         <p>&copy; 2024 My React App. All rights reserved.</p>
       </footer>
     );
   }

   export default Footer;
   ```

## Step 3: Import components into App.js

1. Open `src/App.js` and replace its contents with the following code:
   ```jsx
   import React from 'react';
   import Header from './components/Header';
   import Body from './components/Body';
   import Footer from './components/Footer';
   import './App.css';

   function App() {
     return (
       <div className="App">
         <Header />
         <Body />
         <Footer />
       </div>
     );
   }

   export default App;
   ```

## Step 4: Run the program

1. In your terminal, make sure you're in the project directory (`my-react-app`).

Change App.css and see what happens
```
.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  background-color: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
}

```

Great! You've successfully implemented the CSS changes I suggested. Let's break down what each part of the CSS is doing:

1. `.App`:
   - `display: flex` and `flex-direction: column` create a vertical flex container.
   - `min-height: 100vh` ensures the container is at least as tall as the viewport.

2. `header`:
   - Styles the header with a dark background and white text.

3. `main`:
   - `flex: 1` allows it to grow and take up all available space between the header and footer.

4. `footer`:
   - Styled similarly to the header, but positioned at the bottom due to the flex layout.

This layout creates a sticky footer effect, where the footer stays at the bottom even if the content is short, and it will be pushed down if the content is longer than the viewport height.

Is there anything else you'd like to modify or add to your React app? For example, we could add some content to the main section or style the components further.

You should now see your React app with the Header, Body, and Footer components rendered on the page.
