const userEmail = [];
const userPass = [];
var userCount = 0;
let email;
let name;
let pass;
var searchIndex = 0;

//submit button function
const submit = document.getElementById('submit').addEventListener("click", () => {
    email = document.getElementById('email').value;
    name = document.getElementById('name').value;
    pass = document.getElementById('password').value;
    userEmail.push(email);
    userPass.push(pass);
    userPass.push(name);
    alert('Form Submitted Successfully');
    userCount++;
    console.log(email, name, pass);
    window.location.href = "Login-page.html";
});
//login button function
const login = document.getElementById('login').addEventListener('click', () => {
    window.location.href = "Login-page.html";
})

//login query

//authenticating user
