// Maximum number of blog posts to display
const MAX_POSTS = 20;

// Fetch blog posts from the API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const blogContainer = document.getElementById("blogContainer");

    // Reverse the order of the posts array
    posts.reverse();

    // Display the latest blog posts in the container
    const latestPosts = posts.slice(0, MAX_POSTS);
    latestPosts.forEach((post) => {
      const postElement = createPostElement(post);
      blogContainer.appendChild(postElement);
    });
  });

// Function to create a new blog post element
function createPostElement(post) {
  const postElement = document.createElement("div");
  postElement.setAttribute("data-post-id", post.id);
  postElement.className = "blogPost";
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <button onclick="deletePost(${post.id})">Delete</button>
  `;
  return postElement;
}

// Function to add a new blog post
function addPost(event) {
  event.preventDefault();

  const titleInput = document.getElementById("titleInput");
  const contentInput = document.getElementById("contentInput");

  const newPost = {
    title: titleInput.value,
    body: contentInput.value,
  };
  const blogContainer = document.getElementById("blogContainer");
  const existingPosts = blogContainer.getElementsByClassName("blogPost");
  const newPostElement = createPostElement(newPost);
  if (existingPosts.length >= MAX_POSTS) {
    blogContainer.removeChild(existingPosts[existingPosts.length - 1]);
  }
  if (existingPosts.length > 0) {
    blogContainer.insertBefore(newPostElement, existingPosts[0]);
  } else {
    blogContainer.appendChild(newPostElement);
  }
  titleInput.value = "";
  contentInput.value = "";
}

// Function to delete a blog post
function deletePost(postId) {
  const postElement = document.querySelector(`[data-post-id="${postId}"]`);
  postElement.style.display = "none";
}

// Attach the addPost function to the form's submit event
const newBlogForm = document.getElementById("newBlogForm");
newBlogForm.addEventListener("submit", addPost);
