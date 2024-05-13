// LOADER MODAL
const fadeUp = time => {
    let loaderModal = document.getElementById('loader');

    setTimeout(() => {
        loaderModal.style.transform = "translateY(-100%)";
    }, time);
}
fadeUp(1500);

// HEROE
let heroePictureContainer = document.getElementById('picture-container');
let tagline1 = document.getElementById('tagline1');
let tagline2 = document.getElementById('tagline2');

setTimeout(() => {
        heroePictureContainer.style.width = "100%";
    }, 3000);

setTimeout(() => {
    heroePictureContainer.style.height = "100%";
}, 4000);

setTimeout(() => {
    tagline1.style.transform = "translateX(0)";
}, 3200);

setTimeout(() => {
    tagline2.style.transform = "translateX(0)";
}, 2500);


// COOKIE MODAL
let cookieModal = document.getElementById('cookie-modal');
let cookieButton = document.querySelector('#cookie-modal div button');

setTimeout(() => {
    cookieModal.style.display = "block";
}, 7000);

cookieButton.addEventListener('click', () => {
    cookieModal.style.display = "none";
});

// HEADER (menu)
let menuBars = document.getElementById('menu-bars');
let popMenu = document.getElementById('pop-menu');
let menuItem = document.querySelectorAll('#pop-menu ul li');

menuBars.addEventListener('click', () => {
    menuBars.classList.toggle('rotate');
    popMenu.classList.toggle('show');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        popMenu.classList.remove('show');
        menuBars.classList.remove('rotate');
    });
});

// GALLERY
let travelPictures = document.querySelectorAll('#gallery div img');
let largePicture = document.getElementById('large-picture');
console.log(largePicture);

travelPictures.forEach((picture, index) => {
    // console.log("index " + ": " + index + " picture " + picture);
    picture.addEventListener('click', () => {
        let newSrc = picture.getAttribute('src');
        largePicture.setAttribute('src', newSrc);
    });
});

// FOOTER
let today = new Date();
let currentYear = today.getFullYear();
document.getElementById('currentYear').textContent = currentYear;

