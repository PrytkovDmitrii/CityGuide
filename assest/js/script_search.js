const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');
const search_attractions = document.querySelector('.search_attractions');

icon.onclick = function() {
    search.classList.toggle('active')
};

clear.onclick = function() {
    document.getElementById('searchbar').value = '';
};