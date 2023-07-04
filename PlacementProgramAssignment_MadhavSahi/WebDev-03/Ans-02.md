Q.2 How do you define a media query in CSS?

//Solution--->

In CSS, you can define a media query using the @media rule. A media query allows you to apply specific CSS styles or rules based on certain conditions related to the user's device or viewport. Media queries play a crucial role in creating responsive web designs that adapt to different screen sizes and devices.

The syntax for a media query is as follows:
@media mediaType and (mediaFeature) {
  /* CSS rules or styles to be applied */
}


Certainly! Here's a revised version:

In CSS, you can define a media query using the @media rule. A media query allows you to apply specific CSS styles or rules based on certain conditions related to the user's device or viewport. Media queries play a crucial role in creating responsive web designs that adapt to different screen sizes and devices.

The syntax for a media query is as follows:

css
Copy code
@media mediaType and (mediaFeature) {
  /* CSS rules or styles to be applied */
}
mediaType specifies the type of media for which the styles should apply. Common media types include screen, print, speech, and all. The most commonly used media type is screen, which targets devices with screens such as computers and mobile devices.

mediaFeature represents a specific condition or characteristic of the user's device or viewport. Media features include properties like width, height, min-width, max-width, orientation, resolution, and more. These features allow you to target specific screen sizes, aspect ratios, resolutions, and other properties.

Example of a media query that targets screens with a maximum width of 768 pixels:

@media (max-width: 768px) {
  /* CSS rules for screens with a maximum width of 768 pixels */
  /* Adjust the layout, font sizes, or any other styles as needed */
}

In this example, the media query is defined with the max-width media feature, specifying a maximum width of 768 pixels. The CSS rules within the media query block will only be applied when the condition is met, which is when the screen width is 768 pixels or less.

You can also combine multiple media features using logical operators such as and, or, and not to create more complex conditions. Here's an example:

@media (min-width: 768px) and (max-width: 1200px) {
  /* CSS rules for screens with a width between 768px and 1200px */
  /* Adjust the layout, font sizes, or any other styles as needed */
}
In this case, the media query targets screens with a width between 768 pixels and 1200 pixels.