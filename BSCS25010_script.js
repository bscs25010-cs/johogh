
function greet() {

    alert("Welcome to Luxe Rides!!!");
}

const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

function availability(id) {

    let check = document.getElementById(id).textContent;
    if (check.includes("In Stock")){
        alert("Item is in Stock.");
    } else {
        alert("Item is out of stock.");
    }
}


// function validateForm() {

//     let name = document.forms["myForm"]["name"].value;
//     let email = document.forms["myForm"]["email"].value;
//     let message = document.forms["myForm"]["message"].value;

//     if (name == ** || email == ** || message == **) {
//         alert("All fields must be filled.");
//         return false;
//     }
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!emailPattern.test(email)) {
//         alert("Please enter a valid email address.");
//         return false;
//     }
//     return true;


// }

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }
    alert("Form submitted successfully!");
    document.querySelector("form").reset();
    return false;
}