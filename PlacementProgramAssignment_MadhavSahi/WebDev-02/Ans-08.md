Q.8 Difference between absolute and relative and sticky and fixed position explain with example.

//Solution--->

1. Absolute Position:
   When an element is set to absolute position, it is positioned relative to its nearest positioned ancestor. If there is no positioned ancestor, it is positioned relative to the initial containing block (the browser window). The element is then taken out of the normal flow of the document, meaning other elements will not be affected by its position.

Example:
html

<style>
  .container {
    position: relative;
    height: 200px;
    width: 200px;
  }

  .absolute-box {
    position: absolute;
    top: 50px;
    left: 50px;
    height: 100px;
    width: 100px;
    background-color: red;
  }
</style>

<div class="container">
  <div class="absolute-box"></div>
</div>

In this example, the .absolute-box element is positioned absolutely relative to its .container ancestor. It is offset 50 pixels from the top and left edges of the container.

2. Relative Position:
   Relative position is similar to absolute position in that it allows you to position an element relative to its normal position. However, unlike absolute position, the element still occupies space in the normal flow of the document. Other elements will be positioned as if the element were still in its original position.

Example:
html

<style>
  .relative-box {
    position: relative;
    top: 50px;
    left: 50px;
    height: 100px;
    width: 100px;
    background-color: blue;
  }
</style>

<div class="relative-box"></div>

In this example, the .relative-box element is positioned relatively by offsetting it 50 pixels from the top and left edges of its original position.

3. Sticky Position:
   Sticky position is a hybrid of both relative and fixed positions. When an element is set to sticky, it behaves like a relatively positioned element until the user scrolls to a specific threshold. At that point, it becomes fixed relative to its nearest scrolling ancestor or the viewport if there is no scrolling ancestor.

Example:
html

<style>
  .sticky-box {
    position: sticky;
    top: 50px;
    height: 100px;
    width: 100px;
    background-color: green;
  }
</style>

<div class="sticky-box"></div>

In this example, the .sticky-box element is initially positioned relative to its normal position. However, when the user scrolls the page and the box reaches the top position (50 pixels from the top of the viewport), it becomes fixed and sticks to that position as the user continues to scroll.

4. Fixed Position:
   Fixed position is similar to absolute position, but it is always positioned relative to the viewport, regardless of scrolling. The element is taken out of the normal flow of the document and stays in the same position even if the user scrolls the page.

Example:
html

<style>
  .fixed-box {
    position: fixed;
    top: 50px;
    right: 50px;
    height: 100px;
    width: 100px;
    background-color: yellow;
  }
</style>

<div class="fixed-box"></div>

In this example, the .fixed-box element is positioned fixed to the top-right corner of the screen, regardless of scrolling.
