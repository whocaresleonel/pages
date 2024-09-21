var baseurl = "https://" + ("%40".repeat(150)) + "@"
var urlToOpen

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const iframe = document.getElementById("gameframe");
    const fullscreenButton = document.getElementById("fullscreen");
    let currentapp = params.get('app');

    fullscreenButton.addEventListener("click", myFunction);

    function myFunction() {
     iframe.requestFullscreen()
    }

    if (currentapp == "win11") {
        urlToOpen = "/apps/win11/index.html";
        iframe.src = urlToOpen;
    } else if (currentapp == "ex") {
        urlToOpen = "/apps/ex/index.html";
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
    var embed = win.document.createElement('embed');
    embed.style.border = 'none';
    embed.style.width = '100%';
    embed.style.height = '100%';
    embed.style.margin = '0';
    embed.src = url;
    win.document.body.appendChild(embed);
}

