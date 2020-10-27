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

function openmenu(clickedmenubutton) {
  let menu = document.getElementById("openmenu");
  if (clickedmenubutton.innerHTML == "Meny") {
    if (model.menuopen == "no") {
      menu.style.display = "block";
      model.menuopen = "yes";
    } else {
      menu.style.display = "none";
      model.menuopen = "no";
    }
  } else {
    let foodmenu = document.getElementById("foodmenu");
    if (model.foodmenuopen == "no") {
      foodmenu.style.display = "block";
      model.foodmenuopen = "yes";
    } else {
      foodmenu.style.display = "none";
      model.foodmenuopen = "no";
    }
  }
}
