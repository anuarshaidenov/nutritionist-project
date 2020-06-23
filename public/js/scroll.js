const linksMobile = document.querySelectorAll('#menu-mobile li');
const sectionProcess = document.querySelector('.section-process');
const sectionTestimonials = document.querySelector('.section-testimonials');
const sectionSignup = document.querySelector('.section-signup');
const buttons = document.querySelectorAll('#scroll');
const links = document.querySelectorAll('.nav-link');

const sections = [sectionProcess, sectionTestimonials, sectionSignup];

for(let i = 0; i < linksMobile.length; i++) {
    linksMobile[i].addEventListener('click', () => {
        sections[i].scrollIntoView({ behavior: 'smooth', block: 'center'});
        menuImg.src = "./svg/menu.svg";
        menu.classList.remove('mobile-show');
        if (scrolled) {
            menuIcon.classList.add('scrolled');
        }
    });
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        sectionSignup.scrollIntoView({ behavior: 'smooth', block: 'center'});
    });
});


for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        sections[i].scrollIntoView({ behavior: 'smooth', block: 'center'});
    });
}