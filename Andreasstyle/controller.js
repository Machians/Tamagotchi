function login() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value != "" && password.value != "") {
    let login = document.getElementById("login");
    login.style.display = "none";
    model.loggedin = "yes";
    model.users.username = username.value;
    model.users.password = password.value;
    model.firstlogin = dateandtime();
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
  let egg = randomegg();
  creatureslot.setAttribute("src", egg);
  model.useranimals.growtstage = "egg";
  model.useranimals.birthdate = dateandtime();
  model.album[0] = egg;
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

function dateandtime() {
  var date = new Date();
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();

  let h = date.getHours();
  let min = date.getMinutes();
  let s = date.getSeconds();

  return d + "." + m + "." + y + " " + h + ":" + min + ":" + s;
}

function wash() {
  let vask = document.getElementById("vask");
  let glitter1 = document.getElementById("glitter1");
  let glitter2 = document.getElementById("glitter2");
  model.useranimals.lastplay = dateandtime();
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
  let hjerte = document.getElementById("hjerte");
  model.useranimals.lastplay = dateandtime();
  leke.style.display = "block";
  hjerte.style.display = "none";
  setTimeout(function () {
    hjerte.style.display = "block";
  }, 3000);

  setTimeout(function () {
    leke.style.display = "none";
  }, 4000);

  setTimeout(function () {
    hjerte.style.display = "none";
  }, 4500);
}

function grow() {}

function randombaby() {
  var babies = new Array(
    "/bilderogstash/babydelfin.png",
    "/bilderogstash/babyrev.png",
    "/bilderogstash/babysel.png"
  );
  var random = Math.floor(Math.random() * 3);
  return babies[random];
}
async function savegame() {
  $.ajax({
    type: "POST",
    url: "updateuseradb.php",
    data: model.useranimals,
    success: function (data) {
      alert(data);
    },
  });
  getData();
}
