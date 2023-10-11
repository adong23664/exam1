const welcomeDiv = document.getElementById("WelcomeMessage");
const signInButton = document.getElementById("SignIn");
const loginSuccessMessage = document.getElementById("loginSuccessMessage");

function showWelcomeMessage(username) {
  // Reconfiguring DOM elements
  welcomeDiv.innerHTML = `Welcome ${username}`;
  signInButton.setAttribute("onclick", "signOut();");
  signInButton.setAttribute("class", "btn btn-success");
  signInButton.innerHTML = "Sign Out";
  loginSuccessMessage.style.display = "block";
}
