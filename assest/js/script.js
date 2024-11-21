let body = document.getElementById('body')
if (body.clientWidth < 992) {
    let offset = 0; 
    const sliderLine = document.querySelector('.catalog__slider-line');

    document.querySelector('.catalog__right').addEventListener('click', function(){
        offset += 310
        if (offset > 620){
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    document.querySelector('.catalog__left').addEventListener('click', function(){
        offset -= 310
        if (offset < 0){
            offset = 620;
        }
        sliderLine.style.left = -offset + 'px';
    });
} else {
    let offset = 0; 
    const sliderLine = document.querySelector('.catalog__slider-line');
    
    document.querySelector('.catalog__right').addEventListener('click', function(){
        offset += 900
        if (offset > 1800){
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });
    
    document.querySelector('.catalog__left').addEventListener('click', function(){
        offset -= 900
        if (offset < 0){
            offset = 1800;
        }
        sliderLine.style.left = -offset + 'px';
    });
    
    
}

