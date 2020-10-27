function login() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.required && password.required == true) {
    let login = document.getElementById("login");
    login.style.display = "none";
  }
  updateView();
}
