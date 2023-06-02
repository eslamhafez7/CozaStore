// Products list 
let productLinks = document.querySelectorAll(".products-list a");
productLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        removeAciveClass();
        link.classList.add("active")
    });
});
function removeAciveClass() {
    productLinks.forEach(link => {
        link.classList.remove("active");
    })
}

// Cart Items 
const shoppingIcon = document.querySelector('.shopping.icon');
const closeIcon = document.querySelector('.close-cart');
const cartItems = document.querySelector('.cart-items');

shoppingIcon.addEventListener('click', function() {
    cartItems.classList.add('show-cart');
});

closeIcon.addEventListener('click', function() {
    cartItems.classList.remove('show-cart');
});

// Search Bar 
const searchIcon = document.querySelector('.search.icon');
const searchCloseIcon = document.querySelector('.search-bar .close');
const searchBar = document.querySelector('.search-bar');

searchIcon.addEventListener('click', function() {
    searchBar.classList.add('show_search-bar');
});

searchCloseIcon.addEventListener('click', function() {
    searchBar.classList.remove('show_search-bar');
});

// Change Header Background
let changeBg = () => {
    let header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("change_header-background") : header.classList.remove("change_header-background");
};
window.addEventListener('scroll', changeBg);

let closeList = document.querySelector(".close-list");
let navList = document.querySelector(".nav-list");
let menuToggle = document.querySelector(".toggle-menu")

menuToggle.addEventListener('click', () => {
    navList.classList.add("show_nav-list");
});
closeList.addEventListener('click', () => {
    navList.classList.remove("show_nav-list")
});

// Scroll Up 
let scrollUp = () => {
    let scrollup = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollup.classList.add("show_scrollup")
    : scrollup.classList.remove("show_scrollup");
};
window.addEventListener('scroll', scrollUp);
let scrollupButton =document.getElementById("scroll-up");
scrollupButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    });
});