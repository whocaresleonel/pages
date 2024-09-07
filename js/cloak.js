let favicon = document.createElement("link")
let storage
favicon.rel = "icon"

function updatecloak(){
    cloakStorage = localStorage.getItem("cloak")
    bgStorage = localStorage.getItem("backgroundColor")

    document.getElementById('html').style.background = "linear-gradient(" + bgStorage + ", black)"

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

    //Convenient changes to the homepage (in case your there) to show your previous thingys
    if (window.location.pathname == "/index.html"){
        document.getElementById("panickey").value = localStorage.getItem("panicKey")
        document.getElementById("panicurl").value = localStorage.getItem("panicUrl")
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