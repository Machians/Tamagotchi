function updateView() {
  document.getElementById("container").innerHTML = `
    <div id="header">Tamagotchi</div>

    <div id="login">
        <input id="username" class="submit" type="text" placeholder="Brukernavn" required/>
        <input id="password" class="submit" type="password" placeholder="Passord" required/>
        <button id="loginbutton" onclick="login()" class="submit">Log in</button>
    </div>

    <div id="window">
        <img id="creatureslot" src="/bilderogstash/egg.png"/>
    </div>

    <div id="openmenu" >
        <div id="menubutton">Lagre</div>
        <div id="menubutton">Stats</div>
        <div id="menubutton">Nytt egg</div>
    </div>

    <div id="foodmenu" >
        <div id="menubutton">Rødbete</div>
        <div id="menubutton">Salat</div>
    </div>

    <div id="panel">
        <div id="button" onclick="openmenu(this)">Mat</div>
        <div id="button">Lek</div>
        <div id="button">Vask</div>
        <div id="button" onclick="openmenu(this)">Meny</div>
    </div>
    `;
}
