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
2. Run the following command to start the development server:
   ```
   npm start
   ```
3. Your default web browser should automatically open and display your React app at `http://localhost:3000`.

You should now see your React app with the Header, Body, and Footer components rendered on the page.
