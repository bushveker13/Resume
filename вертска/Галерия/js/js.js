// плавный скрол
$("a.link").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 800);
});


// Дроп меню
document.addEventListener('DOMContentLoaded', () =>{
  const menuBtns = document.querySelectorAll('.banner__nav-button_active-drop_menu');
  const drops = document.querySelectorAll('.banner__nav-drop-down-generals');
  menuBtns.forEach(el => {
    el.addEventListener('click', (e) =>{
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.banner__item').querySelector('.banner__nav-drop-down-generals');

      menuBtns.forEach(el => {
        if (el !== currentBtn){
          el.classList.remove('banner__nav-button_active-drop_menu-focus')
        }
      });

      drops.forEach(el =>{
        if (el !== drop) {
          el.classList.remove('is-active');
        }
      });

      drop.classList.toggle('is-active')
      currentBtn.classList.toggle('banner__nav-button_active-drop_menu-focus');
    });
  });
  document.addEventListener('click', (e) =>{
    if (!e.target.closest('.banner__nav-list')){
      menuBtns.forEach(el => {
          el.classList.remove('banner__nav-button_active-drop_menu-focus')
      });

      drops.forEach(el =>{
          el.classList.remove('is-active');
      });
    }
  });
});

// Свайпер-1
const swiper = new Swiper('.swp-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  })


// Селект  
const element = document.querySelector('select');
const choices = new Choices( element, {
searchEnabled: false,
placeholderValue: null,
position: 'bottom'

});

//Свайпер-2
const swiper2 = new Swiper('.swp-2', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
    totalClass:'swiper-pagination-total',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  

  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
      grid: {rows: 1,},
      slidesPerGroup: 1,
    },


    651: {
      slidesPerView: 2,
      grid: {rows: 2,},
      slidesPerGroup: 2,
      spaceBetween:34,
    },

    1200: {
      slidesPerView: 3,
      grid: {rows: 2,},
      slidesPerGroup: 3,
      spaceBetween:24,
    },

    1430: {
      slidesPerView: 3,
      grid: {rows: 2,},
      slidesPerGroup: 3,
      spaceBetween:50,
    }

  }


})

//Акардеон

$('.accordion').accordion({
  active:true,
  collapsible: true,
  heightStyle: "content",
  active: 0
});


// для перключения флажков в навигации
document.querySelectorAll('.banner__nav-button_active-drop_menu').forEach(function(HowWeworkButton){
  HowWeworkButton.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    console.log(path)

  document.querySelectorAll('.banner__nav-button_active-drop_menu').forEach(function(tabcontent){
  tabcontent.classList.remove('taz')
  })
  document.querySelector(`[data-target="${path}"]`).classList.add('taz')
  })
})

//Табы для переключения стран и кружка
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__countries-content').forEach(function(HowWeworkButton){
    HowWeworkButton.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      

    document.querySelectorAll('.tab-off-content').forEach(function(tabcontent){
    tabcontent.classList.remove('tab-on-content')
    })

    document.querySelectorAll('.catalog__countries-content ').forEach(function(tabcontent){
      tabcontent.classList.remove('beder')
      })
    document.querySelector(`[data-path="${path}"]`).classList.add('beder'),
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-on-content')
    })
  })


// табы для перключения художников
  document.querySelectorAll('.catalog-tab').forEach(function(HowWeworkButton){
    HowWeworkButton.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      

    document.querySelectorAll('.catalog__tab-content-off').forEach(function(tabcontent){
    tabcontent.classList.remove('catalog__tab-content-on')
    })

    document.querySelectorAll('.catalog-tab').forEach(function(tabcontent){
    tabcontent.classList.remove('catalog-tab-active')
    })

    document.querySelector(`[data-path="${path}"]`).classList.add('catalog-tab-active'),
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content-on')
    })
  })
  
})

document.querySelectorAll('.catalog-tab2').forEach(function(HowWeworkButton){
  HowWeworkButton.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    console.log(path)

  document.querySelectorAll('.catalog__tab-content-off-1').forEach(function(tabcontent){
  tabcontent.classList.remove('catalog__tab-content-on-1')
  })

  document.querySelectorAll('.catalog-tab2').forEach(function(tabcontent){
    tabcontent.classList.remove('catalog-tab-active-2')
    })

  document.querySelector(`[data-path="${path}"]`).classList.add('catalog-tab-active-2'),
  document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content-on-1')
  })
})

document.querySelectorAll('.catalog-tab3').forEach(function(HowWeworkButton){
  HowWeworkButton.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    console.log(path)

  document.querySelectorAll('.catalog__tab-content-off-2').forEach(function(tabcontent){
  tabcontent.classList.remove('catalog__tab-content-on-2')
  })

  document.querySelectorAll('.catalog-tab3').forEach(function(tabcontent){
    tabcontent.classList.remove('catalog-tab-active-3')
    })

  document.querySelector(`[data-path="${path}"]`).classList.add('catalog-tab-active-3'),
  document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content-on-2')
  })
})

document.querySelectorAll('.catalog-tab4').forEach(function(HowWeworkButton){
  HowWeworkButton.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    console.log(path)

  document.querySelectorAll('.catalog__tab-content-off-3').forEach(function(tabcontent){
  tabcontent.classList.remove('catalog__tab-content-on-3')
  })

  
  document.querySelectorAll('.catalog-tab4').forEach(function(tabcontent){
    tabcontent.classList.remove('catalog-tab-active-4')
    })

  document.querySelector(`[data-path="${path}"]`).classList.add('catalog-tab-active-4'),
  document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content-on-3')
  })
})

document.querySelectorAll('.catalog-tab5').forEach(function(HowWeworkButton){
  HowWeworkButton.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    console.log(path)

  document.querySelectorAll('.catalog__tab-content-off-4').forEach(function(tabcontent){
  tabcontent.classList.remove('catalog__tab-content-on-4')
  })

  document.querySelectorAll('.catalog-tab5').forEach(function(tabcontent){
    tabcontent.classList.remove('catalog-tab-active-5')
    })

  document.querySelector(`[data-path="${path}"]`).classList.add('catalog-tab-active-5'),  
  
  document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content-on-4')
  })
})


// плавный переход к якорной ссылке 
let artBtns = document.querySelectorAll('.catalog__accordion-tab-parametr')

if (document.documentElement.clientWidth <= 900){
artBtns.forEach(function(tabs){
  tabs.addEventListener('click',()=>{
    let activeCatalog = document.querySelector('.catalog__tab-content-on');
    activeCatalog.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
    });
  });
};

if (document.documentElement.clientWidth <= 900){
  artBtns.forEach(function(tabs){
    tabs.addEventListener('click',()=>{
      let activeCatalog = document.querySelector('.catalog__tab-content-on-1');
      activeCatalog.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
      });
    });
};

if (document.documentElement.clientWidth <= 900){
    artBtns.forEach(function(tabs){
      tabs.addEventListener('click',()=>{
        let activeCatalog = document.querySelector('.catalog__tab-content-on-2');
        activeCatalog.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      });
    });
};  

if (document.documentElement.clientWidth <= 900){
  artBtns.forEach(function(tabs){
    tabs.addEventListener('click',()=>{
      let activeCatalog = document.querySelector('.catalog__tab-content-on-3');
      activeCatalog.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    });
  });
};

if (document.documentElement.clientWidth <= 900){
  artBtns.forEach(function(tabs){
    tabs.addEventListener('click',()=>{
      let activeCatalog = document.querySelector('.catalog__tab-content-on-4');
      activeCatalog.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    });
  });
};  
// скрытый конент
window.addEventListener('DOMContentLoaded', function(){
document.querySelector('.event__button') .addEventListener('click', function(){
document.querySelector('.event-list').classList.toggle('is-active-event')
})

document.querySelector('.event__button') .addEventListener('click', function(){
  document.querySelector('.event__button').classList.toggle('event__button-none')
  })
})

///

// модальное окно-1
const btns = document.querySelectorAll('.swp2-img');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const body = document.body;
const fixBlocks = document.querySelectorAll('.fix-block');
const close = document.querySelectorAll('.modal-button-close');

let disableScroll = function () {
	let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
	let pagePosition = window.scrollY;
	fixBlocks.forEach((el) => {
		el.style.paddingRight = paddingOffset;
	});
	body.style.paddingRight = paddingOffset;
	body.classList.add('disable-scroll');
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('disable-scroll');
	fixBlocks.forEach((el) => {
		el.style.paddingRight = '0px';
	});
	body.style.paddingRight = '0px';
	window.scroll({ top: pagePosition, left: 0 });
	body.removeAttribute('data-position');
}

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		disableScroll();

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {

	enableScroll();

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

// закрытие моадльного окна 
close.forEach(function (o) {
  o.addEventListener('click', function(){
      modalOverlay.classList.remove('modal-overlay--visible');
      
  });
});


// свайпер-3
const swiperr = document.querySelector('.newSwiper2');
let mySwiper3;
function notmobileSlider() {
  if(window.innerWidth > 600 && swiperr.dataset.notmobile == 'false') {
    mySwiper3 = new Swiper('.newSwiper2', {
      loop: true,
      grabCursor: true,
      breakpoints: {
          500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween:34,
          },
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween:34,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween:24,
          }
      },
      pagination: {
        el: '.swp-3-fraction',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    swiperr.dataset.notmobile = 'true';
  }
  if(window.innerWidth <= 500) {
    swiperr.dataset.notmobile = 'false';
    if(swiperr.classList.contains('swiper-container-initialized')) {
      mySwiper3.destroy();
    }
  }
}
notmobileSlider()
window.addEventListener('resize', () => {
  notmobileSlider();
});

 



// свайпер-4

const swiper4 = new Swiper('.swp-4', {
  // Optional parameters
  loop: true,
  direction: 'horizontal',
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    // when window width is >= 320px
    320:{
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween:18,
    },

    550: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween:34,
    },

    1250: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween:50,
    } 
  }
})

//формы
let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7(999)999-99-99");
  im.mask(selector);
// отправка с формы на почту
  let validateForms = function(selector, rules, successModal) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function(form) {
        let formData = new FormData(form);
  
        let xhr = new XMLHttpRequest();
  
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        form.reset();
      }
    });
  }

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required:true,
        minLength: 2,
        maxLength: 10       
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },         
  },'.thanks-popup', 'send goal');

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.75810812864605,37.601343431060926],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15,
            controls:[]
        });

        myMap.controls.add('zoomControl', {
          size: 'small',
          float: 'none',
          position: {
            bottom: '350px',
            right: '10px'
          }
        });
    
        myMap.controls.add('geolocationControl', {
          float: 'none',
          position: {
            bottom: '315px',
            right: '10px'
          }
        });

       
        var myPlacemark = new ymaps.Placemark([55.75794057126698,37.60050510313347], {}, {
          iconLayout: 'default#image',
          iconImageHref:'img/Ellipse12.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-3, -42]
        });
      
        
      // Размещение геообъекта на карте.
      
      myMap.geoObjects.add(myPlacemark);
}


/////////////// На адпптив

//Бургер закрытие 

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.close__burger') .addEventListener('click', function(){
    document.querySelector('.body').classList.remove('disable-scroll'),
    document.querySelector('.burger__content').classList.remove('burger__content-active')
    })

  // Поиск  в хедере 


document.querySelector('.first-nav__button-adaptiv') .addEventListener('click', function(){
  document.querySelector('.first-nav__content').classList.toggle('active-tab')
  })

  document.querySelector('.close-form-nav') .addEventListener('click', function(){
    document.querySelector('.first-nav__content').classList.remove('active-tab')
    })
})

///////// мобильный свайпер
const slider = document.querySelector('.newSwiper');
let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			slideClass: 'event__item',
			pagination: {
				el: '.newSwiper-pagination',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 600 && slider.dataset.mobile == 'true') {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

// добавление и удаление элементов списка в публикациях

let categoryBtn = document.querySelector('.publication__button');
categoryBtn.addEventListener('click', function() {
  this.classList.toggle('publication__button-active');
});

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.publication__button').addEventListener('click', function(){
  document.querySelectorAll('.publication__item').forEach(item => {item.classList.toggle('publication__item-no-active');});
  })

  let checkBoxs = document.querySelectorAll('.publication__custom-checkbox');
  checkBoxs.forEach(function(checkMark) {
    checkMark.addEventListener('click', function() {
      if (checkMark.checked) {
        checkMark.parentNode.parentNode.classList.toggle('publication__item-active-1');
      }else {
        checkMark.parentNode.parentNode.classList.remove('publication__item-active-1');
      };
    });
  });
})

//// тултипы
tippy('#myButton-tip-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'te'
});

tippy('#myButton-tip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'te'
});

tippy('#myButton-tip-3', {
  content: 'В стремлении повысить качество',
  theme: 'te'
});

// новый бургер
const btns1 = document.querySelectorAll('.first-nav__buger-button');
const modalOverlay1 = document.querySelector('.burger__content ');
const body1 = document.body;
const fixBlocks1 = document.querySelectorAll('.fix-block');

let disableScroll1 = function () {
	let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
	let pagePosition = window.scrollY;
	fixBlocks1.forEach((el) => {
		el.style.paddingRight = paddingOffset;
	});
	body1.style.paddingRight = paddingOffset;
	body1.classList.add('disable-scroll-burger');
	body1.dataset.position = pagePosition;
	body1.style.top = -pagePosition + 'px';
}
let enableScroll1 = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	body1.style.top = 'auto';
	body1.classList.remove('disable-scroll-burger');
	fixBlocks1.forEach((el) => {
		el.style.paddingRight = '0px';
	});
	body1.style.paddingRight = '0px';
	window.scroll({ top: pagePosition, left: 0 });
	body1.removeAttribute('data-position');
}
btns1.forEach((el) => {
	el.addEventListener('click', (e) => {
		disableScroll1();	
		modalOverlay1.classList.add('burger__content-active');
	});
});
modalOverlay1.addEventListener('click', (e) => {
	enableScroll1();
	if (e.target == modalOverlay1) {
		modalOverlay1.classList.remove('burger__content-active');
		
	}
});
let buttons = document.querySelectorAll('.burger__iten')
let dropmenu = document.querySelectorAll('.burger__content')
for (let button of buttons){
  button.addEventListener('click',elem);
}
function elem () {
  dropmenu.forEach(dropmenus =>{
    if (dropmenus !== this.nextElementSibling){
      dropmenus.classList.remove('burger__content-active')
    }
  })
}