const app = (() => {
    const _headerMenuPic = document.querySelector(".header__menu-pic");
    const _headerList = document.querySelector(".header__list");

    let menuHidden = true;

    _headerMenuPic.addEventListener("click", (event) => {
        if ( menuHidden ) {
            openMenuIcon();
            showMenu();
        } else {
            closeMenuIcon();
            hideMenu();
        }

        menuHidden = !menuHidden;
    })

    function openMenuIcon() {
        _headerMenuPic.setAttribute("src", "images/icon-close.svg");
    }

    function closeMenuIcon() {
        _headerMenuPic.setAttribute("src", "images/icon-hamburger.svg");
    }

    function showMenu() {
        _headerList.classList.add("show");
    }

    function hideMenu() {
        _headerList.classList.remove("show");
    }
})();