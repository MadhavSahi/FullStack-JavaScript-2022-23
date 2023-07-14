//Q3. What are REST API ?

Solution--->

REST (Representational State Transfer) is an architectural style that defines a set of constraints and principles for designing networked applications. RESTful APIs (Application Programming Interfaces) are APIs that adhere to the principles of REST.

In a RESTful API, resources are represented as URLs (Uniform Resource Locators), and interactions with these resources are performed using standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE. The API follows a client-server model, where the client initiates requests to the server to perform actions on the resources.

Key characteristics of RESTful APIs include:

Stateless: Each request from the client to the server contains all the information needed to process the request. The server does not store any client state between requests, which allows for scalability and simplifies the architecture.

Uniform Interface: The API follows a uniform interface, providing a consistent way to interact with resources. This includes using standard HTTP methods, such as GET for retrieving resources, POST for creating new resources, PUT or PATCH for updating resources, and DELETE for removing resources.

Resource-Based: Resources are the key concept in RESTful APIs. Each resource is identified by a unique URL, and the API provides operations to manipulate and access these resources. Resources can be represented in different formats, such as JSON or XML.

Hypermedia-Driven: RESTful APIs can include hypermedia links within the response, allowing clients to navigate and discover related resources dynamically. Hypermedia links provide a way to decouple the client from the server's implementation details.