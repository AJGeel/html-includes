# html-includes > fetch

A fairly straightforward way to use components throughout your projects. Here's how to in three steps:

1. Ensure the `<script src="app.js" charset="utf-8"></script>` is present at the bottom of all `.html files` that <i>include</i> a component.

2. Create your `component.html` files in the same folder as your other files. For example, my full `footer.html` file could be the following:

        <p>©1994 Firstname Lastname Designs</p>

3. Add a `<footer></footer>` element on any `.html` pages you wish to include this component in.


<i>Side note: currently, only `<footer>` and `<header>` elements are supported 'out-of-the-box'. If you wish to add more components, simply copy and modify the code snippets in app.js to include your custom components.</i>


___

Here is a <b>simplified version</b> of how your final file would look:

        <!-- My portfolio -->

        <html>
        <body>

        <header></header>
        <div>Some page-speficic content goes here</p>
        <footer></footer>

        <script src="app.js" charset="utf-8"></script>

        </body>
        </html>
