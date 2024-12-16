function load() {
    fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/Attractions`)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('input');
            list.innerHTML = ``;
            
            data.forEach(el => {
                const li = document.createElement('li');
                li.className = 'search_attractions';
                li.textContent = el.name;
                li.addEventListener('click', () => {
                    window.location.href = `all_attraction.html?id=${el.id}`;
                });

                list.appendChild(li);
            });
        })
        .catch(error => console.error('Ошибка:', error));
}


function search_attraction() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('search_attractions');

    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";
        }
    }
}

document.addEventListener('DOMContentLoaded', load);