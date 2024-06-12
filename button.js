document.getElementById("githubForm").addEventListener("submit", function (event) {
        event.preventDefault();
        fetchdata();
    });

function fetchdata() {
    const username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem("githubUsername", username);
        window.location.href = "data.html";
        
    } else {
        alert("Please enter a username");
    }
}
