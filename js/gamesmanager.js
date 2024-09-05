var baseurl = "https://" + ("%40".repeat(150)) + "@"
var urlToOpen

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const iframe = document.getElementById("gameframe");
    const fullscreenButton = document.getElementById("fullscreen");
    let currentgame = params.get('game');

    fullscreenButton.addEventListener("click", myFunction);

    function myFunction() {
     iframe.requestFullscreen()
    }

    if (currentgame == "2048") {
        urlToOpen = "/gamefiles/2048/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "cell-machine") {
        urlToOpen = "/gamefiles/cell-machine/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "death-run-3d") {
        urlToOpen = "/gamefiles/death-run-3d/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "doodle-jump") {
        urlToOpen = "/gamefiles/doodle-jump/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "just-one-boss") {
        urlToOpen = "/gamefiles/just-one-boss/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "krunker") {
        urlToOpen = "/gamefiles/krunker/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "learntofly") {
        urlToOpen = "/gamefiles/learntofly/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "minecraft-classic") {
        urlToOpen = "/gamefiles/minecraft-classic/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "wordle") {
        urlToOpen = "/gamefiles/wordle/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "worlds-hardest-game") {
        urlToOpen = "/gamefiles/worlds-hardest-game/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "minecraft-1.5.2") {
        urlToOpen = "/gamefiles/mc152/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "minecraft-1.8.8") {
        urlToOpen = "/gamefiles/mc188/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "bitlife") {
        urlToOpen = "/gamefiles/bitlife/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "retrobowl") {
        urlToOpen = "/gamefiles/retrobowl/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "awesome-tanks-2") {
        urlToOpen = "/gamefiles/awesometanks2/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "1v1lol") {
        urlToOpen = "/gamefiles/1v1lol/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "webosu") {
        urlToOpen = "/gamefiles/webosu/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "sansbattlesimulator") {
        urlToOpen = "/gamefiles/sansbattlesimulator/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "suikagame") {
        urlToOpen = "/gamefiles/suikagame/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "fnf") {
        urlToOpen = "/gamefiles/fnf/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "sandboxels") {
        urlToOpen = "/gamefiles/sandboxels/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "slope") {
        urlToOpen = "/gamefiles/slope/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "cookie-clicker") {
        urlToOpen = "/gamefiles/cookie-clicker/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "mrmine") {
        urlToOpen = "/gamefiles/mrmine/index.html";
        iframe.src = urlToOpen;
    } else if (currentgame == "geometry-dash") {
        urlToOpen = "/gamefiles/geometry-dash-lite/index.html";
        iframe.src = urlToOpen;
    } 
})

function andpdf(){
    var url = window.prompt("Put your url here (don't add https://www.) just have for ex 'discord.com'")

    if (url === null){
        return
    }

    window.open(baseurl + url);
}



//This was revamped to add the gtag by chatgpt because I was in a rush (sowwy :3)

function openURL() {
    var url = "https://uniub.github.io" + urlToOpen;

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
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

