Q.1 What is a Media Query in CSS, and what is its purpose?

//Solution--->

A media query in CSS is a feature that allows you to conditionally apply CSS styles based on certain characteristics of the user's device or viewport. It provides a powerful tool for creating responsive web designs that can adapt to different screen sizes, resolutions, and device capabilities.

The purpose of media queries is to enable the creation of flexible and adaptive layouts that can accommodate a wide range of devices, from desktop computers to mobile phones. By using media queries, you can define specific CSS rules that will only apply when certain conditions are met.

Media queries are typically written using the @media rule in CSS. 

Example:

@media (max-width: 768px) {
  /* CSS rules for screens with a maximum width of 768 pixels */
  /* Adjust the layout, font sizes, or any other styles as needed */
}

@media (min-width: 1200px) {
  /* CSS rules for screens with a minimum width of 1200 pixels */
  /* Modify the layout, font sizes, or any other styles as necessary */
}

The first media query targets screens with a maximum width of 768 pixels, which is typically used to style mobile devices or smaller screens. 
The second media query targets screens with a minimum width of 1200 pixels, often used for larger screens or desktops. Within each media query, you can specify CSS rules that will be applied only when the specified condition is met.
