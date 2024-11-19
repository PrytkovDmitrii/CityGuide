const apiUrl ='https://6735da235995834c8a945ad9.mockapi.io/api/Attractions'
const filterBox = document.querySelectorAll('.box')
document.querySelector('nav').addEventListener('click', event => {
        
    let filterClass = event.target.dataset['f'];
    
    console.log(filterClass)
    console.log(filterBox)
    filterBox.forEach(elem => {
        elem.classList.remove('hide')
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });

})
        