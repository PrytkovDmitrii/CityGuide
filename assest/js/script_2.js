
let body = document.getElementById('body')
if (body.clientWidth < 992) {
    let offsetLow = 0;
    const sliderLineLow = document.querySelector('.attractions__slider-line');

    document.querySelector('.attractions__right').addEventListener('click', function(){
        offsetLow += 342
        if (offsetLow > 3312){
            offsetLow = 0;
        }
        sliderLineLow.style.left = -offsetLow + 'px';
    });

    document.querySelector('.attractions__left').addEventListener('click', function(){
        offsetLow -= 342
        if (offsetLow < 0){
            offsetLow = 3312;
        }
        sliderLineLow.style.left = -offsetLow + 'px';
    });


    let offset1Low = 0; 
    const sliderLine1Low = document.querySelector('.attractions_kazan__slider-line');

    document.querySelector('.attractions_kazan__right').addEventListener('click', function(){
        offset1Low += 342
        if (offset1Low > 3312){
            offset1Low = 0;
        }
        sliderLine1Low.style.left = -offset1Low + 'px';
    });

    document.querySelector('.attractions_kazan__left').addEventListener('click', function(){
        offset1Low -= 342
        if (offset1Low < 0){
            offset1Low = 3312;
        }
        sliderLine1Low.style.left = -offset1Low + 'px';
    });

    let offset2Low = 0; 
    const sliderLine2Low = document.querySelector('.attractions_piter__slider-line');

    document.querySelector('.attractions_piter__right').addEventListener('click', function(){
        offset2Low += 342
        if (offset2Low > 3312){
            offset2Low = 0;
        }
        sliderLine2Low.style.left = -offset2Low + 'px';
    });

    document.querySelector('.attractions_piter__left').addEventListener('click', function(){
        offset2Low -= 342
        if (offset2Low < 0){
            offset2Low = 3312;
        }
        sliderLine2Low.style.left = -offset2Low + 'px';
    });
    
} else {
    let offset = 0;
    const sliderLine = document.querySelector('.attractions__slider-line');

    document.querySelector('.attractions__right').addEventListener('click', function(){
        offset += 522
        if (offset > 3312){
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    document.querySelector('.attractions__left').addEventListener('click', function(){
        offset -= 522
        if (offset < 0){
            offset = 3312;
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
}
