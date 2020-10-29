function login() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value != "" && password.value != "") {
    let login = document.getElementById("login");
    login.style.display = "none";
    model.loggedin = "yes";
    model.username = username.value;
    model.password = password.value;
    model.firstlogin = today();
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

function newegg() {
  let creatureslot = document.getElementById("creatureslot");

  if (
    creatureslot.getAttribute("src") == "/bilderogstash/egg.png" ||
    "/bilderogstash/egg2.png" ||
    "/bilderogstash/egg3.png"
  ) {
    let egg = randomegg();
    creatureslot.setAttribute("src", egg);
    model.growstage = "egg";
    model.birthdate = today();
    model.album[0] = egg;
  }
}

function randomegg() {
  var eggs = new Array(
    "/bilderogstash/egg.png",
    "/bilderogstash/egg2.png",
    "/bilderogstash/egg3.png"
  );
  var randomegg = Math.floor(Math.random() * 3);
  return eggs[randomegg];
}

function today() {
  var today = new Date();
  today.setDate(today.getDate());
  return today;
  // var date = new Date();
  // let d = date.getDate();
  // let m = date.getMonth() + 1;
  // let y = date.getFullYear();

  // let h = date.getHours();
  // let min = date.getMinutes();
  // let s = date.getSeconds();

  // return d + "." + m + "." + y + " " + h + ":" + min + ":" + s;
}

function tomorrow() {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}

function wash() {
  let vask = document.getElementById("vask");
  let glitter1 = document.getElementById("glitter1");
  let glitter2 = document.getElementById("glitter2");
  model.lastbath = today();
  // wash animation:
  vask.style.display = "block";
  glitter1.style.display = "none";
  glitter2.style.display = "none";

  setTimeout(function () {
    vask.style.display = "none";
    glitter1.style.display = "block";
    glitter2.style.display = "none";
  }, 499);
  setTimeout(function () {
    glitter1.style.display = "none";
    glitter2.style.display = "block";
  }, 1000);
  setTimeout(function () {
    glitter1.style.display = "block";
    glitter2.style.display = "block";
  }, 1250);
  setTimeout(function () {
    glitter1.style.display = "none";
    glitter2.style.display = "none";
  }, 2000);
}

function play() {
  let leke = document.getElementById("leke");
  let leke2 = document.getElementById("leke2");
  let hjerte = document.getElementById("hjerte");
  model.lastplay = today();
  leke.style.display = "block";
  leke2.style.display = "block";
  hjerte.style.display = "none";
  setTimeout(function () {
    hjerte.style.display = "block";
  }, 3000);

  setTimeout(function () {
    leke.style.display = "none";
    leke2.style.display = "none";
  }, 4000);

  setTimeout(function () {
    hjerte.style.display = "none";
  }, 4500);
}

function feed(food) {
  var mat = food.innerHTML;
  let valgtmat = document.getElementById(mat);
  valgtmat.style.display = "block";
  setTimeout(function () {
    valgtmat.style.display = "none";
  }, 1500);
  model.lastfeeding = today();
}
