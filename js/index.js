let menuIcon = document.querySelector("#ham");
let menuImg = document.querySelector("#ham img");
let menu = document.querySelector("#menu-mobile");

menuIcon.addEventListener('click', function () {
    if (menu.classList.contains('mobile-hidden')){
        menuImg.src = "./svg/menu.svg";
        menu.classList.remove('mobile-hidden');
    }
    else {
        menuImg.src = "./svg/close.svg";
        menu.classList.add('mobile-hidden');
    }
});