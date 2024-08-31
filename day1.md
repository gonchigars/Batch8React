## **Chapter 1: HTML & CSS Basics**

---

### **1.1 HTML Basics**

#### **1.1.1 Understanding HTML Structure**

**Concept**: HTML (HyperText Markup Language) is the backbone of any web page. It defines the structure and layout of a webpage by using a variety of elements.

**Step-by-Step Tutorial**:

1. **Start with a Basic HTML Template**:
   - Every HTML document begins with a `DOCTYPE` declaration. This helps the browser understand what type of document it's reading.
   - Create a file named `index.html` and start by adding the following template:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My First Webpage</title>
   </head>
   <body>
       <!-- Your content goes here -->
   </body>
   </html>
   ```

2. **Add a Heading and Paragraph**:
   - Headings are defined with `<h1>` to `<h6>` tags, where `<h1>` is the most important heading.
   - Paragraphs are defined with the `<p>` tag.

   ```html
   <body>
       <h1>Welcome to My Webpage</h1>
       <p>This is my first webpage created using HTML.</p>
   </body>
   ```

3. **Add a Link**:
   - Links are created using the `<a>` tag with the `href` attribute.
   - Example:

   ```html
   <p>Visit my <a href="https://www.example.com">favorite website</a> for more information.</p>
   ```

4. **Insert an Image**:
   - Images are added using the `<img>` tag with the `src` attribute.
   - Example:

   ```html
   <img src="https://www.example.com/image.jpg" alt="Sample Image">
   ```

5. **Create a List of Your Favorite Movies**:
   - Use `<ul>` for an unordered list and `<ol>` for an ordered list. Each item in the list is placed within an `<li>` tag.
   - Example:

   ```html
   <h2>My Favorite Movies</h2>
   <ul>
       <li>Inception</li>
       <li>The Matrix</li>
       <li>Interstellar</li>
   </ul>
   ```

**Exercise**:
- Using the instructions above, create a simple HTML page with a heading, a paragraph, a link to another website, an image, and a list of your favorite movies.

---

### **1.2 CSS Basics**

#### **1.2.1 Linking a CSS File to HTML**

**Concept**: CSS (Cascading Style Sheets) is used to style and layout web pages. It defines the visual look of HTML elements.

**Step-by-Step Tutorial**:

1. **Create a CSS File**:
   - In the same directory as your `index.html`, create a file named `styles.css`.

2. **Link the CSS File to Your HTML Document**:
   - Add a link to your CSS file within the `<head>` section of your HTML document.

   ```html
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My First Webpage</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   ```

#### **1.2.2 Basic CSS Styling**

3. **Change the Heading Color**:
   - In `styles.css`, target the `<h1>` tag and change its color.

   ```css
   h1 {
       color: blue;
   }
   ```

4. **Center the Text**:
   - Center the text within the `<p>` tag.

   ```css
   p {
       text-align: center;
   }
   ```

5. **Add Padding Around the Paragraph**:
   - Add some space around the paragraph text.

   ```css
   p {
       padding: 20px;
   }
   ```

#### **1.2.3 Understanding the Box Model**

6. **Apply the Box Model to an Image**:
   - The box model consists of margins, borders, padding, and the actual content.
   - Add a border, padding, and margin to the image in your HTML.

   ```css
   img {
       border: 2px solid black;
       padding: 10px;
       margin: 20px;
   }
   ```

#### **1.2.4 Layouts with Flexbox**

7. **Create a Simple Layout with Flexbox**:
   - Flexbox is a layout model that allows you to design complex layouts with ease.
   - Use Flexbox to create a layout with a header, main content area, and footer.

   ```html
   <body>
       <div class="container">
           <header class="header">Header</header>
           <main class="main">Main Content</main>
           <footer class="footer">Footer</footer>
       </div>
   </body>
   ```

   ```css
   .container {
       display: flex;
       flex-direction: column;
       height: 100vh;
   }

   .header, .footer {
       background-color: lightgray;
       padding: 20px;
       text-align: center;
   }

   .main {
       flex: 1;
       background-color: white;
       padding: 20px;
       text-align: center;
   }
   ```

**Exercise**:
- Create a CSS file and link it to your HTML file.
- Style your HTML elements: change the color of the heading, center the text, and add some padding around the paragraph.
- Use Flexbox to create a simple layout with a header, main content area, and footer.

---

### **Exercises Summary**

1. **HTML Exercise**:
   - Create a webpage with a heading, a paragraph, a link, an image, and a list of your favorite movies.

2. **CSS Exercise**:
   - Link a CSS file to your HTML page.
   - Style the heading and paragraph with colors and padding.
   - Apply the box model to an image by adding a border, padding, and margin.
   - Use Flexbox to create a basic layout with a header, main content area, and footer.

These exercises should give you a solid foundation in HTML and CSS, which are essential for creating and styling web pages.
