// At least 1 alphabet

// At least 1 digit

// Contains no space

// Optional special characters e.g. @$!%*#?&^_-

// Minimum 8 characters long

function createUser() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  let password = document.getElementById("passw").value;
  let checkbox = document.getElementById("terms-condition-checkbox").checked;
  let repeatPassword = document.getElementById("repeat-password").value;

  let namePattern = /^[a-zA-Z\s]+$/;
  let nameValidate = name.match(namePattern);

  if (!nameValidate) {
    document.getElementById("sign-in-error").innerHTML =
      '<div class="alert alert-danger"><strong>Error: </strong>Invalid user name</div>';
    return;
  }

  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailValidate = email.match(emailPattern);

  if (!emailValidate) {
    document.getElementById("sign-in-error").innerHTML =
      '<div class="alert alert-danger"><strong>Error: </strong>Invalid email</div>';
    return;
  }

  let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;
  let result = password.match(passwordPattern);

  if (!result) {
    document.getElementById("sign-in-error").innerHTML =
      '<div class="alert alert-danger"><strong>Error: </strong>Password must contain Alphabets, Numbers, max length 8</div>';
    return;
  }

  if (password !== repeatPassword) {
    document.getElementById("sign-in-error").innerHTML =
      '<div class="alert alert-danger"><strong>Error: </strong>Password and Repeat should be same</div>';
    return;
  }

  if (checkbox == false) {
    document.getElementById("sign-in-error").innerHTML =
      '<div class="alert alert-danger"><strong>Error: </strong>Terms and conditions must be accepted</div>';
    return;
  }

 

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  window.location.href = "login.html";
}

function handleCheck() {
  if (localStorage.getItem("key") == 1) {
    window.location.href = "index.html";
  }
}
