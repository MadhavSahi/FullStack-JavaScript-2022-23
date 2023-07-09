const loader = document.getElementById('loader');
const postsContainer = document.getElementById('posts');

// Display the skeleton loader
function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

// Fetch data from the JSON Placeholder API
function fetchData() {
  showLoader();

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      hideLoader();
      displayPosts(data);
    })
    .catch(error => {
      hideLoader();
      console.error('Error:', error);
    });
}

function displayPosts(posts) {
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.textContent = post.title;
    postsContainer.appendChild(postElement);
  });
}

// Fetch data when the page loads
document.addEventListener('DOMContentLoaded', fetchData);
