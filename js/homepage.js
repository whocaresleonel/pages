// MANY THINGS HAVE BEEN MOVED Please check /pages/settings.html to find everything that has been moved.

const titleElem = document.getElementById("title")
let settingsDoc = document.getElementById("settingsdoc").contentDocument

// Initial stuffs
const changelogelem = document.getElementById("changelog");
let changelogopen = false

function changelog(){
    if (changelogopen){
        changelogelem.style.opacity = 0
        changelogelem.style.transform = "translateY(9999px)"
        changelogopen = false
        return
    } else{
        changelogelem.style.opacity = 1
        changelogelem.style.transform = "translateY(0px)"
        changelogopen = true
    }
}

if (localStorage.getItem("extendedName") == 'true'){
    titleElem.innerHTML = "Universal UB"
} else{
    titleElem.innerHTML = "Uni UB"
}
//