window.onload = function () {
    const icon = document.getElementById("icon")

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        icon.setAttribute("href", "favicon-dark.ico")
    } else {
        icon.setAttribute("href", "favicon.ico")
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            icon.setAttribute("href", "favicon-dark.ico")
        } else {
            icon.setAttribute("href", "favicon.ico")
        }
    });

    let aElements = document.getElementsByTagName("a");

    for (let a of aElements) {
        if (!a.hasAttribute("href") && !a.hasAttribute("class")) {
            a.setAttribute("href", "fallback.html");
        }
    }
}

const shake = function () {
    for (let i = 0; i < document.children.length; i++) {
        document.children[i].classList.add('animate__animated', 'animate__tada')
        document.children[i].addEventListener('animationend', function () {
            document.children[i].classList.remove('animate__animated', 'animate__tada')
        })
    }
}