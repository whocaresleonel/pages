const baseurl = "https://" + ("%40".repeat(150)) + "@"
const embed = document.getElementById("gameframe");
const gameFilesUrl = "https://uniub.github.io/UniUBGamefiles" //Make sure this is a url (preferrably to a different repo, in this case "UniUBGameFiles") **END THIS WITHOUT A SLASH, IT WILL WORK WITH IT BUT WILL BE BUGGY**
var urlToOpen

if (window.location.pathname === "/pages/games.html"){
    let json = gamedata
    for (let i = 0; i < Object.keys(json).length; i++){
        let keys = Object.keys(json)
        let currentObj = json[keys[i]]
        let games = document.getElementById("gamerow");
        games.innerHTML += ("<a href='" + currentObj.pageURL + "'><div id='game'><img src='" + currentObj.imgURL + "' alt='" + currentObj.name + "'><p>" + currentObj.name + "</p></div></a>")
    }
}

async function loadGame(currentgame) {
    let json = gamedata
    let game = json[currentgame]
    window.alert(currentgame + game.srcURL + game.pageURL)
    urlToOpen = gameFilesUrl + game.srcURL
    try{
        embed.src = urlToOpen;
    }catch(error){
        window.alert("Failed to load game data please contact me with the error below or try again later. ", error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const fullscreenButton = document.getElementById("fullscreen");
    let currentgame = params.get('game');

    //No more YandereDev code :(

    if (currentgame != null){
        loadGame(currentgame)
    }
})

function andpdf(){
    var url = window.prompt("Put your url here (don't add https://www.) just have for ex 'discord.com'")

    if (url === null){
        return
    }

    window.open(baseurl + url);
}

function fixer(){
    let choice = window.prompt("about:blank or standard? (Standard has a higher chance of fixing it) 1/2")
    if (choice == 1){ openURL() }
    if (choice == 2){ window.open(urlToOpen)}
}

//This was revamped to add the gtag by chatgpt because I was in a rush (sowwy :3)

function openURL() {
    var url = urlToOpen;

    // Open a new window
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';

    // Create and append the Global Site Tag (gtag.js) script
    var gtagScript = win.document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FG22JV74V5';
    gtagScript.async = true;
    win.document.head.appendChild(gtagScript);

    // Initialize gtag and set up basic tracking
    gtagScript.onload = function() {
        var gtagInitScript = win.document.createElement('script');
        gtagInitScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FG22JV74V5');
        `;
        win.document.head.appendChild(gtagInitScript);
    };

    // Create and append the iframe
    var embed = win.document.createElement('embed');
    embed.style.border = 'none';
    embed.style.width = '100%';
    embed.style.height = '100%';
    embed.style.margin = '0';
    embed.src = url;
    win.document.body.appendChild(embed);
}

