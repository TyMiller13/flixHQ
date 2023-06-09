'use strict';

import { api_key, fetchDataFromServer } from "./api.js";

export function sidebar () {
    //fetch all genres

    const genreList = {};

    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function({ genres }) {
        for (const { id, name } of genres){
            genreList[id] = name;
        }

        genreLink();
    });


    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");

    sidebarInner.innerHTML = `
    <div class="sidebar-list">
        <p class="title">Genre</p>

        <a href="./movie-list.html" menu-close class="sidebar-link">Action</a>

        <a href="./movie-list.html" menu-close class="sidebar-link">Horror</a>

        <a href="./movie-list.html" menu-close class="sidebar-link">Comedy</a>

        <a href="./movie-list.html" menu-close class="sidebar-link"
          >Adventure</a
        >
        <a href="./movie-list.html" menu-close class="sidebar-link">Drama</a>
        <a href="./movie-list.html" menu-close class="sidebar-link">Sci-Fi</a>
      </div>
      <div class="sidebar-list">
        <p class="title">Language</p>
        <a href="./movie-list.html" menu-close class="sidebar-link"
          >English</a
        >
        <a href="./movie-list.html" menu-close class="sidebar-link"
          >Spanish</a
        >
        <a href="./movie-list.html" menu-close class="sidebar-link">French</a>
        <a href="./movie-list.html" menu-close class="sidebar-link">German</a>
        <a href="./movie-list.html" menu-close class="sidebar-link"
          >Chinese</a
        >
      </div>
      <div class="sidebar-footer">
        <p class="copyright">
          Copyright © 2023
          <a href="https://linkedin.com/in/tyamiller">Tyler Miller</a>
        </p>
        <img
          src="./images/tmdb-logo.svg"
          alt="the movie database logo"
          height="17"
          width="130"
        />
    </div>
    `;


    const genreLink = function(){
        for (const [genreId, genreName] of Object.entries(genreList)){
            const link = document.createElement("a");
            link.classList.add("sidebar-link");
            link.setAttribute("href", "./movie-list.html");
            link.setAttribute("menu-close", "");
            link.setAttribute("onclick", `getMovieList("with_genres=${genreId}", "${genreName}")`);
            link.textContent = genreName;

            sidebarInner.querySelectorAll(".sidebar-list")[0]
            .appendChild(link);
        }

        const sidebar = document.querySelector("[sidebar]");
        sidebar.appendChild(sidebarInner);
        toggleSidebar(sidebar);
    }

    // toggle sidebar on a mobile screen
    const toggleSidebar = function(sidebar) {
        const sidebarBtn = document.querySelector("[menu-btn]");
        const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
        const sidebarClose = document.querySelectorAll("[menu-close]");
        const overlay = document.querySelector("[overlay]");

        addEventOnElements(sidebarTogglers, "click", function(){
            sidebar.classList.toggle("active");
            sidebarBtn.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        addEventOnElements(sidebarClose, "click", function(){
            sidebar.classList.remove("active");
            sidebarBtn.classList.remove("active");
            overlay.classList.remove("active");
        });
    }
}

