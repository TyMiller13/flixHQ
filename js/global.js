'use strict';

// Add event on multiple elements

const addEventOnElements = function (elements, eventType, callback){
    for (const el of elements) el.addEventListener(eventType, callback);
}

// toggle search box in mobile device or small screen

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function() {
    searchBox.classList.toggle("active");
});

// store movieId in 'localStorage' when clicked on any movie card

const getMovieDetail = function(movieId) {
    window.localStorage.setItem("movieId", String(movieId));
}