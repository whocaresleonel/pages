const head = document.getElementById("head");
const games = document.getElementById("games");

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    let currentmethod = params.get('method');

    if (currentmethod == "pdfopunblocker") {
        loadtext("PDF Op Unblocker", "What this site *was* named after!/nOkay, step 1. go to google docs click blank document./nStep 2 paste in a url, select it, click the url icon (looks like a chain) at the top of the site./nStep 3 go to file, download, PDF Document. (hence the name)/nGo to your files open the PDF and click the url, now your done :D/nThis should work like 95% of the time, the '@PDF Exploit' has the same limitations as it but is more streamlined./nPS: OP stands for 'One Page' meaning it unblocks one page at a time and may break when going to other sub URLs.")
    }
    if (currentmethod == "disablesecurly") {
        loadtext("Disable Securly", "I could care less if this gets patched so if you want new workarounds find em yourself./nBefore you start bookmark these tabs (If you have certain tabs from the other tutorials no need to make more): 'chrome://shorthang', 'chrome://extensions/?id=iheobagjkfklnlikgihanlhcddjoihkg', 'chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/manifest.json' OR 'chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/_generated_background_page.html'/nVery short tutorial so you can hopefully understand it. Heres some things before we start, we use chrome://shorthang because chrome://hang is disabled. When I say OR i'm saying the guide can be followed with either of the urls interchangeably (I recommend manifest.json if you can though)/nOpen up your chrome-extension url and shorthang it once, now you need to do this quickly, right click the tab duplicate it and open your chrome://extension tab scroll down and click the switch./nYou need to keep being fast here, go back to your chrome-extension tab and spam shorthangs. each shorthang adds about 15-20 seconds to your 'timer' of how long your unblocked for, spam it as much as you'd want but be careful because if you spam it too much at once everything will hang and you won't be able to visit new sites, to fix this sign out and sign back into your chromebook.")
    }
    if (currentmethod == "disablegoguardian") {
        loadtext("Disable GoGuardian", "I could care less if this gets patched so if you want new workarounds find em yourself./nBefore you start bookmark these tabs (If you have certain tabs from the other tutorials no need to make more): 'chrome://shorthang', 'chrome://extensions/?id=haldlgldplgnggkjaafhelgiaglafanh', 'chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/manifest.json' OR 'chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/_generated_background_page.html'/nVery short tutorial so you can hopefully understand it. Heres some things before we start, we use chrome://shorthang because chrome://hang is disabled. When I say OR i'm saying the guide can be followed with either of the urls interchangeably (I recommend manifest.json if you can though)/nOpen up your chrome-extension url and shorthang it once, now you need to do this quickly, right click the tab duplicate it and open your chrome://extension tab scroll down and click the switch./nYou need to keep being fast here, go back to your chrome-extension tab and spam shorthangs. each shorthang adds about 15-20 seconds to your 'timer' of how long your unblocked for, spam it as much as you'd want but be careful because if you spam it too much at once everything will hang and you won't be able to visit new sites, to fix this sign out and sign back into your chromebook.")
    }
    if (currentmethod == "goguardianabblocker") {
        loadtext("GoGuardian AB Blocker", "How to prevent go guardian from seeing about:blank or file urls :D/nSorry this isn't a streamlined process, you can't really do that./nOkay, step 1. go to chrome://extensions and scroll down til you see 'GoGuardian'./nNote: if it doesn't appear make sure your doing this on your chromebook. not a computer logged into your account./nStep 2 (final step), scroll down and make sure 'Allow access to file URLs' is set to false./nBoom, your done. now goguardian can't see any tabs with both file urls or about:blank urls (classroom6x uses them)")
    }
    if (currentmethod == "kioskv3") {
        loadtext("KioskV3", "Step 1 Sign out of your chromebook./nStep 2 Go to apps in the bottom left and open edulastic/nStep 3 Sign in with microsoft and log into your microsoft account/nStep 4 Search anything in the top right of the screen/nStep 5 Hover over 'sitemap' in the top right of the screen click 'view sitemap' scroll down and under services click 'Bing'/nCongrats, you've unblocked everything on your chromebook :)")
    }
    if (currentmethod == "kioskv4") {
        loadtext("KioskV4", "Step 1 Sign out of your chromebook./nStep 2 Go to apps in the bottom left and open edulastic/nStep 3 Sign in with office 365 and click sign in options, click github then click docs./nStep 4 scroll down to the bottom of the docs page and click blog./nStep 5 scroll down to the bottom of the blog page and in the bottom right click on the github icon/nStep 6 in the search box on the top right side of the screen type in 'owner:uniub' and click enter/nStep 7 click on the one that says kioskexploiturls and click the link provided./nCongrats :) you have unblocked your chromebook again <3")
    }
})

function loadtext(title, text){
    text = text.split("/n")
    console.log(text)
    head.innerHTML = title;
    for (let i = 0; i < text.length; i++){
        let elem = document.createElement("h2")
        elem.setAttribute("class", "padding")
        elem.innerHTML = text[i]
        games.appendChild(elem)
    }
}