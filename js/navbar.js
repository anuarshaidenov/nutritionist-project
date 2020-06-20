const section = document.querySelector('.section-hero__img');

const observer = new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio > 0) {
        menuIcon.classList.remove('scrolled');
        scrolled = false;
        
    }
    else {
        menuIcon.classList.add('scrolled');
        scrolled = true;
    }
    
})

observer.observe(section);