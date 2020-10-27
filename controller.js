function login() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value != "" && password.value != "") {
    let login = document.getElementById("login");
    login.style.display = "none";
    model.loggedin = "yes";
    model.username = username.value;
    model.password = password.value;
  } else {
    model.loggedin = "no";
  }
}
