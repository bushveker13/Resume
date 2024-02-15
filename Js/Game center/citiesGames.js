let citiesUsed = [];
let elem;
let bigLetter;
let miniLetter;
let input = document.querySelector("input");
let div = document.querySelector(".said_cities");
let citiesGamesButton = document.querySelector('.cityGamse_Button')
let citiContainer = document.querySelector('.citiesGames')
let btnChoiceGames2 = document.querySelector('.btn__choiceGames')
let hoverGamesSity = document.querySelector('.hover_games')
let sityHover = ['Москва','Новгород'];
let line = 0;
let count = 0;
let out = '';
let numer = 100;
let inputhover ;
let xr = 0


let saidCities = document.querySelector('.said_cities')


btnChoiceGames2.addEventListener('click',function(){
  if(containercitiesGames.classList.contains('games-of') != true){
      citiContainer.classList.add('games-of');
      generalContainerGames.classList.add('games-of');
      generalButtonGames.classList.remove('games-of');
      
  }
})

citiesGamesButton.addEventListener('mouseover',dimonstarorsity)

function dimonstarorsity(){
  hoverGamesSity.innerHTML = '';
  inputhover = document.createElement('input');
  hoverGamesSity.appendChild(inputhover);
  let divv2 = document.createElement('div')
  hoverGamesSity.appendChild(divv2)
  
 setTimeout(function(){
  divv2.insertAdjacentHTML('afterEnd',`<p class ='plaer'>Москва</p><p class ='comp'>Астрахань</p>`)
 },1000) 
  x-- 
  
  setTimeout(function() {
    typeline()
  }, 500);

  if(x == 1){
    hoverGamesSity.innerHTML = '';
    return
  }
}

citiesGamesButton.addEventListener('mouseout',function(){
  x = 1
  count  = 0
  line = 0
  inputhover.value = ''
  hoverGamesSity.innerHTML = ''
})


function typeline(){
      
  let interval = setTimeout(function(){
    inputhover.value = inputhover.value + sityHover[line][count];
    count++
    
    if(count === sityHover[line].length +1 ){
      inputhover.value = ''
      count = 0
      numer = 1000
      setTimeout(function() {
        numer = 100
        
      }, 500);
      
      
      line++
      if(line === sityHover.length){
        hoverGamesSity.insertAdjacentHTML('beforeEnd',`<p class ='plaer'>Новгород</p><p class ='comp'>Домодедово</p>`)
      
        clearTimeout(interval)
        count  = 0
        line = 0
        return 
      }
      else if(x == 1){
        count  = 0
        line = 0
        inputhover.value = ''
        return
      }
      
    }
    else if(x == 1){
      count  = 0
      line = 0
      inputhover.value = ''
      return
    }
    
    typeline()
  },numer)
  
}

//////////


citiesGamesButton.addEventListener('click', function(){
    containercitiesGames.classList.remove('games-of')
    generalContainerGames.classList.remove('games-of')
    generalButtonGames.classList.add('games-of')
    hoverGamesSity.classList.add('games-of')
})


let sity = [
  "абакан",
  "азов",
  "александров",
  "алексин",
  "альметьевск",
  "анапа",
  "ангарск",
  "анжеро-Судженск",
  "апатиты",
  "арзамас",
  "армавир",
  "арсеньев",
  "артем",
  "архангельск",
  "асбест",
  "астрахань",
  "ачинск",
  "балаково",
  "балахна",
  "балашиха",
  "балашов",
  "барнаул",
  "батайск",
  "белгород",
  "белебей",
  "белово",
  "белогорск",
  "белорецк",
  "белореченск",
  "бердск",
  "березники",
  "березовский",
  "бийс",
  "биробиджа",
  "благовещенс",
  "бор",
  "борисоглебск",
  "боровичи",
  "братск",
  "брянск",
  "бугульма",
  "буденновск",
  "бузулук",
  "буйнакск",
  "великие Луки",
  "великий Новгород",
  "верхняя Пышма",
  "видное",
  "владивосток",
  "владикавказ",
  "владимир",
  "волгоград",
  "волгодонск",
  "волжск",
  "волжский",
  "вологда",
  "вольск",
  "воркута",
  "воронеж",
  "воскресенск",
  "воткинск",
  "всеволожск",
  "выборг",
  "выкса",
  "вязьма",
  "гатчина",
  "геленджик",
  "георгиевск",
  "глазов",
  "горно-Алтайск",
  "грозный",
  "губкин",
  "гудермес",
  "гуково",
  "гусь-Хрустальный",
  "дербент",
  "дзержинск",
  "димитровград",
  "дмитров",
  "долгопрудный",
  "домодедово",
  "донской",
  "дубна",
  "евпатория",
  "егорьевск",
  "ейск",
  "екатеринбург",
  "елабуга",
  "елец",
  "ессентуки",
  "железногорск ",
  "жигулевск",
  "жуковский",
  "заречный",
  "зеленогорск",
  "зеленодольск",
  "златоуст",
  "иваново",
  "ивантеевка",
  "ижевск",
  "избербаш",
  "иркутск",
  "искитим",
  "ишим",
  "ишимбай",
  "казань",
  "калининград",
  "калуга",
  "каменск-Уральский",
  "каменск-Шахтинский",
  "камышин",
  "канск",
  "каспийск",
  "кемерово",
  "керчь",
  "кинешма",
  "кириши",
  "киров",
  "кирово-Чепецк",
  "киселевск",
  "кисловодск",
  "клин",
  "клинцы",
  "ковров",
  "когалым",
  "коломна",
  "комсомольск-на-Амуре",
  "копейск",
  "кострома",
  "котлас",
  "красногорск",
  "краснодар",
  "краснокаменск",
  "краснокамск",
  "краснотурьинск",
  "красноярск",
  "кропоткин",
  "крымск",
  "кстово",
  "кузнецк",
  "кумертау",
  "кунгур",
  "курган",
  "курск",
  "кызыл",
  "лабинск",
  "лениногорск",
  "ленинск-Кузнецкий",
  "лесосибирск",
  "липецк",
  "лиски",
  "лобня",
  "лысьва",
  "лыткарино",
  "люберцы",
  "магадан",
  "магнитогорск",
  "майкоп",
  "махачкала",
  "междуреченск",
  "мелеуз",
  "миасс",
  "минеральные Воды",
  "минусинск",
  "михайловка",
  "михайловск (Ставропольский край)",
  "мичуринск",
  "москва",
  "мурманск",
  "муром",
  "мытищи",
  "набережные-Челны",
  "назарово",
  "назрань",
  "нальчик",
  "наро-Фоминск",
  "находка",
  "невинномысск",
  "нерюнгри",
  "нефтекамск",
  "нефтеюганск",
  "нижневартовск",
  "нижнекамск",
  "новгород",
  "тагил",
  "новоалтайск",
  "новокузнецк",
  "новокуйбышевск",
  "новомосковск",
  "новороссийск",
  "новосибирск",
  "новотроицк",
  "новоуральск",
  "новочебоксарск",
  "новочеркасск",
  "новошахтинск",
  "новый Уренгой",
  "ногинск",
  "норильск",
  "ноябрьск",
  "нягань",
  "обнинск",
  "одинцово",
  "озерск (Челябинская область)",
  "октябрьский",
  "омск",
  "орел",
  "оренбург",
  "орехово-Зуево",
  "орск",
  "павлово",
  "пенза",
  "первоуральск",
  "пермь",
  "петрозаводск",
  "петропавловск-Камчатский",
  "подольск",
  "полевской",
  "прокопьевск",
  "прохладный",
  "псков",
  "пушкино",
  "пятигорск",
  "раменское",
  "ревда",
  "реутов",
  "ржев",
  "рославль",
  "россошь",
  "ростов-на-Дону",
  "рубцовск",
  "рыбинск",
  "рязань",
  "талават",
  "тальск",
  "тамара",
  "танкт-Петербург",
  "таранск",
  "тарапул",
  "таратов",
  "таров",
  "твободный",
  "тевастополь",
  "теверодвинск",
  "теверск",
  "тергиев Посад",
  "теров",
  "терпухов",
  "тертолово",
  "тибай",
  "тимферополь",
  "тлавянск-на-Кубани",
  "тмоленск",
  "толикамск",
  "толнечногорск",
  "тосновый Бор",
  "точи",
  "таврополь",
  "тарый Оскол",
  "терлитамак",
  "тупино",
  "тургут",
  "тызрань",
  "тыктывкар",
  "таганрог",
  "тамбов",
  "тверь",
  "тимашевск",
  "тихвин",
  "тихорецк",
  "тобольск",
  "тольятти",
  "томск",
  "троицк",
  "туапсе",
  "туймазы",
  "тула",
  "тюмень",
  "узловая",
  "улан-Удэ",
  "ульяновск",
  "урус-Мартан",
  "усолье-Сибирское",
  "уссурийск",
  "усть-Илимск",
  "уфа",
  "ухта",
  "феодосия",
  "фрязино",
  "хабаровск",
  "ханты-Мансийск",
  "хасавюрт",
  "химки",
  "чайковский",
  "чапаевск",
  "чебоксары",
  "челябинск",
  "черемхово",
  "череповец",
  "черкесск",
  "черногорск",
  "чехов",
  "чистополь",
  "чита",
  "шадринск",
  "шали",
  "шахты",
  "Шая",
  "щекино",
  "щелково",
  "электросталь",
  "элиста",
  "энгельс",
  "южно-Сахалинск",
  "юрга",
  "якутс",
  "ялта",
  "ярославль"
];
function comp() {
  if (
    input.value[input.value.length - 1] === "ь" ||
    input.value[input.value.length - 1] === "й" ||
    input.value[input.value.length - 1] == "ы"
  ) {
    for (let elem of sity) {
      if (elem[0] == input.value[input.value.length - 2]) {
        if (citiesUsed.indexOf(elem) == -1) {
          bigLetter = elem.slice(0, 1).toUpperCase() + elem.slice(1);
          miniLetter = elem.slice(0, 1).toLowerCase() + elem.slice(1);
          let cont2 = document.createElement("div");
          cont2.textContent = bigLetter;
          cont2.classList.add("comp");
          div.appendChild(cont2);
          citiesUsed.push(miniLetter);
          

          break;
        }
      }
    }
  } else {
    for (let elem of sity) {
      if (elem[0] == input.value[input.value.length - 1]) {
        if (citiesUsed.indexOf(elem) == -1) {
          bigLetter = elem.slice(0, 1).toUpperCase() + elem.slice(1);
          miniLetter = elem.slice(0, 1).toLowerCase() + elem.slice(1);
          citiesUsed.push(miniLetter);
          let cont2 = document.createElement("div");
          cont2.textContent = bigLetter;
          cont2.classList.add("comp");
          div.appendChild(cont2);

          break;
        }
      }
    }
  }
}
function toGo() {
  bigLetter =
    input.value.slice(0, 1).toUpperCase() + input.value.slice(1);
  citiesUsed.push(miniLetter);
  console.log(citiesUsed)
  let cont = document.createElement("div");
  cont.textContent = bigLetter;
  cont.classList.add("plaer");
  div.appendChild(cont);
  comp();
  input.value = "";
}

input.addEventListener("change", function () {
  miniLetter =
    input.value.slice(0, 1).toLowerCase() + input.value.slice(1);
    
  if (citiesUsed.length == 0 && sity.indexOf(miniLetter) !== -1) {
    toGo();
  } else if (citiesUsed.length > 0) {
    elem = citiesUsed[citiesUsed.length - 1]; // последние слово в массиве
    miniLetter =
      input.value.slice(0, 1).toLowerCase() + input.value.slice(1);
      console.log(miniLetter)
    if (elem[elem.length - 1] == miniLetter[0]) {
      if (citiesUsed.indexOf(miniLetter) == -1) {
        if (sity.indexOf(miniLetter) !== -1) {
          toGo();
        } else {
          alert("Нет такого города");
        }
      } else {
        alert("совпадение");
      }
    } else if (
      elem[elem.length - 1] == "ы" ||
      elem[elem.length - 1] == "й" ||
      elem[elem.length - 1] == "ь"
    ) {
      if (elem[elem.length - 2] == miniLetter[0]) {
        if (citiesUsed.indexOf(input.value) == -1) {
          toGo();
        }
      }
    } else {
      alert("Не совпадение букв");
    }
  }
});