//counter variable for iterating userData loop 
var usr = 0;
//functionality of Submit Button
var submit = document.getElementById("submit").addEventListener("click", () => {
    userData[usr].FirstName = document.getElementById("fname").value;
    userData[usr].LastName = document.getElementById("lname").value;
    userData[usr].PhoneNumber = document.getElementById("phoneNumber").value;
    userData[usr].Profession = document.getElementById("profession").value;
    userData[usr].Address = document.getElementById("address").value;
    userData[usr].ZipCode = document.getElementById("zipCode").value;
    userData[usr].EmailId = document.getElementById("email").value;
    userData[usr].State = document.getElementById("state").value;
    RadioValue(usr);
    alert("Form Submitted Successfully");
    output();
    // usr++;
    // SessionStorage();
    redirectFunction();
    storeingLoginInfo();
    Reset();
    newUserConfirmation();
    document.getElementById("login").addEventListener("click", loggedIn);
})

//functionality of Reset Button
function Reset() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("profession").value = ""
    document.getElementById("address").value = "";
    document.getElementById("zipCode").value = "";
    document.getElementById("email").value = "";
    document.getElementById("state").value = "";
}


//functionality of Reset Button
var reset = document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("profession").value = ""
    document.getElementById("address").value = "";
    document.getElementById("zipCode").value = "";
    document.getElementById("email").value = "";
    document.getElementById("state").value = "";
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
    LastName: "",
    Gender: "",
    EmailId: "",
    Address: "",
    PhoneNumber: "",
    Profession: "",
    State: ""
}
]

//Printing in console
function output() {
    const outPut =
        `Name : ${userData[0].FirstName} ${userData[0].LastName}
    Gender: ${userData[0].Gender}
    Email Id : ${userData[0].EmailId}
    Address :$ {userData[0].Address}
    Phone number : ${userData[0].PhoneNumber}
    Profession : ${userData[0].Profession}
    State : ${userData[0].State}`
    console.log(outPut);
}


function newUserConfirmation() {
    const login = document.getElementById("container").innerHTML = "<h2>Successfully created Account </h2> <button class='login' id='login'>Login</button>";
}

function loggedIn() {
    const usrId = document.getElementById("userId").value;
    const usrPass = document.getElementById("userId").value;
    if (usrId == userData[0].usr && usrPass == userData[0].FirstName) {
        document.getElementById("container").innerHTML = `Welcome Back ${userData[0].FirstName}`
    }
}

function redirectFunction() {
    window.location.href = "/Login-page.html"
}



function storeingLoginInfo() {
    localStorage.setItem("userId", userData[0].EmailId);
    localStorage.setItem("userPass", userData[0].PhoneNumber);
}
