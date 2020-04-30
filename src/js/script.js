window.onload = function () {

    let navButton = document.querySelector('.page-header__nav-button');
    let header = document.querySelector('.page-header__top');
    let navList = document.querySelector('.main-nav__list');
    let body = document.querySelector('body');
    let navLink = document.querySelectorAll('.main-nav__link');

    navButton.addEventListener('click', function () {
        navButton.classList.toggle('active');
        header.classList.toggle('active');
        navList.classList.toggle('active');
        body.classList.toggle('lock');
    })

    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function () {
            if (navButton.classList.contains('active')) {
                navButton.classList.remove('active');
            }
            if (header.classList.contains('active')) {
                header.classList.remove('active');
            }
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
            if (body.classList.contains('lock')) {
                body.classList.remove('lock');
            }
        })
    }
}