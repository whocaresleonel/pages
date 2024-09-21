let favicon = document.createElement("link")
let storage
favicon.rel = "icon"

function updatecloak(){
    cloakStorage = localStorage.getItem("cloak")
    autoCloakStorage = localStorage.getItem("autoCloak")
    preventLeavingSiteStorage = localStorage.getItem("leaveSiteProtection")
    bgStorage = localStorage.getItem("backgroundColor")

    document.getElementById('html').style.background = "linear-gradient(" + bgStorage + ", black)"

    if (preventLeavingSiteStorage === "true"){
        window.onbeforeunload = function() {
            return true;
        };
    }

    if (autoCloakStorage === "true") {
        let abtab = window.location.href;
        
        let win = window.open('about:blank');
        
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        
        let embed = win.document.createElement('embed');
        embed.style.border = 'none';
        embed.style.width = '100%';
        embed.style.height = '100%';
        embed.style.margin = '0';
        embed.src = abtab;
        
        win.document.body.appendChild(embed);
        
        window.close();
    }
    

    if (cloakStorage == "drive"){
        document.title = "Home - Google Drive"
        favicon.href = "/images/drive.ico"
    }
    if (cloakStorage == "docs"){
        document.title = "Google Docs"
        favicon.href = "/images/docs.ico"
    }
    if (cloakStorage == "clever"){
        document.title = "Clever"
        favicon.href = "/images/clever.ico"
    }
    if (cloakStorage == "classroom"){
        document.title = "Home"
        favicon.href = "/images/classroom.svg"
    }
    if (cloakStorage == "reset"){
        document.title = "UniUB"
        favicon.href = "/images/favicon.ico"
    }

    document.head.appendChild(favicon)
}

document.addEventListener("keydown", function(e){
    var key = e.key
    if (key == localStorage.getItem("panicKey")){
        window.location = localStorage.getItem("panicUrl")
    }
})

updatecloak()
