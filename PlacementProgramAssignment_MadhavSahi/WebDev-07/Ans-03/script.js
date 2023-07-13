// App.js
function createApp() {
    const appContainer = document.createElement("div");
  
    const header = createHeader();
    const pageContent = createPageContent();
    const footer = createFooter();
  
    appContainer.appendChild(header);
    appContainer.appendChild(pageContent);
    appContainer.appendChild(footer);
  
    return appContainer;
  }
  
  // Header.js
  function createHeader() {
    const header = document.createElement("header");
    header.className = "header";
  
    const logo = document.createElement("p");
    logo.className = "logo";
    logo.textContent = "GitHub User Finder App by Madhav Sahi";
  
    const author = document.createElement("p");
    author.className = "author";
    author.textContent = "MADHAV SAHI";
  
    header.appendChild(logo);
    header.appendChild(author);
  
    return header;
  }
  
  // Footer.js
  function createFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer";
  
    const createdBy = document.createElement("p");
    createdBy.className = "created-by";
    createdBy.textContent = 'Created with Love By: © "Madhav Sahi"';
  
    const socialLinks = document.createElement("div");
    socialLinks.className = "social-links";
  
    const linkedinLink = createSocialLink("https://www.linkedin.com/in/madhav-sahi-6a2305161/", "linkedin");
    const githubLink = createSocialLink("https://github.com/MadhavSahi", "github");
    const twitterLink = createSocialLink("https://twitter.com/Madhavvv_", "twitter");
    const hashnodeLink = createSocialLink("https://madhavsahi.hashnode.dev/", "hashnode");
  
    socialLinks.appendChild(linkedinLink);
    socialLinks.appendChild(githubLink);
    socialLinks.appendChild(twitterLink);
    socialLinks.appendChild(hashnodeLink);
  
    footer.appendChild(createdBy);
    footer.appendChild(socialLinks);
  
    return footer;
  }
  
  function createSocialLink(link, iconName) {
    const socialLink = document.createElement("a");
    socialLink.href = link;
    socialLink.target = "_blank";
    socialLink.rel = "noreferrer";
  
    const icon = document.createElement("i");
    icon.className = `fab fa-${iconName}`;
  
    socialLink.appendChild(icon);
  
    return socialLink;
  }
  
  // PageContent.js
  function createPageContent() {
    const pageContent = document.createElement("div");
    pageContent.className = "page-content";
  
    const home = createHome();
  
    pageContent.appendChild(home);
  
    return pageContent;
  }
  
  // Home.js
  function createHome() {
    const home = document.createElement("div");
    home.className = "home";
  
    const searchContainer = document.createElement("div");
    searchContainer.className = "search-container";
  
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Enter GitHub Username";
    searchInput.className = "search-input";
  
    const searchButton = document.createElement("button");
    searchButton.textContent = "Search";
    searchButton.className = "search-button";
  
    const userContainer = document.createElement("div");
    userContainer.className = "user-container";
  
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
  
    home.appendChild(searchContainer);
    home.appendChild(userContainer);
  
    searchButton.addEventListener("click", () => {
      const username = searchInput.value.trim();
      if (username !== "") {
        fetchUserDetails(username)
          .then((user) => {
            userContainer.innerHTML = "";
            userContainer.appendChild(createUserCard(user));
            fetchUserRepos(user.repos_url)
              .then((repos) => {
                userContainer.appendChild(createUserRepos(repos));
              })
              .catch((error) => {
                console.error(error);
                alert("Failed to fetch user repositories");
              });
          })
          .catch((error) => {
            console.error(error);
            alert("No user found for this username");
          });
      } else {
        alert("Please enter a username");
      }
    });
  
    return home;
  }
  
  // Fetch user details
  async function fetchUserDetails(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user details");
    }
  }
  
  // Fetch user repositories
  async function fetchUserRepos(reposUrl) {
    try {
      const response = await axios.get(reposUrl);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user repositories");
    }
  }
  
  // Create user card
  function createUserCard(user) {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
  
    const avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    avatar.alt = "User Avatar";
    avatar.className = "user-avatar";
  
    const username = document.createElement("h3");
    username.textContent = user.login;
    username.className = "username";
  
    const name = document.createElement("p");
    name.textContent = user.name;
    name.className = "name";
  
    const bio = document.createElement("p");
    bio.textContent = user.bio;
    bio.className = "bio";
  
    userCard.appendChild(avatar);
    userCard.appendChild(username);
    userCard.appendChild(name);
    userCard.appendChild(bio);
  
    return userCard;
  }
  
  // Create user repositories
  function createUserRepos(repos) {
    const reposContainer = document.createElement("div");
    reposContainer.className = "repos-container";
  
    const reposTitle = document.createElement("h3");
    reposTitle.textContent = "Repositories";
    reposTitle.className = "repos-title";
  
    const reposList = document.createElement("ul");
    reposList.className = "repos-list";
  
    repos.forEach((repo) => {
      const repoItem = document.createElement("li");
      repoItem.textContent = repo.name;
      repoItem.className = "repo-item";
  
      reposList.appendChild(repoItem);
    });
  
    reposContainer.appendChild(reposTitle);
    reposContainer.appendChild(reposList);
  
    return reposContainer;
  }
  
  // Render the app
  function renderApp() {
    const root = document.getElementById("root");
    root.appendChild(createApp());
  }
  
  renderApp();
  