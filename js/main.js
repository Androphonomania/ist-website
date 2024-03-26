// import * as ts from tween.umd.js

var preloadedImg = [];

const preload = function (array) {
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
let searchMenu;
let searchWhite;
let searchBlack;
let searchInput;

window.onload = function () {
    icon = document.getElementById("icon");
    hamMenu = document.getElementById("hamMenu");
    hamIcon = document.getElementById("hamIconImg");
    hamWhite = document.getElementById("hamWhite");
    hamBlack = document.getElementById("hamBlack");
    hamArrow1 = document.getElementById("hamArrow1");
    hamArrow2 = document.getElementById("hamArrow2");
    hamArrow3 = document.getElementById("hamArrow3");
    hamExpand1 = document.getElementById("hamExpand1");
    hamExpand2 = document.getElementById("hamExpand2");
    hamExpand3 = document.getElementById("hamExpand3");
    searchMenu = document.getElementById("searchMenu");
    searchWhite = document.getElementById("searchWhite");
    searchBlack = document.getElementById("searchBlack");
    searchInput = document.getElementById("searchInput");

    hamMenu.hidden = true;
    searchMenu.hidden = true;
    searchInput.hidden = true;
    hamExpand1.style.display = 'none';
    hamExpand2.style.display = 'none';
    hamExpand3.style.display = 'none';

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

    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && searchMenu.hidden) {
            openSearch(searchInput.value)
        }
    });
}

const openHamburgerMenu = function () {
    if (hamMenu.hidden) {
        hamIcon.setAttribute("src", "../img/hamClose.png");
        hamMenu.hidden = false;
        hamExpand1.hidden = true;
        hamExpand2.hidden = true;
        hamExpand3.hidden = true;
        hamWhite.className = "";
        hamWhite.classList.add("animate__animated");
        hamWhite.classList.add("animate__faster");
        hamWhite.classList.add("animate__slideInLeft");
        hamBlack.className = "";
        hamBlack.classList.add("hamOpenNow")
        if (!searchMenu.hidden) {
            openSearch();
        }
        setTimeout(function () {
            hamBlack.style.opacity = 0.3;
        }, 480)
    } else {
        hamIcon.setAttribute("src", "../img/ham.png");
        hamWhite.className = "";
        hamWhite.classList.add("animate__animated");
        hamWhite.classList.add("animate__faster");
        hamWhite.classList.add("animate__slideOutLeft");
        hamBlack.className = "";
        hamBlack.classList.add("hamCloseNow")
        setTimeout(function () {
            hamBlack.style.opacity = 0;
            hamMenu.hidden = true;
        }, 480)
    }
}

const hamAboutExpand = function () {
    if (hamArrow1.innerHTML === " ▾") {
        hamArrow1.innerHTML = " ▴";
        hamExpand1.style.display = 'block';
        if (hamArrow2.innerHTML === " ▴") {
            hamArrow2.innerHTML = " ▾";
            hamExpand2.style.display = 'none';
        }
        if (hamArrow3.innerHTML === " ▴") {
            hamArrow3.innerHTML = " ▾";
            hamExpand3.style.display = 'none';
        }
    } else {
        hamArrow1.innerHTML = " ▾";
        hamExpand1.style.display = 'none';
    }
}

const hamSupportExpand = function () {
    if (hamArrow2.innerHTML === " ▾") {
        hamArrow2.innerHTML = " ▴";
        hamExpand2.style.display = 'block';
        if (hamArrow1.innerHTML === " ▴") {
            hamArrow1.innerHTML = " ▾";
            hamExpand1.style.display = 'none';
        }
        if (hamArrow3.innerHTML === " ▴") {
            hamArrow3.innerHTML = " ▾";
            hamExpand3.style.display = 'none';
        }
    } else {
        hamArrow2.innerHTML = " ▾";
        hamExpand2.style.display = 'none';
    }
}
const hamLearnExpand = function () {
    if (hamArrow3.innerHTML === " ▾") {
        hamArrow3.innerHTML = " ▴";
        hamExpand3.style.display = 'block';
        if (hamArrow1.innerHTML === " ▴") {
            hamArrow1.innerHTML = " ▾";
            hamExpand1.style.display = 'none';
        }
        if (hamArrow2.innerHTML === " ▴") {
            hamArrow2.innerHTML = " ▾";
            hamExpand2.style.display = 'none';
        }
    } else {
        hamArrow3.innerHTML = " ▾";
        hamExpand3.style.display = 'none';
    }
}

const openSearch = function (term, button) {
    if (term === null) {
        term = searchInput.value
    }
    if (searchMenu.hidden) {
        console.log(term)
        searchMenu.hidden = false;
        searchInput.hidden = false;
        searchInput.className = "";
        searchInput.classList.add("animate__animated")
        searchInput.classList.add("animate__faster");
        searchInput.classList.add("animate__fadeInRight");
        searchWhite.className = "";
        searchWhite.classList.add("animate__animated");
        searchWhite.classList.add("animate__faster");
        searchWhite.classList.add("animate__slideInRight");
        searchBlack.className = "";
        searchBlack.classList.add("hamOpenNow")
        if (term) {
            searchWhite.innerHTML = "Search results for '" + term + "'."
        } else {
            searchWhite.innerHTML = "No results found for '" + term + "'."
        }
        if (!hamMenu.hidden) {
            openHamburgerMenu();
        }
        setTimeout(function () {
            searchBlack.style.opacity = 0.3;
        }, 480)
    } else {
        if (!button) {
            searchInput.className = "";
            searchInput.classList.add("animate__animated");
            searchInput.classList.add("animate__faster");
            searchInput.classList.add("animate__fadeOutRight");
            searchWhite.className = "";
            searchWhite.classList.add("animate__animated");
            searchWhite.classList.add("animate__faster");
            searchWhite.classList.add("animate__slideOutRight");
            searchBlack.className = "";
            searchBlack.classList.add("hamCloseNow")
            setTimeout(function () {
                searchBlack.style.opacity = 0;
                searchMenu.hidden = true;
            }, 480)
        }
    }
    return false;
}