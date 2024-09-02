window.onscroll = function() {
    var bottomMenu = document.getElementById("menu-bajoid");
    var headerHeight = document.querySelector("header").offsetHeight - 100;

    if (window.scrollY > headerHeight) {
        bottomMenu.classList.add("fixed");
        bottomMenu.classList.remove("menu-bajo-degr")
    } else {
        bottomMenu.classList.remove("fixed");
        bottomMenu.classList.add("menu-bajo-degr")
    }
};