let username = document.getElementById('username');
let password = document.getElementById('password');

if (username.valid && password.valid == true) {
    function login() {
        let login = document.getElementById('login');
        login.style.display = "none";
        model.username = username;
        model.password = password;
        console.log(model.username);
    } 
    }else login.style.display ="flex";