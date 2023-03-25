//counter variable for iterating userData loop 
var usr = 0;
//functionality of Submit Button
var submit = document.getElementById("submit").addEventListener("click", () => {
    userData[usr].FirstName = document.getElementById("fname").value;
    userData[usr].PhoneNumber = document.getElementById("phoneNumber").value;
    userData[usr].EmailId = document.getElementById("email").value;

    RadioValue(usr);
    alert("Form Submitted Successfully");
    output();
    // usr++;
    // SessionStorage();
    storeingLoginInfo();
    redirectFunction();
    Reset();
    newUserConfirmation();
    document.getElementById("login").addEventListener("click", loggedIn);
})

//functionality of Reset Button
function Reset() {
    document.getElementById("fname").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
}


//functionality of Reset Button
var reset = document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("fname").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
})

//function for getting input of radio 
function RadioValue(usr) {
    var RadioValue = document.getElementsByName('gender');

    for (i = 0; i < RadioValue.length; i++) {
        if (RadioValue[i].checked) {
            userData[usr].Gender = RadioValue[i].value;
        }

    }
}


const userData = [{
    usr: 0,
    FirstName: "",
    EmailId: "",
    PhoneNumber: "",
}
]

//Printing in console
function output() {
    const outPut =
        `Name : ${userData[0].FirstName} ${userData[0].LastName}
    Gender: ${userData[0].Gender}
    Email Id : ${userData[0].EmailId}
    Phone number : ${userData[0].PhoneNumber}`;
    console.log(outPut);
}


function newUserConfirmation() {
    const login = document.getElementById("container").innerHTML = "<h2>Successfully created Account</h2> <button class='login' id='login'>Login</button>";
}

function loggedIn() {
    const usrId = document.getElementById("userId").value;
    const usrPass = document.getElementById("userId").value;
    if (usrId == userData[0].usr && usrPass == userData[0].FirstName) {
        document.getElementById("container").innerHTML = `Welcome Back ${userData[0].FirstName}`;
    }
}

function redirectFunction() {
    window.location.href = "Login-page.html"
}



function storeingLoginInfo() {
    localStorage.setItem("userId", userData[0].EmailId);
    localStorage.setItem("userPass", userData[0].PhoneNumber);
}