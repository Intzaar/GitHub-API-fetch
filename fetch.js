document.getElementById('githubForm').addEventListener('submit', function(event) {
    event.preventDefault();
    fetchdata();
});

function fetchdata(){
    const username = document.getElementById('username').value;
    if(username) {
        // Store the username in localStorage to access it on the data.html page
        localStorage.setItem('githubUsername', username);
        // Redirect to data.html
        window.location.href = 'data.html';
    } else {
        alert('Please enter a username');
    }
}
