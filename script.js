let username = document.querySelector("#username");
let btn = document.querySelector("#searchBtn");
let result = document.querySelector("#result");

async function getUser(username) {
  try {
 
    let response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
    throw new Error("User not found");
  }
    let data = await response.json();

result.innerHTML = `
    <img src="${data.avatar_url}">
    <h2>${data.login}</h2>
    <p>Followers: ${data.followers}</p>
    <p>Repositories: ${data.public_repos}</p>
    <a href="${data.html_url}" target="_blank">GitHub Profile</a>
`;


  } catch(error) {

    result.innerHTML = `
        <div class="error">
            User not found
        </div>
    `;

    console.log(error);
}
}

btn.addEventListener("click", async function () {
  let user = username.value;

  await getUser(user);
});
