Q.9 Explain Class in JavaScript?

Solution--->

In JavaScript, a class serves as a blueprint or template for creating objects with predefined properties and methods. It was introduced in ECMAScript 2015 (ES6) to facilitate object-oriented programming (OOP) in JavaScript.

1. Class declaration: Classes are declared using the `class` keyword followed by the name of the class. For example, `class MyClass { }` declares a class named `MyClass`.

2. Constructor method: Within a class, the `constructor` method is a special method used to initialize objects created from the class. It is automatically invoked when a new object is instantiated from the class.

3. Properties and methods: Class members, including properties and methods, are defined within the class body. Properties represent the data or state of an object, while methods define the behavior or actions that objects can perform.

4. Object instantiation: Objects are created from a class using the `new` keyword followed by the class name and parentheses. For example, `let obj = new MyClass();` creates a new object `obj` based on the `MyClass` class.

5. Inheritance: JavaScript classes support inheritance through the `extends` keyword. Subclasses can be created by extending a base class, inheriting its properties and methods. The `super` keyword is used to call the superclass's constructor and access its methods.

6. Prototype-based nature: JavaScript's class implementation is based on prototypes. Each class and its instances have an associated prototype object, which enables inheritance and sharing of behavior.