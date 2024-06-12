let favicon = document.createElement("link")
let storage
favicon.rel = "icon"

function updatecloak(){
    storage = localStorage.getItem("cloak")
    if (storage == "drive"){
        document.title = "Home - Google Drive"
        favicon.href = "/images/drive.ico"
    }
    if (storage == "docs"){
        document.title = "Google Docs"
        favicon.href = "/images/docs.ico"
    }
    if (storage == "clever"){
        document.title = "Clever"
        favicon.href = "/images/clever.ico"
    }
    if (storage == "classroom"){
        document.title = "Home"
        favicon.href = "/images/classroom.svg"
    }
    if (storage == "reset"){
        document.title = "UniUB"
        favicon.href = "/images/favicon.ico"
    }
    document.head.appendChild(favicon)
}

updatecloak()