// Custom Scripts
// Custom scripts
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    const navLink = document.querySelectorAll('.nav__link');
    const body = document.querySelector('body');
    const scrollUp = document.querySelector(".scroll-up");


    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('active');
    });

    // FixedHeader
    function FixedHeader() {
        const headerH = header.clientHeight;
        document.body.style.paddingTop = headerH + 'px';
        if (window.scrollY > headerH) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
            document.body.style.paddingTop = 0;
        };
    };

    window.addEventListener('scroll', FixedHeader);


    navLink.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            let href = e.target.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);

            const topOffset = header.offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth',
            });

            menu.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('active');
        });
    });

    scrollUp.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});

