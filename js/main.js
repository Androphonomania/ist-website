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
    "../img/download.png",
    "../img/favicon-dark.ico",
    "../img/favicon.ico",
    "../img/filter.png",
    "../img/ham.png",
    "../img/hamClose.png",
    "../img/lastpage.png",
    "../img/missingimg.png",
    "../img/newtabThick.png",
    "../img/newtabThin.png",
    "../img/nextpage.png",
    "../img/search.webp",
    "../img/searchBlack.png",
    "../img/searchMaroon.png"
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
let marqueeContent;

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
    marqueeContent = document.getElementById("homeTopMarqueeContent");

    hamMenu.hidden = true;
    searchMenu.hidden = true;
    searchInput.hidden = true;
    hamExpand1.style.display = 'none';
    hamExpand2.style.display = 'none';
    hamExpand3.style.display = 'none';

    if (marqueeContent) {
        marqueeContent.classList.add("marqueeAnim");
    }

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
        if (e.key === 'Enter' && !searchMenu.hidden) {
            commitSearch(searchInput.value)
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

const commitSearch = function (term) {
    console.log(term)
    if (term === null) {
        term = searchInput.value
    }
    if (term) {
        searchWhite.textContent = "Search results for '" + term + "'."
    } else {
        searchWhite.textContent = "No results found for '" + term + "'."
    }
}

const openSearch = function (term, button) {
    if (searchMenu.hidden) {
        searchMenu.hidden = false;
        searchInput.hidden = false;
        searchInput.className = "";
        searchInput.classList.add("animate__animated")
        searchInput.classList.add("animate__faster");
        searchInput.classList.add("animate__fadeInRight");
        searchInput.value = "";
        searchWhite.className = "";
        searchWhite.classList.add("animate__animated");
        searchWhite.classList.add("animate__faster");
        searchWhite.classList.add("animate__slideInRight");
        searchBlack.className = "";
        searchWhite.innerHTML = "Enter a search term."
        searchBlack.classList.add("hamOpenNow")
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


let tableSort = document.createElement('div');
let searchFilter = document.createElement('div');
tableSort.innerHTML = "Item 1";
searchFilter.innerHTML = '<details id="filter" name="filter">' +
'<summary><img id="filterImg" src="../img/filter.png"></summary>' +
'<div id="filterGroup">' +
    '<fieldset id="filterOptions">' +
        '<Legend>Sort:</Legend>' +
        '<h6>File Type</h6>' +
        '<div>' +
            '<input type="checkbox" id="docx" name="docx" value="Docx"/>' +
            '<label for="docx">Docx</label>' +
        '</div>' +
        '<div>' +
            '<input type="checkbox" id="PDF" name="PDF" value="PDF"/>' +
            '<label for="PDF">PDF</label>' +
        '</div>' +
        '<div>' +
            '<input type="checkbox" id="web" name="web" value="Web Page"/>' +
            '<label for="web">Web Page</label>' +
        '</div>' +
        '<div>' +
            '<input type="checkbox" id="other" name="other" value="Other"/>' +
            '<label for="other">Other</label>' +
        '</div>' +
    '</fieldset>' +
'</div>' +
'</details>';

$(document).ready(function() {
    var table = $('#mainSearchResults').DataTable({
        lengthChange: false,
        layout: {
            top2Start: 'search',
            top2End: [tableSort, searchFilter],
            topStart: 'info',
            topEnd: null,
            bottomStart: 'paging',
            bottomEnd: null    
        },
        columnDefs: [{visible:false,type:'date',targets:3}],
        
        language: {
          'paginate': {
                'previous': '<img class="paginationImg" src="../img/nextpage.png">',
                'next': '<span class="next-icon"></span>'
            }
        }
    });
    var mydiv = document.querySelector('#filterGroup');  // track event on parent element
    var selected = [];  // store selected checkbox here

    mydiv.addEventListener('change', event => {  // listen to any change

        if (event.target.type === 'checkbox') {  // is it coming from a checkbox?

            var checked = document.querySelectorAll('input[type="checkbox"]:checked'); // get all checked checkbox
            selected = Array.from(checked, (x) => x.value);  // map from the node itself to the node value

            var filterRegex = selected.join('|');  // construct regular expression for the search
            table.column(2).search(filterRegex, true, false).draw();   // do the search

        }
    });

    var mysort = document.getElementById('sort');
    mysort.addEventListener('change', event => {
        if (mysort.value == 'alpha') {
            table.order([1, 'asc']).draw();
        } else if (mysort.value == 'revAlpha') {
            table.order([1, 'desc']).draw();
        } else if (mysort.value == 'newest') {
            table.order([3,'desc']).draw();
        } else if (mysort.value == 'oldest') {
            table.order([3,'asc']).draw();
        }
    });
});

