let list =  document.querySelector('.list');
let serc = document.querySelector('.serch');
let glasses = document.querySelector('.glasses')
let timer =  document.querySelector('.timer')
let modal =  document.querySelector('.modal-body')
let modalVictore = document.querySelector ('.modal-elem1')
let modalField = document.querySelector ('.modal-elem2')
let btnChoiceGamesNumberSearch = document.querySelector('.btn__choiceGames')
let butn2
let arr =[];
let arrStyleCss = ["tarnsRotate","tarnsScale","tarnsOpasity"]
let key
let n = 9
let bgcolor
let x

let numberSearchContainer = document.querySelector('.number__search')
let pair__searchButton = document.querySelector('.number__search_Button')
let againNumbeSrearch = document.querySelector('.again_number__search')
let hoverGamesNumberSearc = document.querySelector('.hover_games')
let li

pair__searchButton.addEventListener('mouseover',createhovergamesSerchNimber)

let tl2 = gsap.timeline({paused: true, reversed: true});

tl2.to('.icons8',{y:145,x:45,duration:0.5})
    


function createhovergamesSerchNimber(){
    hoverGamesNumberSearc.innerHTML = ''
    tl2.play()
    hoverGamesNumberSearc.insertAdjacentHTML('afterBegin', `
    <p class="serch-content">Искомое число: 99</p>
    <ul>
    <li><button>15</button></li>
    <li><button>2</button></li>
    <li><button>99</button></li>
    <li><button>30</button></li>
    <li><button>61</button></li>
    <li><button>73</button></li>
    <li><button>29</button></li>
    <li><button>45</button></li>
    <li><button>13</button></li>
  </ul>`);
  
}

pair__searchButton.addEventListener('mouseout',function(){
    hoverGamesNumberSearc.innerHTML = '';
    tl2.revert()
    tl2.reverse()
})



let time2 = setInterval(xxx,1000)

function xxx(){
    timer.innerHTML = +timer.innerHTML - 1
    if(timer.innerHTML == 0){
        clearInterval(time2)
    }
}
againNumbeSrearch.addEventListener('click', function () {
    list.innerHTML = ''
    glasses.innerHTML = '0'
    n = 9
    create()   
    serc.innerHTML = ''
    timer.innerHTML = '60'
    clearInterval(time2)
    time2 = setInterval(xxx,1000)
    
    
    for(let elem of butn2){
        elem.addEventListener('click',  serch)
    }
     random2(0, arr.length-1)
  
     
})


btnChoiceGamesNumberSearch.addEventListener('click', function () {
        numberSearchContainer.classList.add('games-of')
        generalContainerGames.classList.add('games-of')
        generalButtonGames.classList.remove('games-of')
        hoverGamesNumberSearc.classList.remove('games-of')
        list.innerHTML = ''
        serc.innerHTML = ''
        timer.innerHTML = '60'
        clearInterval(time2)
        time2 = setInterval(xxx,1000)
        pair__searchButton.addEventListener('mouseover',createhovergamesSerchNimber)
})

pair__searchButton.addEventListener('click', function(){
        hoverGamesNumberSearc.classList.add('games-of')
        numberSearchContainer.classList.remove('games-of')
        generalContainerGames.classList.remove('games-of')
        generalButtonGames.classList.add('games-of')
    create()
    for(let elem of butn2){
        elem.addEventListener('click',  serch)
    }
     random2(0, arr.length-1)// функция выдает цифру которую надо найти в блоках
    
     pair__searchButton.removeEventListener('mouseover',createhovergamesSerchNimber)

})

function create (){
    
    for( let i = 0; i <=n; i++){        
        li = document.createElement('li');
        li.classList.add('itemnumberserch')
        if(glasses.textContent > 10){
            style (0,arrStyleCss.length-1)
        }
        
        let butn = this.document.createElement('button');
        butn.classList.add('butn')                 
        butn.style.background = generatecolor(bgcolor);
        if(glasses.textContent <= 20){
            x = random(1,100);
        }
        else if(glasses.textContent > 20){
            x = random(100,1000);
        }        
          // функция заполянет содержимое кнопок рандомными числами
        arr.push(x)
        butn2 = document.querySelectorAll('.butn')
        butn.addEventListener('click', serch)
        butn.textContent =(x);
        li.appendChild(butn);
        list.appendChild(li);
        list.classList.add('transrormX')
        
    }

    
}

function random (min, max){
    return Math.floor(Math.random()* (max - min +1)) + min;
}

function random2(min,max ){
    key =  Math.floor(Math.random()* (max - min +1)) + min;
    serc.textContent = arr[key]
    arr = [];
}

function serch (){
    
    list.classList.remove('transrormX');
    
    if(glasses.textContent <= 60 && this.textContent == serc.textContent){
        modalVictory()
        list.innerHTML = ''
        create()
        random2(0, arr.length-1)
        glasses.textContent = +glasses.innerHTML + 20;
        modalVictore.style.display = 'block'
         
    }
    else if(glasses.textContent >= 60  && this.textContent == serc.textContent){
        modalVictory()
        modalVictore.style.display = 'block'
        n = 11
        list.innerHTML = ''
        create()
        random2(0, arr.length-1)
        glasses.textContent = +glasses.innerHTML + 20;
         
    }
    else if(this.textContent != serc.textContent){
        modalVictory ()
        modalField.style.display='block'
        list.innerHTML = ''
        create()
        random2(0, arr.length-1)
    }


}

function generatecolor(){
    let color = '0123456789ABCDEF';
    bgcolor = '#';
    for(let i = 0; i<6; i++){
        bgcolor = bgcolor + color[Math.floor(Math.random()* 16)]
        
        
    }
    return String(bgcolor)

}

function style (min,max){
    key =  Math.floor(Math.random()* (max - min +1)) + min;
    xs = arrStyleCss[key]
    li.classList.add(xs)

}
let ti = 0;

function modalVictory (){ // функция при клике показывает картинку правильно или не правильно
    let time = this.setInterval(function(){
    
        
        modal.style.display = 'flex';
        ti = ti + 1;
        
        console.log(ti)
        if(ti > 1){
            clearInterval(time)
            modalVictore.style.display = 'none'
            modal.style.display = 'none';
            modalField.style.display='none'
            ti= 0

        }
        
     },1000)

}
