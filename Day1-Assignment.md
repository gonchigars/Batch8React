<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Modified Webpage</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <header class="header">
        <input type="text" class="name-input" placeholder="Name" />
        <button class="signin-button">Sign In</button>
      </header>
      <main class="main">
        <div class="image-placeholder">image</div>
        <div class="image-placeholder">Image</div>
      </main>
      <footer class="footer">Footer..</footer>
    </div>
  </body>
</html>


<!-- styles.css -- > body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 2px solid #ff0000;
  box-sizing: border-box;
}

.header {
  padding: 10px;
  border-bottom: 2px solid #0033ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name-input {
  width: calc(100% - 120px);
  padding: 5px;
  margin-left: 20px;
  border: 1px solid #0000ff;
}

.signin-button {
  padding: 5px 10px;
  margin-right: 20px;
  background-color: #0000ff;
  color: white;
  border: none;
  cursor: pointer;
}

.main {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.image-placeholder {
  width: 100px;
  height: 100px;
  border: 2px solid #0000ff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  padding: 10px;
  border-top: 2px solid #ff0000;
  text-align: center;
}



