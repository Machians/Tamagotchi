function updateView() {
  document.getElementById("container").innerHTML = `
    <div id="header">Tamaguccii</div>

    <div id="login">
        <input id="username" class="submit" type="text" placeholder="Brukernavn" required/>
        <input id="password" class="submit" type="password" placeholder="Passord" required/>
        <button id="loginbutton" onclick="login()" class="submit">Log in</button>
    </div>

    <div id="window">
        <img id="creatureslot" src="/bilderogstash/egg.png"/>
        <img id="leke" src="/bilderogstash/leke.png"/>
        <img id="hjerte" src="/bilderogstash/hjerte.png"/>
    </div>

    <div id="openmenu" >
        <div id="menubutton">Lagre</div>
        <div id="menubutton">Stats</div>
        <div id="menubutton" onclick="newegg()">Nytt egg</div>
    </div>

    <div id="foodmenu" >
        <div id="menubutton">Rødbete</div>
        <div id="menubutton">Salat</div>
    </div>

    <div id="panel">
        <div id="button" onclick="openmenu(this)">Mat</div>
        <div id="button" onclick="play()">Lek</div>
        <div id="button" onclick="wash()">Vask</div>
        <div id="button" onclick="openmenu(this)">Meny</div>
    </div>

    <img id="vask" src="/bilderogstash/vask.png"/>
    <img id="glitter1" class="glitter" src="/bilderogstash/glitter1.png"/>
    <img id="glitter2" class="glitter" src="/bilderogstash/glitter2.png"/>
    `;
}
