Q.10 What’s Super Keyword & What it does?

Solution--->

The `super` keyword in JavaScript is utilized to invoke functions or access properties of a parent class from within a subclass. It plays a crucial role in referencing and calling the constructor, methods, and properties of the superclass.

1. Invoking the superclass's constructor: Within the constructor of a subclass, the `super()` function is employed to call the constructor of the parent class. This ensures that the subclass inherits and initializes the properties defined in the superclass. It is important to note that the `super()` call must be made before accessing `this` within the subclass's constructor.

2. Accessing the superclass's methods: The `super` keyword allows the subclass to invoke methods defined in the parent class. By utilizing `super.methodName()`, the subclass can call and override the methods of the parent class while still retaining access to their original functionality.

3. Accessing the superclass's properties: Similarly, the `super` keyword provides access to the properties defined in the parent class. Through `super.propertyName`, the subclass can refer to and modify the inherited properties from the superclass.

4. Usage in static methods: The `super` keyword can also be used in static methods to reference the static methods or properties of the superclass. This enables subclasses to access and override the static members of the parent class.
