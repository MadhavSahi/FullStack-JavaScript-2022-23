Q.5 What is the purpose of the orientation media feature?

//Solution--->

The orientation media feature serves the purpose of targeting and adapting to the orientation of a device's viewport, specifically whether it is in a portrait or landscape orientation. It provides a way to apply different CSS styles or rules based on the orientation, allowing you to optimize the layout and presentation of your web page accordingly.

The orientation media feature has two possible values:

portrait: This value targets devices in a vertical or portrait orientation, where the height of the viewport is greater than the width. This is typically the default orientation for most devices.

landscape: This value targets devices in a horizontal or landscape orientation, where the width of the viewport is greater than the height.

By utilizing the orientation media feature, you can create responsive designs that adapt to the device's orientation, ensuring a seamless user experience across various screen sizes and orientations. Here's an example of how you can use the orientation media feature in a media query:

@media (orientation: portrait) {
  /* CSS rules for devices in portrait orientation */
  /* Adjust the layout, font sizes, or any other styles as needed */
}

@media (orientation: landscape) {
  /* CSS rules for devices in landscape orientation */
  /* Modify the layout, font sizes, or any other styles as needed */
}
In the above example, two media queries are defined based on the orientation media feature. The CSS rules within each media query block will be applied when the device's orientation matches the specified value.
For instance, if a device is in portrait mode, the styles defined within the @media (orientation: portrait) block will be applied. Similarly, if the device is in landscape mode, the styles within the @media (orientation: landscape) block will be applied.