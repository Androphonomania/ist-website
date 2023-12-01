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
}