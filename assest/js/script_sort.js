<<<<<<< HEAD
document.getElementById('attractions__sort').addEventListener('click', event => {
=======
const filterBox = document.querySelectorAll('.box')
document.querySelector('nav').addEventListener('click', event => {
  
>>>>>>> master
    let filterClass = event.target.dataset['f'];
    
    console.log(filterClass)
    console.log(filterBox)
    filterBox.forEach(elem => {
        elem.classList.remove('hide')
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });
<<<<<<< HEAD
});
=======

})


        
>>>>>>> master
