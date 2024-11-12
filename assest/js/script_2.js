let offset = 0;
const sliderLine = document.querySelector('.attractions__slider-line');

document.querySelector('.attractions__right').addEventListener('click', function(){
    offset += 522
    if (offset > 3654){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.attractions__left').addEventListener('click', function(){
    offset -= 522
    if (offset < 0){
        offset = 3654;
    }
    sliderLine.style.left = -offset + 'px';
});



let offset1 = 0; 
const sliderLine1 = document.querySelector('.attractions_kazan__slider-line');

document.querySelector('.attractions_kazan__right').addEventListener('click', function(){
    offset1 += 522
    if (offset1 > 3654){
        offset1 = 0;
    }
    sliderLine1.style.left = -offset1 + 'px';
});

document.querySelector('.attractions_kazan__left').addEventListener('click', function(){
    offset1 -= 522
    if (offset1 < 0){
        offset1 = 3654;
    }
    sliderLine1.style.left = -offset1 + 'px';
});



let offset2 = 0; 
const sliderLine2 = document.querySelector('.attractions_piter__slider-line');

document.querySelector('.attractions_piter__right').addEventListener('click', function(){
    offset2 += 522
    if (offset2 > 3654){
        offset2 = 0;
    }
    sliderLine2.style.left = -offset2 + 'px';
});

document.querySelector('.attractions_piter__left').addEventListener('click', function(){
    offset2 -= 522
    if (offset2 < 0){
        offset2 = 3654;
    }
    sliderLine2.style.left = -offset2 + 'px';
});