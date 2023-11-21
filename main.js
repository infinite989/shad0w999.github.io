window.addEventListener("load", linkshit);
window.addEventListener("load", loadDeviceSettings);
function linkshit()
{
   const path = window.location.href.split("/")
   const Text = path[path.length - 1].split('?')
   if (Text[Text.length - 1] == "home")
   {
     window.location = "https://grannythedev.github.io";
   }
   else if (Text[Text.length - 1] == "android")
   {
     window.location = "https://grannythedev.github.io/androidmods.html";
   }
   else if (Text[Text.length - 1] == "ios")
   {
     window.location = "https://grannythedev.github.io/iOSApps.html";
   }
   else if (Text[Text.length - 1] == "save")
   {
     window.location = "https://grannythedev.github.io/SaveFiles.html";
   }
   if (window.location.pathname == "/index.html")
   {
     let tab = document.getElementById("home");
     if (tab != null)
     {
       tab.style.color = "#0000FF";
     }
   }
   else if (window.location.pathname == "/androidmods.html")
   {
     let tab = document.getElementById("android");
     if (tab != null)
     {
       tab.style.color = "#0000FF";
     }
   }
   else if (window.location.pathname == "/iOSApps.html")
   {
     let tab = document.getElementById("ios");
     if (tab != null)
     {
       tab.style.color = "#0000FF";
     }
   }
   else if (window.location.pathname == "/SaveFiles.html")
   {
     let tab = document.getElementById("save");
     if (tab != null)
     {
       tab.style.color = "#0000FF";
     }
   }
}

window.addEventListener("DOMContentLoaded", (event) => {
let grannybtn = document.getElementById("granny");
if (grannybtn != null)
{
  grannybtn.addEventListener("click", grannyclick);
}
let scripthubrepobtn = document.getElementById("scripthubrepo");
if (scripthubrepobtn != null)
{
  scripthubrepobtn.addEventListener("click", scripthubrepoclick);
}
let cookieclickerbtn = document.getElementById("cookieclicker");
if (cookieclickerbtn != null)
{
  cookieclickerbtn.addEventListener("click", cookieclickerclick);
}
});

function grannyclick()
{
  window.open('https://drive.google.com/file/d/1-GkHe0bTHhD3apS94tCeM2NXg1xOlAyJ/view?usp=drivesdk')
}

function scripthubrepoclick()
{
  window.open('https://skrill.glitch.me')
}

function cookieclickerclick()
{
  window.open('https://grannythedev.github.io/CookieClicker')
}
