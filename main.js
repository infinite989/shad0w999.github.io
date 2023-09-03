window.addEventListener("load", linkshit);
window.addEventListener("load", deviceChecker);
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
   else if (Text[Text.length - 1] == "bots")
   {
    window.location = "https://grannythedev.github.io/bots.html";
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
   else if (window.location.pathname == "/bots.html")
   {
     let tab = document.getElementById("bots");
     if (tab != null)
     {
       tab.style.color = "#0000FF";
     }
   }
}

window.addEventListener("DOMContentLoaded", (event) => {
let skrillbotbtn = document.getElementById("skrillbot");
if (skrillbotbtn != null)
{
  skrillbotbtn.addEventListener("click", skrillbot);
}
let hotjennybtn = document.getElementById("hotjennybot");
if (hotjennybtn != null)
{
  hotjennybtn.addEventListener("click", hotjenny);
}
let grannybtn = document.getElementById("granny");
if (grannybtn != null)
{
  grannybtn.addEventListener("click", grannyclick);
}
let serverbtn = document.getElementById("serverfile");
if (serverbtn != null)
{
  serverbtn.addEventListener("click", serverclick);
}
let gamebtn = document.getElementById("gamefile");
if (gamebtn != null)
{
  gamebtn.addEventListener("click", gameclick);
}
let scripthunrepobtn = document.getElementById("scripthubrepo");
if (scripthunrepobtn != null)
{
  scripthunrepobtn.addEventListener("click", scripthunrepoclick);
}
let cookieclickerbtn = document.getElementById("cookieclicker");
if (cookieclickerbtn != null)
{
  cookieclickerbtn.addEventListener("click", cookieclickerclick);
}
});

function skrillbot()
{
window.open('https://discord.com/api/oauth2/authorize?client_id=1057012274117746768&permissions=8&scope=bot');  
}

function hotjenny()
{
window.open('https://discord.com/api/oauth2/authorize?client_id=998895254734393344&permissions=8&scope=bot');  
}

function grannyclick()
{
  window.open('https://drive.google.com/file/d/1-GkHe0bTHhD3apS94tCeM2NXg1xOlAyJ/view?usp=drivesdk')
}

function serverclick()
{
  window.open('https://drive.google.com/file/d/1-6IeG_lKDlIpLYhSjHnJChnQm4Qa8Km2/view?usp=drivesdk')
}

function gameclick()
{
  window.open('https://drive.google.com/file/d/1-5UMRAxQC-RIyS0-0pu0DQjKYW1KZhee/view?usp=drivesdk')
}

function scripthunrepoclick()
{
  window.open('https://github.com/GrannyTheDev/skrilly')
}

function cookieclickerclick()
{
  window.open('https://grannythedev.github.io/CookieClicker')
}

function tabFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function isMobile()
{
const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
return regex.test(navigator.userAgent);
}
function deviceChecker()
{
if (isMobile())
{
if (document.getElementById("pctopnav") != null)
{
let pctopnav = document.getElementById("pctopnav");
pctopnav.style.display = "none";
}
if (document.getElementById("topnav") != null)
{
let mobiletopnav = document.getElementById("topnav");
mobiletopnav.style.display = "block";
}
}
else if (!isMobile())
{
if (document.getElementById("pctopnav") != null)
{
let pctopnav = document.getElementById("pctopnav");
pctopnav.style.display = "block";
}
if (document.getElementById("topnav") != null)
{
let mobiletopnav = document.getElementById("topnav");
mobiletopnav.style.display = "none";
}
}
}
