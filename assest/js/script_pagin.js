document.querySelector('.attractions__pagination').addEventListener('click', event => { 
    let filterClass = event.target.dataset['f'];
    const filter = document.querySelectorAll('.box');
    
    filter.forEach(elem => {
        elem.classList.remove('hide')
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });
});