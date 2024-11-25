const attractionsList = document.getElementById('attractions-list');

fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/Attractions`)
  .then(response => response.json())
  .then(displayAttractions)
  .catch(error => console.error('Ошибка:', error));

function displayAttractions(attractions) {
  for (let i = 1; i < 31; i++) {
    attractionsList.innerHTML = ''; 
    document.getElementById('list' + i).addEventListener('click', event => {
      document.getElementById("attractions__sort").classList.add("dnone");
      document.getElementById("Attractions").classList.add("dnone");
      document.getElementById("attractions__pagin").classList.add("dnone");
      document.getElementById("header__prev").classList.add("dnone");
      attractions.forEach(attraction => {
        if (attraction.id == i) {
        const attractionDiv = document.createElement('div');
        attractionDiv.classList.add('attraction');
        attractionDiv.innerHTML = `
          <div class="header__prev">
            <a href="all_attraction.html" class="header__prev-btn" >⬅ Вернуться назад</a>
          </div>
          <div class="header__attract-title">
            <h1 class="header__attract-title-text">${attraction.name}</h1>
          </div>
          <div class="attractions__wrapper">
            <div class="attractions__description">
              <div class="attractions__description-title">
                <h3 class="attractions__description-title-text">${attraction.title}</h3>
              </div>
              <div class="attractions__description-text">
                <p>${attraction.description}</p>
              </div>
            </div>
            <div class  = "attractions__images">
              <img class  = "attractions__images-img" src="${attraction.image}" alt="${attraction.name}" width="650" height="450">
            </div>
          </div>
          <div class="attractions__wrapper">
            <div class  = "attractions__imagesTwo">
              <img class  = "attractions__imagesTwo-img" src="${attraction.imageTwo}" alt="${attraction.name}" width="auto" height="500">
            </div>
            <div class="attractions__description">
              <div class="attractions__description-title">
                <h3 class="attractions__description-title-text">${attraction.titleTwo}</h3>
              </div>
              <div class="attractions__description-text">
                <p>${attraction.descriptionTwo}</p>
              </div>
            </div>
          </div>
          <div class="attractions__attract-title">
            <h1 class="attractions__attract-title-text">${attraction.name} на карте</h1>
          </div>
          <div class="attractions__map">
            <iframe class="attractions__map-link" src=${attraction.map} width="750" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="attractions__info-title">
            <h1 class="attractions__info-title-text">Дополнительная информация</h1>
          </div>
          <div class="attractions__info">
            <p>Адрес: ${attraction.address}</p>
            <p>Время работы: ${attraction.openHours}</p>
          </div>
        `;
        attractionsList.appendChild(attractionDiv);
        }
      })
    });
  }
}
