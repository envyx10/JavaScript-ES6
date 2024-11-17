"use strict";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('load-characters-btn').addEventListener('click', () => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];
                const textarea = document.getElementById('txtarea');
                textarea.value = randomCharacter.name;
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    });
});
