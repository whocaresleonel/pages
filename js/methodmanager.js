const head = document.getElementById("head");
const games = document.getElementById("games");

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    let currentmethod = params.get('method');

    if (currentmethod == "pdfopunblocker") {
        loadtext("PDF Op Unblocker", "What this site *was* named after! /n Okay, step 1. go to google docs click blank document. /n Step 2 paste in a url, select it, click the url icon (looks like a chain) at the top of the site. /n Step 3 go to file, download, PDF Document. (hence the name) /n Go to your files open the PDF and click the url, now your done :D /n This should work like 95% of the time, the '@PDF Exploit' has the same limitations as it but is more streamlined. /n PS: OP stands for 'One Page' meaning it unblocks one page at a time and may break when going to other sub URLs.")
    }
    if (currentmethod == "disablesecurly") {
        loadtext("Disable Securly", "I could care less if this gets patched so if you want new workarounds find em yourself. /n Before you start bookmark these tabs (If you have certain tabs from the other tutorials no need to make more): 'chrome://shorthang', 'chrome://extensions/?id=iheobagjkfklnlikgihanlhcddjoihkg', 'chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/manifest.json' OR 'chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/_generated_background_page.html' /n Very short tutorial so you can hopefully understand it. Heres some things before we start, we use chrome://shorthang because chrome://hang is disabled. When I say OR i'm saying the guide can be followed with either of the urls interchangeably (I recommend manifest.json if you can though) /n Open up your chrome-extension url and shorthang it once, now you need to do this quickly, right click the tab duplicate it and open your chrome://extension tab scroll down and click the switch. /n You need to keep being fast here, go back to your chrome-extension tab and spam shorthangs. each shorthang adds about 15-20 seconds to your 'timer' of how long your unblocked for, spam it as much as you'd want but be careful because if you spam it too much at once everything will hang and you won't be able to visit new sites, to fix this sign out and sign back into your chromebook.")
    }
    if (currentmethod == "disablegoguardian") {
        loadtext("Disable GoGuardian", "I could care less if this gets patched so if you want new workarounds find em yourself. /n Before you start bookmark these tabs (If you have certain tabs from the other tutorials no need to make more): 'chrome://shorthang', 'chrome://extensions/?id=haldlgldplgnggkjaafhelgiaglafanh', 'chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/manifest.json' OR 'chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/_generated_background_page.html' /n Very short tutorial so you can hopefully understand it. Heres some things before we start, we use chrome://shorthang because chrome://hang is disabled. When I say OR i'm saying the guide can be followed with either of the urls interchangeably (I recommend manifest.json if you can though) /n Open up your chrome-extension url and shorthang it once, now you need to do this quickly, right click the tab duplicate it and open your chrome://extension tab scroll down and click the switch. /n You need to keep being fast here, go back to your chrome-extension tab and spam shorthangs. each shorthang adds about 15-20 seconds to your 'timer' of how long your unblocked for, spam it as much as you'd want but be careful because if you spam it too much at once everything will hang and you won't be able to visit new sites, to fix this sign out and sign back into your chromebook.")
    }
    if (currentmethod == "goguardianabblocker") {
        loadtext("GoGuardian AB Blocker", "How to prevent go guardian from seeing about:blank or file urls :D /n Sorry this isn't a streamlined process, you can't really do that. /n Okay, step 1. go to chrome://extensions and scroll down til you see 'GoGuardian'. /n Note: if it doesn't appear make sure your doing this on your chromebook. not a computer logged into your account. /n Step 2 (final step), scroll down and make sure 'Allow access to file URLs' is set to false. /n Boom, your done. now goguardian can't see any tabs with both file urls or about:blank urls (classroom6x uses them)")
    }
    if (currentmethod == "kioskv3") {
        loadtext("KioskV3", "Step 1 Sign out of your chromebook. /n Step 2 Go to apps in the bottom left and open edulastic /n Step 3 Sign in with microsoft and log into your microsoft account /n Step 4 Search anything in the top right of the screen /n Step 5 Hover over 'sitemap' in the top right of the screen click 'view sitemap' scroll down and under services click 'Bing' /n Congrats, you've unblocked everything on your chromebook :)")
    }
    if (currentmethod == "kioskv4") {
        loadtext("KioskV4", "Step 1 Sign out of your chromebook. /n Step 2 Go to apps in the bottom left and open edulastic /n Step 3 Sign in with office 365 and click sign in options, click github then click docs. /n Step 4 scroll down to the bottom of the docs page and click blog. /n Step 5 scroll down to the bottom of the blog page and in the bottom right click on the github icon /n Step 6 in the search box on the top right side of the screen type in 'owner:uniub' and click enter /n Step 7 click on the one that says kioskexploiturls and click the link provided. /n Congrats :) you have unblocked your chromebook again <3")
    }
    if (currentmethod == "goguardianytbypass") {
        loadtext("Goguard YT bypass", "A quick and easy bypass for youtube that works on most versions of GoGuardian. /n Made by me :) /n !if!/methods/GGyt/index.html!if! /n !a!!d!/methods/GGyt/index.html!a!Download /n !a!!d!/methods/GGyt/dataurl.txt!a!Dataurl")
    }
    if (currentmethod == "goguardianembedbypass") {
        loadtext("Goguard embed bypass", "Simple bypass that should bypass most versions of GoGuardian (Embeddable sites only). /n Made by me :) /n !if!/methods/GGembed/index.html!if! /n !a!!d!/methods/GGembed/index.html!a!Download /n !a!!d!/methods/GGembed/dataurl.txt!a!Dataurl")
    }
    if (currentmethod == "andpdfv2") {
        loadtext("@PDF v2", "Another simple bypass but for securly, one page only. /n Made by me :) /n !if!/methods/andpdfv2/index.html!if! /n !a!!d!/methods/andpdfv2/index.html!a!Download /n !a!!d!/methods/andpdfv2/dataurl.txt!a!Dataurl")
    }
    if (currentmethod == "codns") {
        loadtext("CaNdus", "Works on some networks, but when it does its EVERYTHING /n Go to chrome://network#state /n find the wifi you are connected to. /n Press the plus by it, and copy everything inside the box that just showed up. /n Paste it inside the input on this website. /n !if!/methods/caudns/index.html!if! /n To start the exploit go to chrome://network, scroll all the way down and import kill.onc /n To turn securly back on import revive.onc /n !a!!d!/methods/caudns/index.html!a!Download")
    }
})

function loadtext(title, text){ //Don't mind the garbo code, it works 😎
    text = text.split(" /n ")
    head.innerHTML = title;
    for (let i = 0; i < text.length; i++){
        if (text[i].slice(0,3) === "!a!"){//<a>
            let href = text[i].split('!a!')[1]
            let atext = text[i].split("!a!")[2]
            let elem = document.createElement("a")
            let headerelem = document.createElement("h2")
            if (href.slice(0,3) === "!d!"){ elem.download = ""; href = href.substring(3) }
            elem.href = href
            headerelem.innerHTML = atext
            elem.setAttribute("class", "padding")
            elem.appendChild(headerelem)
            games.appendChild(elem)
        } else if(text[i].slice(0,4) === "!if!"){//<iframe>
            let src = text[i].split('!if!')[1]
            let elem = document.createElement("iframe")
            elem.src = src
            elem.setAttribute("class", "padding")
            games.appendChild(elem)
        }else{//<p>
            let elem = document.createElement("h2")
            elem.setAttribute("class", "padding")
            elem.innerHTML = text[i]
            games.appendChild(elem)
        }
    }
}