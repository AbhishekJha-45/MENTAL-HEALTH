const userId = localStorage.getItem("userId");
const userPass = localStorage.getItem("userPass");

//user input data variables declaration
let inputUserId, inputUserPass;

//Login button function
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", () => {
    inputUserId = document.getElementById("userId").value;
    inputUserPass = document.getElementById("userPass").value;
    authenticateLogin();
})

function authenticateLogin() {
    console.log(inputUserId, inputUserPass);
    if (inputUserId == userId && inputUserPass == userPass) {
        document.getElementById("container").innerText = "Successfully Logged In ";
        alert("Login Successful");
        window.location.href = "/Dashboard.html";
    } else if (inputUserId != userId || inputUserPass != userPass) {
        // document.getElementById("container").innerText = "Not logged in yet";
        alert("Wrong attemp");
    }
}

//cancel button function
const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", () => {
    //navigating back to previous page
    window.history.go(-1);
})