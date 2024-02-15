let pair_searchInput = document.querySelector(".pair__search-input");
let pairSearchContainer = document.querySelector(".pair__search-div")
let pairSearcButton = document.querySelector('.pair__search_button')
let numberOfcards = document.querySelector('.number_of_cards')
let modaldifficultylevel = document.querySelector('.difficultylevel')
let beginGames = document.querySelector('.begingames')
let btnchoiceGamesPairSearch = document.querySelector('.btn__choiceGames')
let changeСomplexity = document.querySelector('.changeСomplexity')
let itemSerchInput;
let arr0 = [];
let result = [];
let list1;
let meaningInput; // записываем сюда значение от инпута, если не соответсвует условиям но ставим 4
let gameEnd = false; // переменная на окончание времмени
let openCart; // переменная по открытам кариточкаь
let chet = 0;
let timer2

let hoverPairSrch = document.querySelector('.hover_games')

//ховер демонстпрация
pairSearcButton.addEventListener('mouseover',demoGamePairSerch)
pairSearcButton.addEventListener('mouseout',function(){
  hoverPairSrch.innerHTML = ''
})

function demoGamePairSerch(){
  let ul2 = document.createElement('ul')
  ul2.classList.add('ulparehover')
  hoverPairSrch.appendChild(ul2)
  for(let i = 0; i <4;i++){
    let li = document.createElement('li')
    li.classList.add('pair__search-item')
    if(i <= 1){
      li.innerHTML = 1;
    }
    else if( i => 2){
      li.innerHTML = 2
    }
    
    ul2.appendChild(li)
  }
  demopair()
  
}

function demopair(){
  let lis = document.querySelectorAll('.pair__search-item')
  for(let i = 0;i< lis.length;i++){
    if( i == 1){
      setTimeout(function(){lis[i].style.backgroundColor ='white'},1000)
      setTimeout(function(){lis[i].style.backgroundColor ='black'},2000)
      setTimeout(function(){lis[i].style.backgroundColor ='white'},3000)
    }
    else if( i == 2){
      setTimeout(function(){lis[i].style.backgroundColor ='white'},1500)
      setTimeout(function(){lis[i].style.backgroundColor ='black'},2000)
      setTimeout(function(){lis[i].style.backgroundColor ='white'},5000)
    }
    else if( i == 0){
      setTimeout(function(){lis[i].style.backgroundColor ='white'},4000)
    }
    else if( i == 3){
      setTimeout(function(){lis[i].style.backgroundColor ='white'},6000)
    }



  }
  
  
}
  
  


// создание кнопки перезагрузки при прохождение игры и при провале таймера

btnchoiceGamesPairSearch.addEventListener('click',function(){
  pairSearchContainer.classList.add("games-of")
  generalContainerGames.classList.add('games-of')
  generalButtonGames.classList.remove('games-of')
  hoverPairSrch.classList.remove('games-of')
})

pairSearcButton.addEventListener("click", function(){
  pairSearchContainer.classList.remove("games-of")
  generalContainerGames.classList.remove('games-of')
  generalButtonGames.classList.add('games-of')
  hoverPairSrch.classList.add('games-of')
})

changeСomplexity.addEventListener('click',function(){
    modaldifficultylevel.classList.remove('games-of')
    result = [];
    parent.innerHTML = '';
    timer2.remove()
    chet = 0
    gameEnd = false;
    stroy()
})


////
let parent = document.querySelector("#parent");
document.addEventListener("DOMContentLoaded", function start() {
  
  pair_searchInput.addEventListener('input', function(){
    numberOfcards.innerHTML = +pair_searchInput.value + +pair_searchInput.value
  })
  beginGames.addEventListener("click",stroy  )

  function reload() {
    let butt = document.createElement("button");
    butt.textContent = "Заново";
    butt.addEventListener("click", function reloaD() {
      result = [];
      parent.innerHTML = '';
      timer2.remove()
      stroy()
      chet = 0
      gameEnd = false;
    });
    parent.appendChild(butt);
  }

  function stroy ()  {//условия создания карточек от ввода в инпут
    if (+pair_searchInput.value % 2 != 0 || +pair_searchInput.value < 1 || +pair_searchInput.value >= 11) {
        meaningInput = 4;
        modaldifficultylevel.classList.add('games-of')
    } else if (
      +pair_searchInput.value > 1 &&
      +pair_searchInput.value < 11 &&
      +pair_searchInput.value % 2 == 0
    ) {
        meaningInput = pair_searchInput.value;
        modaldifficultylevel.classList.add('games-of')
        
    }

    

    // создание таймера
    timer2 = document.createElement("div");
    timer2.innerHTML = 60;
    pairSearchContainer.appendChild(timer2);
    let time = setInterval(function () {
      timer2.innerHTML = +timer2.innerHTML - 1;
      if (timer2.innerHTML == 0) {
        clearInterval(time);
        reload();
        gameEnd = true;
      } else if (chet == (result.length)/2) { // если карточки все раскрыты таймер отстанавливаеться
        clearInterval(time);
      }
    }, 1000);
    ///////
     //отключение инпута после ввода колво карточек. Пока не пройдешь или не проиграешь
    //Пушим количество карточек
    for (let i = 1; i <= meaningInput; i++) {
      arr0.push(i, i);
    }
    ////////
    shuffle(arr0);
    
    //перемешиваем массив путем рандомного вырезания из него, и пушинья в другой
    function shuffle(arr) {
      while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        result.push(elem);
      }

      return result;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //////////
    //Создаем непосредтсвенно карточки с их значением, после перемешивания
    console.log(result)
    for (let i = 0; i < result.length; i++) {
      itemSerchInput = document.createElement("li");
      itemSerchInput.textContent = result[i];
      itemSerchInput.classList.add("pair__search-item")
      parent.appendChild(itemSerchInput);
    }
    ///

    list1 = document.getElementsByTagName("li");
    let listСontents = [];
    // счетчик сопадений
    let listItem = [];
    // перебираем карточки по клику и добовляем на кликнутые карточки класы а так же убираем повторный клик по одной и той же карточке
    for (let elem of list1) {
      elem.addEventListener("click", func);
      function func() {
        if (gameEnd) return;
        this.classList.add("active-li");
        listСontents.push(this.textContent);
        listItem.push(this);
        this.removeEventListener("click", func);
        // если карточки с друг другом совпадают то остовляем их открытыми
        if (
          listСontents.length == 2 &&
          listСontents[0] == listСontents[1]
        ) {
          chet++;
          listСontents.splice(0, listСontents.length);
          listItem.length = 0;
        } // если карточки не совпадают то обратно закрываем
        else if (
          listСontents.length == 2 &&
          listСontents[0] != listСontents[1]
        ) {
          listСontents.splice(0, listСontents.length);
          //делаем задержку при не совпадение карточек, чтоб не закрывались сразу по клику на вторую карточку.
          setTimeout(function () {
            for (let i = 0; i < listItem.length; i++) {
              listItem[i].addEventListener("click", func);
              listItem[i].classList.remove("active-li");
              listItem.splice(i, 1);
              i--;
            }
          }, 500);
        }
        // если счетчик сопадений соответсвует количеству открытых карточек. До игра пройдена
        openCart = (+meaningInput + +meaningInput) / 2;
        if (chet == openCart) {
          reload();
        }
      }
    }
  };
});