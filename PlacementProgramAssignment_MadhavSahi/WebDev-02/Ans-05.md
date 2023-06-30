Q.5 How is Border-box different from Content Box?

//Solution--->

The main difference between the border-box and content-box models is how they calculate the total size of an element, including its content, padding, and border.

1. border-box:
   - In the border-box model, the total size of an element is calculated by including the content width/height, padding, and border within the specified width and height.
   - This means that the padding and border are included within the specified width and height, and they do not increase the overall dimensions of the element.
   - The content area is calculated as width - (padding + border), and the total element size includes the content, padding, and border.

2. content-box:
   - The content-box model, which is the default, calculates the total size of an element by considering only the content width/height and not including padding and border.
   - In this model, the specified width and height represent only the content area, and any padding or border is added to the overall dimensions of the element.
   - The content area is calculated as the specified width and height, and the total element size includes the content, padding, and border.
