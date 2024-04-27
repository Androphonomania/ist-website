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
    "../img/homeSlide1.png",
    "../img/homeSlide2.png",
    "../img/homeSlide3.png",
    "../img/homeSlide4.png",
    "../img/homeSlide5.png",
    "../img/homeSlide6.png",
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
//let searchMenu;
let searchWhite;
let searchBlack;
let searchInput;
let marqueeContent;
let homeSlideImg;
let homeSlideInfo;
let homeSlideButtonList;
let homeLink1;
let homeLink2;
let homeLink3;
let homeLink4;
let homeLink5;
let homeLink6;
let homeLinkInfo1;
let homeLinkInfo2;
let homeLinkInfo3;
let homeLinkInfo4;
let homeLinkInfo5;
let homeLinkInfo6;
let contactMapDiv;
let contactOpenMap;
let homeSlideLeft;
let homeSlideRight;
let homeSlideButton;

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
    //searchMenu = document.getElementById("searchMenu");
    searchWhite = document.getElementById("searchWhite");
    searchBlack = document.getElementById("searchBlack");
    searchInput = document.getElementById("searchInput");
    marqueeContent = document.getElementById("homeTopMarqueeContent");
    homeSlideImg = document.getElementById("homeSlideImg");
    homeSlideInfo = document.getElementById("homeSlideInfo");
    homeLink1 = document.getElementById("homeLink1");
    homeLink2 = document.getElementById("homeLink2");
    homeLink3 = document.getElementById("homeLink3");
    homeLink4 = document.getElementById("homeLink4");
    homeLink5 = document.getElementById("homeLink5");
    homeLink6 = document.getElementById("homeLink6");
    homeLinkInfo1 = document.getElementById("homeLinkInfo1");
    homeLinkInfo2 = document.getElementById("homeLinkInfo2");
    homeLinkInfo3 = document.getElementById("homeLinkInfo3");
    homeLinkInfo4 = document.getElementById("homeLinkInfo4");
    homeLinkInfo5 = document.getElementById("homeLinkInfo5");
    homeLinkInfo6 = document.getElementById("homeLinkInfo6");
    contactMapDiv = document.getElementById("contactMapDiv");

    homeSlideButtonList = {
        1: document.getElementById("homeSlideButton1"),
        2: document.getElementById("homeSlideButton2"),
        3: document.getElementById("homeSlideButton3"),
        4: document.getElementById("homeSlideButton4"),
        5: document.getElementById("homeSlideButton5"),
        6: document.getElementById("homeSlideButton6")
    };

    hamMenu.hidden = true;
    //searchMenu.hidden = true;
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

    let timer2;

    const hover1 = function (element) {
        element.addEventListener('mouseenter', function () {
            element.className = ""
            element.classList.add("homeSlideGlow")
            let potentialArrow = document.querySelector(("#" + element.id + " img"))
            if (potentialArrow) {
                potentialArrow.className = ""
                potentialArrow.classList.add("homeSlideArrowBig")
            }
            if (timer2) {
                timer2 = "";
            }
            timer2 = setTimeout(function () {
                element.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                if (potentialArrow) {
                    potentialArrow.style.width = "2.5vw";
                }
                timer2 = ""
            }, 160)
        })
        element.addEventListener('mouseleave', function () {
            element.className = ""
            element.classList.add("homeSlideUnglow");
            let potentialArrow = document.querySelector(("#" + element.id + " img"))
            if (potentialArrow) {
                potentialArrow.className = ""
                potentialArrow.classList.add("homeSlideArrowSmall")
            }
            if (timer2) {
                timer2 = "";
            }
            timer2 = setTimeout(function () {
                element.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
                if (potentialArrow) {
                    potentialArrow.style.width = "2vw";
                }
                timer2 = ""
            }, 160)
        })
    }

    let timer3;

    const hover2 = function (element) {
        element.addEventListener('mouseenter', function () {
            element.className = "homeLinkInfo"
            element.classList.add("homeInfoFadeIn")
            if (timer3) {
                timer3 = "";
            }
            timer3 = setTimeout(function () {
                element.classList.add("homeInfoFadeInComplete");
                timer3 = ""
            }, 270)
        })
        element.addEventListener('mouseleave', function () {
            element.className = "homeLinkInfo"
            element.classList.add("homeInfoFadeOut");
            if (timer3) {
                timer3 = "";
            }
            timer3 = setTimeout(function () {
                element.classList.add("homeInfoFadeOutComplete");
                timer3 = "";
            }, 270)
        })
    }

    if (homeSlideInfo) {
        hover1(document.getElementById("homeSlideLeftArrow"));
        hover1(document.getElementById("homeSlideRightArrow"));
        hover1(homeSlideInfo);
    
        hover2(homeLinkInfo1);
        hover2(homeLinkInfo2);
        hover2(homeLinkInfo3);
        hover2(homeLinkInfo4);
        hover2(homeLinkInfo5);
        hover2(homeLinkInfo6);
    }

    /*searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !searchInput.hidden) {
            commitSearch(searchInput.value)
        }
    });*/

    if (contactMapDiv) {
        contactMapDiv.hidden = true
        contactOpenMap = function () {
            if (contactMapDiv.hidden === true) {
                contactMapDiv.hidden = false
            } else {
                contactMapDiv.hidden = true
            }
        }
    }

    if (homeSlideImg) {
        let homeSlideImgList = {
            1: "../img/homeSlide1.png",
            2: "../img/homeSlide2.png",
            3: "../img/homeSlide3.png",
            4: "../img/homeSlide4.png",
            5: "../img/homeSlide5.png",
            6: "../img/homeSlide6.png"
        };
        
        let homeSlideInfoList = {
            1: `<strong>DIVERSITY</strong>
            <p><br />With an enrolment of over 1400 students, RSC is a co-educational high school with an academically selective cohort, a gifted and talented stream, mainstream classes and a Special Education Unit for students with special  needs. 70% of students come from multi-lingual backgrounds. Diversity is a major characteristic of RSC.</p>`,
            2: `<strong>SPORT</strong>
            <p>All students have the opportunity to participate in Swimming, Athletics and Cross Country carnivals as well as Inter School activities.<br /><br />Tuesday Sport includes a wide range of Grade and House Summer Sports, Winter Sports and Social Sports.</p>`,
            3: `<strong>STUDENT LEADERSHIP</strong>
            <p>Opportunities for school leadership exist within our team of twelve prefects and four captains. The positions are elected by both the students and staff.<br /><br />Our captains lead our prefect body and manage our regular College Assembly program.</p>`,
            4: `<strong>ACADEMIC EXCELLENCE</strong>
            <p>At Ryde Secondary College our students are proudly continuing our tradition of academic excellence.<br /><br />Your son or daughter will thrive in our vibrant college where they will be challenged and engaged by a diverse curriculum rich in traditional and innovative disciplines.</p>`,
            5: `<strong>COLLEGE TOURS</strong>
            <p>College tours are available throughout the year, generally once per month. Please contact the school to make a booking for the next available tour.<br /><br />Click here for more information on the dates of the tours or contact us on 9809 4894 to book a tour date with us.</p>`,
            6: `<strong>OPPORTUNITY</strong>
            <p>We have a wide range of opportunities for students to participate in activities, competitions and performance at Ryde Secondary College.<br /><br />We provide more than 100 co-curricular activities to students. These create opportunities to develop a wide range of talents and interests and achieve at the highest levels.</p>`
        };
        
        let homeSlideCurr = 1;
        
        homeSlideLeft = function () {
            homeSlideButtonList[homeSlideCurr].style = "background-color: white;"
            homeSlideCurr--;
            if (homeSlideCurr === 0) {
                homeSlideCurr = 6;
            };
            homeSlideImg.src = homeSlideImgList[homeSlideCurr];
            homeSlideInfo.innerHTML = homeSlideInfoList[homeSlideCurr];
            homeSlideButtonList[homeSlideCurr].style = "background-color: black;"
            homeSlideAutoReset();
        }
        
        homeSlideRight = function () {
            homeSlideButtonList[homeSlideCurr].style = "background-color: white;"
            homeSlideCurr++;
            if (homeSlideCurr === 7) {
                homeSlideCurr = 1;
            };
            homeSlideImg.src = homeSlideImgList[homeSlideCurr];
            homeSlideInfo.innerHTML = homeSlideInfoList[homeSlideCurr];
            homeSlideButtonList[homeSlideCurr].style = "background-color: black;"
            homeSlideAutoReset();
        }
        
        homeSlideButton = function (num) {
            homeSlideButtonList[homeSlideCurr].style = "background-color: white;"
            homeSlideCurr = num;
            homeSlideImg.src = homeSlideImgList[homeSlideCurr];
            homeSlideInfo.innerHTML = homeSlideInfoList[homeSlideCurr];
            homeSlideButtonList[homeSlideCurr].style = "background-color: black;"
            homeSlideAutoReset();
        }
        
        let timer;
        
        async function homeSlideAutoReset() {
            let i = 0;
            while (i < 10) {
                await new Promise((resolve, reject) => {
                    if (timer) {
                        clearTimeout(timer);
                    }
        
                    timer = setTimeout(() => {
                        homeSlideButtonList[homeSlideCurr].style = "background-color: white;"
                        homeSlideCurr++;
                        if (homeSlideCurr === 7) {
                            homeSlideCurr = 1;
                        };
                        homeSlideImg.src = homeSlideImgList[homeSlideCurr];
                        homeSlideInfo.innerHTML = homeSlideInfoList[homeSlideCurr];
                        homeSlideButtonList[homeSlideCurr].style = "background-color: black;"
                        resolve();
                    }, 10000);
                });
            }
        }
        
        homeSlideAutoReset();
    }
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
        if (!searchInput.hidden) {
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
    if (term === null) {
        term = searchInput.value
    }
    if (term) {
        searchWhite.textContent = "Search results for '" + term + "'."
    } else {
        searchWhite.textContent = "No results found for '" + term + "'."
    }
}

const openSearch = function () {
    if (searchInput.hidden) {
        
        //searchMenu.hidden = false;
        searchInput.hidden = false;
        searchInput.className = "";
        searchInput.classList.add("animate__animated")
        searchInput.classList.add("animate__faster");
        searchInput.classList.add("animate__fadeInRight");
        searchInput.value = "";
        /*searchWhite.className = "";
        searchWhite.classList.add("animate__animated");
        searchWhite.classList.add("animate__faster");
        searchWhite.classList.add("animate__slideInRight");
        searchBlack.className = "";
        searchWhite.innerHTML = "Enter a search term."
        searchBlack.classList.add("hamOpenNow")*/
        if (!hamMenu.hidden) {
            openHamburgerMenu();
        }
        /*setTimeout(function () {
            searchBlack.style.opacity = 0.3;
        }, 480)*/
    } else {
            //searchInput.hidden = true;
            searchInput.className = "";
            searchInput.classList.add("animate__animated");
            searchInput.classList.add("animate__faster");
            searchInput.classList.add("animate__fadeOutRight");
            /*searchWhite.className = "";
            searchWhite.classList.add("animate__animated");
            searchWhite.classList.add("animate__faster");
            searchWhite.classList.add("animate__slideOutRight");
            searchBlack.className = "";
            searchBlack.classList.add("hamCloseNow")*/
            setTimeout(function () {
                searchInput.hidden = true;
            }, 480)
    }
    return false;
}

if (window.location.href.match('resources.html') != null) {

    let tableSort = document.createElement('div');
    let searchFilter = document.createElement('div');

    tableSort.innerHTML = '<div id="sortContainer">' +
    '<p id="sortText">Sort by:</p>' +
        '<fieldset id="sortTest" class="select" tabindex="2">' +
            '<input class="selectopt" name="sort" type="radio" id="relevance" value="relevance" checked />' +
            '<label for="relevance" class="option">Relevance</label>' +
            '<input class="selectopt" name="sort" type="radio" id="alpha" value="alpha" />' +
            '<label for="alpha" class="option">A - Z</label>' +
            '<input class="selectopt" name="sort" type="radio" id="revAlpha" value="revAlpha"/>'+
            '<label for="revAlpha" class="option">Z - A</label>' +
            '<input class="selectopt" name="sort" type="radio" id="newest" value="newest"/>' +
            '<label for="newest" class="option">Newest</label>' +
            '<input class="selectopt" name="sort" type="radio" id="oldest" value="oldest"/>' +
            '<label for="oldest" class="option">Oldest</label>' +
        '</fieldset>' +
    '</div>';

    searchFilter.innerHTML = '<details id="filter" name="filter">' +
        '<summary><img id="filterImg" src="../img/filter.png"></summary>' +
        '<div id="filterGroup">' +
            '<fieldset id="filterOptions">' +
                '<h6 class="filterCategory">File Type</h6>' +
                '<div class="singleFilter">' +
                    '<input type="checkbox" id="docx" name="docx" value="Docx" class="filterCheckbox" />' +
                    '<label for="docx">Docx</label>' +
                '</div>' +
                '<div class="singleFilter">' +
                    '<input type="checkbox" id="PDF" name="PDF" value="PDF" class="filterCheckbox"/>' +
                    '<label for="PDF">PDF</label>' +
                '</div>' +
                '<div class="singleFilter">' +
                    '<input type="checkbox" id="web" name="web" value="Web Page" class="filterCheckbox"/>' +
                    '<label for="web">Web Page</label>' +
                '</div>' +
                '<div class="singleFilter">' +
                    '<input type="checkbox" id="other" name="other" value="Other" class="filterCheckbox"/>' +
                    '<label for="other">Other</label>' +
                '</div>' +
                '<a id="clearFilter" href="" onclick="return false;">Clear</a>' +
            '</fieldset>' +
        '</div>' +
        '</details>';


    $(document).ready(function () {
            if (window.location.search.trim() != "") {
                var urlParam = new URLSearchParams(window.location.search.trim());
                var searchTerm = urlParam.get("search");
            };

            var table = $('#mainSearchResults').DataTable({
                lengthChange: false,
                "pagingType": "bootstrap_input",
                layout: {
                    top2Start: {
                        search: {
                            placeholder: 'Search'
                        }, 
                    },
                    top2End: [tableSort, searchFilter],
                    topStart: 'info',
                    topEnd: null,
                    bottomStart: 'paging',
                    bottomEnd: null
                },
                columnDefs: [
                    { visible: false, type: 'date', targets: 3},
                    { visible: false, target: 4},
                    {type: 'natural-ci', target: 1},
                    {searchable: false, target:2}
                ],
        
                language: {
                    'paginate': {
                        'previous': '<img class="paginationImgFlipped" src="../img/nextpage.png" />',
                        'next': '<img class="paginationImg" src="../img/nextpage.png" />',
                        'first': '<img class="paginationImgFlipped" src="../img/lastpage.png" />',
                        'last': '<img class="paginationImg" src="../img/lastpage.png" />'
                    },
                    info: '_START_ - _END_ of _TOTAL_ results',
                    infoFiltered: '',
                    infoEmpty: '0 results'
                },
                initComplete: function() {
                    if (searchTerm.trim() != "") {
                        this.api().search(searchTerm).draw();        
                    }
                }
            });
            
            $('.dt-input[type=search]').each(function () {
                $(this).attr("placeholder");
                $(this).after('<img src="../img/searchMaroon.png" class="searchIcon"  tabindex="1" />');
            });

            var selected = []; // store selected checkbox here
            var mydiv = document.querySelector('#filterGroup'); // track event on parent element
            
            mydiv.addEventListener('change', event => { // listen to any change
        
                if (event.target.type === 'checkbox') { // is it coming from a checkbox?
        
                    var checked = document.querySelectorAll('input[type="checkbox"]:checked'); // get all checked checkbox
                    selected = Array.from(checked, (x) => x.value); // map from the node itself to the node value
        
                    var filterRegex = selected.join('|'); // construct regular expression for the search
                    table.column(4).search(filterRegex, true, false).draw(); // do the search
                }
            });

            $("#clearFilter").click(function(e) { 
                $(".filterCheckbox").prop("checked", false);
                table.column(4).search("", true, false).draw();
            }); 

            $('#sortTest input:radio').on('change', function(){
                if ($(this).val() == 'alpha') {
                    table.order([1, 'asc']).draw();
                } else if ($(this).val() == 'revAlpha') {
                    table.order([1, 'desc']).draw();
                } else if ($(this).val() == 'newest') {
                    table.order([3, 'desc']).draw();
                } else if ($(this).val() == 'oldest') {
                    table.order([3, 'asc']).draw();
                } else if ($(this).val() == 'relevance') {
                    table.order.neutral().draw();
                };
                
            });
            var details = [...document.querySelectorAll('details')];
            document.addEventListener('click', function(e) {
                if (!details.some(f => f.contains(e.target))) {
                    details.forEach(f => f.removeAttribute('open'));
                } else {
                    details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
                }
            })
            $('#mainSearchResults').on( 'page.dt', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 200);        
            });    
            
    });

} //end of if (window.location.href.match)


