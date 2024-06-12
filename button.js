document.getElementById("githubForm").addEventListener("submit", function (event) {
        event.preventDefault();
        fetchdata();
    });

function fetchdata() {
    const username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem("githubUsername", username);
        
        fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.message && data.message === "Not Found") {
                alert("No User Found");
            }    
            else{
                window.location.href = "data.html";
            }   
        })
        
    } else {
        alert("Please enter a username");
    }
}
