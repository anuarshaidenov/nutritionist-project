const menuIcon = document.querySelector("#ham");
const menuImg = document.querySelector("#ham img");
const menu = document.querySelector("#menu-mobile");
const closeIcon = document.querySelector(".close-menu");
let scrolled = false;

menuIcon.addEventListener('click', function (e) {
    if (!menu.classList.contains('mobile-show')) {
        menuImg.src = "./svg/close.svg";
        menu.classList.add('mobile-show');
        menuIcon.classList.remove('scrolled');
    }
    else {
        menuImg.src = "./svg/menu.svg";
        menu.classList.remove('mobile-show');
        if (scrolled) {
            menuIcon.classList.add('scrolled');
        }
    }
    
});



