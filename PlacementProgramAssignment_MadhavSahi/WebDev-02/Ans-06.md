Q.6 What’s z-index and How does it Function ?

//Solution--->

In CSS, the z-index property is used to control the stacking order of positioned elements on a webpage. It specifies the order in which elements are stacked or layered on top of each other along the z-axis, which is perpendicular to the screen.
The z-index property accepts integer values and determines the priority of an element in relation to other elements. Elements with a higher z-index value will appear in front of elements with a lower value.
Example:
div {
  position: relative;
  z-index: 2;
}

p {
  position: relative;
  z-index: 1;
}

In this example, the div element will be stacked above the p element because it has a higher z-index value. 
If two elements have the same z-index value, the stacking order will depend on their position in the HTML markup.
Additionally, the z-index property only applies within the stacking context of its parent element. If an element is contained within another element with a different stacking context, the z-index values of the parent elements will determine the stacking order.
