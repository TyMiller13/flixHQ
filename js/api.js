'use strict'

const api_key = '9d7d85c0f78fa1ce1954533d0aaeb8e6';

const imageBaseURL = 'https://image.tmdb.org/t/p/'

// *** fetch data from a server using 'url' and passes the result in JSON data to a 'callback' function, along with an optional parameter if has 'optionalParam' ***

const fetchDataFromServer = function(url, callback, optionalParam){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam))
}

export { imageBaseURL, api_key, fetchDataFromServer };