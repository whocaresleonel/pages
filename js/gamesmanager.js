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
        iframe.src = "/gamefiles/2048/index.html";
    } else if (currentgame == "cell-machine") {
        iframe.src = "/gamefiles/cell-machine/index.html";
    } else if (currentgame == "death-run-3d") {
        iframe.src = "/gamefiles/death-run-3d/index.html";
    } else if (currentgame == "doodle-jump") {
        iframe.src = "/gamefiles/doodle-jump/index.html";
    } else if (currentgame == "just-one-boss") {
        iframe.src = "/gamefiles/just-one-boss/index.html";
    } else if (currentgame == "krunker") {
        iframe.src = "/gamefiles/krunker/index.html";
    } else if (currentgame == "learntofly") {
        iframe.src = "/gamefiles/learntofly/index.html";
    } else if (currentgame == "minecraft-classic") {
        iframe.src = "/gamefiles/minecraft-classic/index.html";
    } else if (currentgame == "wordle") {
        iframe.src = "/gamefiles/wordle/index.html";
    } else if (currentgame == "worlds-hardest-game") {
        iframe.src = "/gamefiles/worlds-hardest-game/index.html";
    } else if (currentgame == "minecraft-1.5.2") {
        iframe.src = "/gamefiles/mc152/index.html";
    } else if (currentgame == "minecraft-1.8.8") {
        iframe.src = "/gamefiles/mc188/index.html";
    } else if (currentgame == "bitlife") {
        iframe.src = "/gamefiles/bitlife/index.html";
    } else if (currentgame == "retrobowl") {
        iframe.src = "/gamefiles/retrobowl/index.html";
    } else if (currentgame == "awesome-tanks-2") {
        iframe.src = "/gamefiles/awesometanks2/index.html";
    } else if (currentgame == "1v1lol") {
        iframe.src = "/gamefiles/1v1lol/index.html";
    } else if (currentgame == "webosu") {
        iframe.src = "/gamefiles/webosu/index.html";
    } else if (currentgame == "sansbattlesimulator") {
        iframe.src = "/gamefiles/sansbattlesimulator/index.html";
    } else if (currentgame == "suikagame") {
        iframe.src = "/gamefiles/suikagame/index.html";
    } else if (currentgame == "fnf") {
        iframe.src = "/gamefiles/fnf/index.html";
    }
})