let container = document.querySelector('.container')
let body = document.querySelector('body')
let slideLine = document.querySelector('.stages__list')
let slideBlocButtons = document.querySelectorAll('.stages__slade-blockKontant')
let slideBlockWidth = document.querySelector('.stages__item')
let currentElemSlaider = document.querySelector('.current-elem-slaider')
let quantityElemSlaider = document.querySelector('.quantity-elem-slaider')
let right = document.querySelector('.button-right')
let left = document.querySelector('.left')
let slaiderTimerButtonRight = document.querySelector('.button-right1')
let slaiderTimerLeftButton = document.querySelector('.left1')
let participantsItemButton = document.querySelectorAll('.participants__item-button')
let generalModal = document.querySelector(".general-modal")
let podrobne = document.querySelectorAll('.podrobnee')
let closeModal = document.querySelectorAll('.close-modal')
let mobileWidthMedia930 = window.matchMedia('(max-width: 930px)')
let mobileWidthMedia768 = window.matchMedia('(max-width: 768px)')
let mobileWidthMedia606 = window.matchMedia('(max-width: 606px)')

let count = 1;//6
let step = 0;
let stepColorbutn = 0;
let x = 0;
let sbros = 0;
let disBattonMin
if(mobileWidthMedia768.matches){
    quantityElemSlaider.innerHTML = 1;
    disBattonMin = quantityElemSlaider.innerHTML;
    currentElemSlaider.innerHTML = 6;
    x = 5;
    sbros = 0;
}
else if(mobileWidthMedia930.matches){
    quantityElemSlaider.innerHTML = 2;
    disBattonMin = quantityElemSlaider.innerHTML;
    currentElemSlaider.innerHTML = 6;
    x = 4;
    sbros = 1;
}
else{
    quantityElemSlaider.innerHTML = 3;
    disBattonMin = quantityElemSlaider.innerHTML;
    currentElemSlaider.innerHTML = 6;
    x = 3
    sbros = 2;
}
slideBlocButtons[step].classList.add('color-active')


left.disabled = true;
left.classList.add("disabled");

function disabled(){ // функция отключения кнопок при приделе картинок 
    if(count > 1 && count < 5 ){
        right.disabled = false;
        left.disabled = false;
        right.classList.remove('disabled');
        left.classList.remove("disabled");
    }
    else if(count == 1){
        left.disabled = true;
        left.classList.add("disabled");
        right.disabled = false;
    }
    else if(count == 5){
        left.disabled = false;
        right.disabled = true;
        right.classList.add('disabled');
    }
}

right.addEventListener('click',moveright)

function moveright (){
    step += -(slideBlockWidth.offsetWidth);
     ++count;
    slideLine.style.transform = 'translateX('+ step +'px)';
    color();
    ++stepColorbutn;
    slideBlocButtons[stepColorbutn].classList.add('color-active');
    disabled();
}
left.addEventListener('click', moveleft);

function moveleft (){
    step += (slideBlockWidth.offsetWidth);
    slideLine.style.transform = 'translateX('+ step +'px)';
    color();
    --stepColorbutn;
    --count;
    slideBlocButtons[stepColorbutn].classList.add('color-active');
    disabled();
}
console.log(count)
// переклик по кнопке
stetbutn = 0;
slideBlocButtons.forEach(function(elem, i ){
    elem.addEventListener('click', function(){
         count = i + 1;
         console.log(count)
         color()
         slideBlocButtons[i].classList.add('color-active')
         stepColorbutn = i
         stetbutn += -(slideBlockWidth.offsetWidth) * (i) ;
         step = -(slideBlockWidth.offsetWidth) * (i) ;
         slideLine.style.transform = 'translateX('+ stetbutn +'px)';
         stetbutn = 0;
         disabled()
    })
})



function color (){
    for(let i = 0; i < slideBlocButtons.length;i++){       
            slideBlocButtons[i].classList.remove('color-active');
    }
}
// слайдер по таймеру
let stageSladersList = document.querySelector('.participants__list');
let stageSlader = document.querySelector('.participants__item');
let stageSladers = document.querySelectorAll('.participants__item');
let conTainer = document.querySelector('.container')

let step2 = 0;
let i = 0
function timer() {
	setTimeout(function() {
        disabledTimer()
            if(x > i){
                ++quantityElemSlaider.innerHTML
                step2 += -(stageSlader.offsetWidth);
                stageSladersList.style.transform = 'translateX('+ step2 +'px)';
                disabledTimer()
                
            }
            else if (i == x ){
                disabledTimer()
                i = -2;
                setTimeout(function() {
                         quantityElemSlaider.innerHTML = sbros;
                         slaiderTimerButtonRight.classList.remove("disabled");
                }, 2000);
                step2 = stageSlader.offsetWidth;
            }
            ++i
		timer(); // вызовем сами себя
	}, 2000000);
}
timer();

slaiderTimerLeftButton.addEventListener('click', function () {
        --quantityElemSlaider.innerHTML;
        --i;
        step2 = step2  + stageSlader.offsetWidth;
        stageSladersList.style.transform = 'translateX('+ (step2) +'px)';
        disabledTimer()
        
})

slaiderTimerButtonRight.addEventListener('click', function () {
    ++quantityElemSlaider.innerHTML
    ++i;
    step2 += -(stageSlader.offsetWidth);
    stageSladersList.style.transform = 'translateX('+ (step2) +'px)'
    disabledTimer()
    
})

function disabledTimer(){ // функция отключения кнопок при приделе картинок 
    if(quantityElemSlaider.innerHTML > disBattonMin && quantityElemSlaider.innerHTML < 5 ){
        slaiderTimerButtonRight.disabled = false;
        slaiderTimerLeftButton.disabled = false;
        //slaiderTimerButtonRight.classList.remove("disabled");
        slaiderTimerLeftButton.classList.remove('disabled');
    }
    else if(quantityElemSlaider.innerHTML == disBattonMin){
        slaiderTimerLeftButton.disabled = true;
        slaiderTimerLeftButton.classList.add('disabled');
        slaiderTimerButtonRight.disabled = false;
    }
    else if(quantityElemSlaider.innerHTML == 6){
        slaiderTimerLeftButton.disabled = false;
        slaiderTimerButtonRight.disabled = true;
        slaiderTimerButtonRight.classList.add("disabled");
    }
}

for(elem of stageSladers){ //выстраиваем элементы по ширине экрана
       if(mobileWidthMedia768.matches){
        elem.style.width = conTainer.offsetWidth + 'px'
       }
       else if(mobileWidthMedia930.matches){
        elem.style.width = ((conTainer.offsetWidth -140) /2 )+ 'px'       
       }
       else{
        elem.style.width = ((conTainer.offsetWidth -140) /3 )+ 'px'
       }
}

disabledTimer()

for(let i = 0; i  < participantsItemButton.length; i++){
    participantsItemButton[i].addEventListener('click', function(){
        body.classList.add('disable-scroll')
        generalModal.style.display = 'flex';
        podrobne[i].style.display = 'flex';
    })
}
closeModal.forEach((button, index) => {
    button.addEventListener('click', () => {
      podrobne[index].style.display = 'none';
      generalModal.style.display = 'none';
      body.classList.remove('disable-scroll')
    });
  })