// Retrieve the username from localStorage and display it
const username = localStorage.getItem("githubUsername");
const result = document.getElementById("result");
if (username) {
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.message && data.message === "Not Found") {
                result.innerHTML = "<p> User not found ! </p>";
            } else {
                const data1 = `
                
                <div class="container">
                    <div>
                        <h1>${username}</h1><br/>
                        <div id="pfp">
                            <a href="${data.html_url}" target="_blank"><img src="${data.avatar_url}" alt="${data.login}"></a>
                        </div>
                        <div class="content">
                            <p class="info"><strong>Name : </strong> ${data.name}</p>
                            <p class="info"><strong>Username : </strong> ${data.login}</p>
                            <p class="info"><strong>Followers : </strong> ${data.followers}</p>
                            <p class="info"><strong>Following :</strong> ${data.following}</p>
                            <p class="info"><strong>Public Repositories : </strong> ${data.public_repos}</p>
                        </div>
                    </div>
                </div>
`;
                result.innerHTML = data1;
            }
        })
        .catch((error) => {
            console.error("Error", error);
            result.innerHTML = "<p>Facing error while fetching data </p>";
        });
}
