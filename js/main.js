var preloadedImg = [];

function preload(array) {
    for (var i = 0; i < array.length; i++) {
        preloadedImg[i] = new Image();
        preloadedImg[i].src = arguments[i];
    }
}

preload(
    "../img/chev.png",
    "../img/chevW.png",
    "../img/DOE.png",
    "../img/download.png",
    "../img/facebook.png",
    "../img/favicon-dark.ico",
    "../img/favicon.ico",
    "../img/filter.png",
    "../img/ham.png",
    "../img/hamClose.png",
    "../img/instagram.png",
    "../img/lastpage.png",
    "../img/missingimg.png",
    "../img/newtabThick.png",
    "../img/newtabThin.png",
    "../img/nextpage.png",
    "../img/rsclogo.png",
    "../img/search.webp",
    "../img/searchBlack.png",
    "../img/searchMaroon.png",
    "../img/sentral.png",
    "../img/sentralP.png"
);

let icon;
let hamMenu;
let hamIcon;
let hamWhite;
let hamBlack;
let hamArrow1;
let hamArrow2;
let hamArrow3;
let hamExpand1;
let hamExpand2;
let hamExpand3;

window.onload = function () {
    icon = document.getElementById("icon");
    hamMenu = document.getElementById("hamMenu");
    hamIcon = document.getElementById("hamIconImg");
    hamWhite = document.getElementById("hamWhite");
    hamBlack = document.getElementById("hamBlack");
    hamArrow1 = document.getElementById("hamArrow1");
    hamArrow2 = document.getElementById("hamArrow2");
    hamArrow3 = document.getElementById("hamArrow3");

    hamMenu.hidden = true;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        icon.setAttribute("href", "../img/favicon-dark.ico")
    } else {
        icon.setAttribute("href", "../img/favicon.ico")
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            icon.setAttribute("href", "../img/favicon-dark.ico")
        } else {
            icon.setAttribute("href", "../img/favicon.ico")
        }
    });

    let aElements = document.getElementsByTagName("a");

    for (let a of aElements) {
        if (!a.hasAttribute("href") && !a.hasAttribute("class")) {
            a.setAttribute("href", "../html/fallback.html");
        }
    }
}

const openSearchBar = function () {
    alert("search bar opened");
}

const openHamburgerMenu = function () {
    if (hamMenu.hidden) {
        hamIcon.setAttribute("src", "../img/hamClose.png");
        hamWhite.style.opacity = 1;
        hamBlack.style.opacity = 0.3;
        hamMenu.hidden = false;
        hamExpand1 = document.getElementById("hamExpand1");
        hamExpand2 = document.getElementById("hamExpand2");
        hamExpand3 = document.getElementById("hamExpand3");
        hamExpand1.hidden = true;
        hamExpand2.hidden = true;
        hamExpand3.hidden = true;
    } else {
        hamIcon.setAttribute("src", "../img/ham.png");
        hamWhite.style.opacity = 0;
        hamBlack.style.opacity = 0;
        hamMenu.hidden = true;
    }
}

const hamAboutExpand = function () {
    alert("ham1 expanded");
}

const hamSupportExpand = function () {
    alert("ham2 expanded");
}
const hamLearnExpand = function () {
    alert("ham3 expanded");
}