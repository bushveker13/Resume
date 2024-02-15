   function init(){
    let myMap = new ymaps.Map ("map", {
        center: [55.76953456898229,37.63998549999998],
        zoom: 14,
        controls: [ ]
    });

    let myPlacemark = new ymaps.Placemark([55.76953456898229,37.63998549999998], {}, {
        iconLayout: 'default#image',
        iconImageHref:'../../src/img/Ellipse2.svg' ,
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
      });
    

    myMap.geoObjects.add(myPlacemark);
}
ymaps.ready(init);

let genetalCont= document.querySelector('.contact__general-map-adres')
let butnOpen = document.querySelector('.butn-open');
let btnClose = document.querySelector('.butn-close')
let generalAdress = document.querySelector('.general-adress')
let headerFirstInputSerch = document.querySelector('.header_first__form-input-serch')
let butnserch = document.querySelector('.header_first__button-serch')
let headerButtonSerchClose= document.querySelector('.header_first__button-serch-close')
let butnActiveBurger = document.querySelector('.header-two__nav-butn')
let closeBurger = document.querySelector('.burger__close')
let burger = document.querySelector('.burger')
let headerLogo = document.querySelector('.header_logo_img')

butnOpen.addEventListener('click',function(){
    generalAdress.classList.add('active')
    genetalCont.classList.add('active-btn')
})

btnClose.addEventListener('click',function(){
    generalAdress.classList.remove('active')
    genetalCont.classList.remove('active-btn')
})

butnActiveBurger.addEventListener('click',function(){
    burger.classList.add('input-transitionX')
})

closeBurger.addEventListener('click', function(){
    burger.classList.remove('input-transitionX')
})



const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)')
const mobileWidthMediaQuerymini = window.matchMedia('(max-width: 635px)')

if(mobileWidthMediaQuery.matches){
    butnserch.addEventListener('click', function(){
        headerFirstInputSerch.classList.add('input-transition')
        headerButtonSerchClose.classList.add('active')
        if(mobileWidthMediaQuery.matches){
            headerLogo.classList.add('no-active')
        }
        butnserch.classList.add('no-active')
    })

    headerButtonSerchClose.addEventListener('click',function(){
        headerFirstInputSerch.classList.remove('input-transition')
        butnserch.classList.remove('no-active')
        headerButtonSerchClose.classList.remove('active')
        headerLogo.classList.remove('no-active')
    })
}