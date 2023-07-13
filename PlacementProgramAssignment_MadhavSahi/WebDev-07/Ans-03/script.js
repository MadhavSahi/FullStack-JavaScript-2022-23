// Header.js
function createHeader() {
    const header = document.createElement("div");
    header.className = "flex flex-row justify-between bg-black";
  
    const titleLink = document.createElement("p");
    titleLink.className = "mt-3 text-blue-300 text-2xl ml-10";
    const title = document.createElement("a");
    title.href = "/";
    title.textContent = "GitHub User Finder App by Madhav Sahi";
    titleLink.appendChild(title);
  
    const author = document.createElement("p");
    author.className = "text-white mt-5 text-2xl mr-10";
    author.textContent = "MADHAV SAHI";
  
    header.appendChild(titleLink);
    header.appendChild(author);
  
    return header;
  }
  
  // Footer.js
  function createFooter() {
    const footer = document.createElement("div");
    footer.className = "flex flex-row justify-around flex-wrap bg-black sticky mt-[400px] bottom-0 w-full";
  
    const createdBy = document.createElement("p");
    createdBy.className = "text-white text-3xl p-5";
    createdBy.textContent = 'Created with Love By : © "Madhav Sahi"';
  
    const socialIcons = document.createElement("div");
    socialIcons.className = "flex flex-row justify-around";
  
    const linkedinIcon = createSocialIcon("https://www.linkedin.com/in/madhav-sahi-6a2305161/", "BsLinkedin");
    const githubIcon = createSocialIcon("https://twitter.com/Madhavvv_", "BsGithub");
    const twitterIcon = createSocialIcon("https://github.com/MadhavSahi", "BsTwitter");
    const hashnodeIcon = createSocialIcon("https://madhavsahi.hashnode.dev/", "SiHashnode");
  
    socialIcons.appendChild(linkedinIcon);
    socialIcons.appendChild(githubIcon);
    socialIcons.appendChild(twitterIcon);
    socialIcons.appendChild(hashnodeIcon);
  
    footer.appendChild(createdBy);
    footer.appendChild(socialIcons);
  
    return footer;
  }
  
  function createSocialIcon(link, iconClass) {
    const iconLink = document.createElement("a");
    iconLink.target = "_blank";
    iconLink.rel = "noreferrer";
    iconLink.href = link;
    iconLink.className = "text-white text-2xl mr-5 mt-1 p-5 hover:scale-x-125 hover:scale-y-105";
  
    const icon = document.createElement("i");
    icon.className = iconClass;
  
    iconLink.appendChild(icon);
  
    return iconLink;
  }
  
  // PageNotFound.js
  function createPageNotFound() {
    const notFound = document.createElement("p");
    notFound.textContent = "Page not found";
  
    return notFound;
  }
  
  // UserCard.js
  function createUserCard(userDetails) {
    const userCard = document.createElement("div");
    userCard.className = "flex flex-col items-center mt-10 gap-3";
  
    const userImage = document.createElement("img");
    userImage.className = "rounded-lg h-60 w-60";
    userImage.alt = "user-avatar";
    userImage.src = userDetails.avatar_url;
  
    const userName = createUserInfo("bg-cyan-500 px-5 text-2xl text-black", userDetails.name);
    const userLocation = createUserInfo("bg-yellow-300 px-5 text-2xl text-black", userDetails.location);
    const userBio = createUserInfo("bg-red-400 px-5 text-2xl text-black", userDetails.bio);
    const userHireable = createUserInfo("text-2xl text-black", "Is Available for Hiring ? : " + (userDetails.hireable ? "Yes" : "No"));
    const userFollowers = createUserInfo("text-2xl text-black", "Number of Followers : " + userDetails.followers);
    const userFollowing = createUserInfo("text-2xl text-black", "Number of Followings : " + userDetails.following);
    const userRepos = createUserInfo("text-2xl text-black", "Number of Public Repos : " + userDetails.public_repos);
  
    userCard.appendChild(userImage);
    userCard.appendChild(userName);
    userCard.appendChild(userLocation);
    userCard.appendChild(userBio);
    userCard.appendChild(userHireable);
    userCard.appendChild(userFollowers);
    userCard.appendChild(userFollowing);
    userCard.appendChild(userRepos);
  
    return userCard;
  }
  
  function createUserInfo(className, text) {
    const info = document.createElement("p");
    info.className = className;
    info.textContent = text;
  
    return info;
  }
  
  // UserRepos.js
  function createUserRepos(userRepos, userDetails) {
    const reposContainer = document.createElement("div");
    reposContainer.className = "flex flex-col items-center gap-5 mt-10";
  
    const reposTitle = createUserInfo("bg-pink-400 px-5 mb-5 text-3xl text-black", userDetails.name + " REPOS :-");
    reposContainer.appendChild(reposTitle);
  
    userRepos.forEach((repo) => {
      const repoContainer = document.createElement("div");
      repoContainer.className = "flex flex-col items-center mt-5";
  
      const repoLink = document.createElement("a");
      repoLink.href = "https://github.com/" + repo.full_name;
      repoLink.target = "_blank";
      repoLink.rel = "noreferrer";
  
      const repoName = createUserInfo("bg-cyan-500 font-semibold px-5 text-2xl text-black", repo.name);
      repoLink.appendChild(repoName);
  
      repoContainer.appendChild(repoLink);
      reposContainer.appendChild(repoContainer);
    });
  
    return reposContainer;
  }
  
  // App.js
  function createApp() {
    const appContainer = document.createElement("div");
  
    const header = createHeader();
    const pageContent = document.createElement("div");
    const footer = createFooter();
  
    const homePage = createHomePage();
  
    pageContent.appendChild(homePage);
  
    appContainer.appendChild(header);
    appContainer.appendChild(pageContent);
    appContainer.appendChild(footer);
  
    return appContainer;
  }
  
  // Home.js
function createHomePage() {
  const homePageContainer = document.createElement("div");
  homePageContainer.className = "flex flex-col items-center home-page";

  const searchSection = createSearchSection();
  homePageContainer.appendChild(searchSection);

  return homePageContainer;
}

function createSearchSection() {
  const searchSection = document.createElement("div");
  searchSection.className = "flex flex-row justify-center gap-3 mt-40 p-2";

  const searchLabel = document.createElement("p");
  searchLabel.className = "text-2xl text-black bg-gray-400 p-3";
  searchLabel.textContent = "Enter GitHub User Name :";

  const searchInput = document.createElement("input");
  searchInput.className = "text-2xl text-black border-2 pl-5 border-black";
  searchInput.type = "text";
  searchInput.placeholder = "Enter UserName";

  const submitButton = document.createElement("button");
  submitButton.className = "px-2 text-lg text-white bg-blue-600 hover:scale-95 font-semibold rounded-md";
  submitButton.textContent = "SUBMIT";
  submitButton.addEventListener("click", fetchDetails);

  searchSection.appendChild(searchLabel);
  searchSection.appendChild(searchInput);
  searchSection.appendChild(submitButton);

  return searchSection;
}

async function fetchDetails() {
  const query = document.querySelector("input").value;
  try {
    const response = await axios.get(`https://api.github.com/users/${query}`);
    const data = response.data;
    const userCard = createUserCard(data);
    const userRepos = createUserRepos(data.repos, data);
    const homePageContainer = document.querySelector(".home-page");
    homePageContainer.innerHTML = "";
    homePageContainer.appendChild(userCard);
    homePageContainer.appendChild(userRepos);
  } catch (error) {
    console.error(error);
    alert("No user found for this username");
  }
}

function renderApp() {
  const root = document.getElementById("root");
  root.appendChild(createApp());
}

renderApp();