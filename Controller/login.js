function logIn() {
  let signInName = document.getElementById("email");
  let signInPass = document.getElementById("pass");

  let namekey = localStorage.getItem("email");
  let passkey = localStorage.getItem("password");

  if ((signInName.value === namekey) & (signInPass.value === passkey)) {
    localStorage.setItem("key", 1);
    window.location.href = "index.html";
  } else {
    alert("Wrong Credential");
  }
}

// alreday login Handle//
function handleCheck() {
  if (localStorage.getItem("key") == 1) {
    window.location.href = "index.html";
  }
}
