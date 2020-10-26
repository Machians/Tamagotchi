function updateView() {
    document.getElementById('container').innerHTML = `
    <div id="header">Tamagotchi</div>

    <form id="login">
        <input id="username" class="submit" type="text" minlength="1" required/>
        <input id="password" class="submit" type="password" minlength="1" required/>
        <button id="loginbutton" class="submit" onclick="login()" type="button">Log in</button>
    </form>

    <div id="window">
        <img id="creatureslot" src="/bilderogstash/egg.png"/>
    </div>

    <div id="openmenu">
        <div id="menubutton">Lagre</div>
        <div id="menubutton">Stats</div>
        <div id="menubutton">Nytt egg</div>
    </div>

    <div id="panel">
        <div id="button">Mat</div>
        <div id="button">Lek</div>
        <div id="button">Vask</div>
        <div id="button">Meny</div>
    </div>
    `;
}