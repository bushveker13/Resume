    let cell = document.querySelectorAll('.tictakbutn');
    let btnChoiceGames = document.querySelector('.btn__choiceGames')
    let butnHumen = document.querySelector('.human');
    let butnComp = document.querySelector('.ai');
    let againGames = document.querySelector('.agaim')
    let containerTicTacToeGames = document.querySelector('.tic-tac-toe')
    let TicTacToeButton = document.querySelector('.tic-tac-toeButton')
    let containercitiesGames = document.querySelector('.citiesGames')
    let generalContainerGames = document.querySelector('.general-container_games')
    let generalButtonGames = document.querySelector('.general-button_games')
    let gameMode = document.querySelector(".game_mode")
    let gameMode2 = document.querySelector(".game_mode2")
    let player ;
    let counter = 0;
    let arrComp
    let TicTacToeButtonHover = document.querySelector('.tic-tac-toeButton')
    let hoverGames = document.querySelector(".hover_games");
    let tl = gsap.timeline({paused: true, reversed: true});

    tl.to('.icons8',{y:75,x:55,duration:0.5})
    tl.to('.icons8',{y:25,duration:0.5},2)
    tl.to('.icons8',{y:130,duration:0.5},4)

    

    TicTacToeButtonHover.addEventListener('mouseover',demonstrationTicktack)

    function demonstrationTicktack(){
        
        let hovertable = document.createElement('table');
        hovertable.classList.add('fordelete')
        hoverGames.appendChild(hovertable);
        //создание демонстрция крестиков 
        for (let i = 0; i < 3; i++) {
            let tr = document.createElement('tr');
            
            for (let i = 0; i < 3; i++) {
                td = document.createElement('td');
                let hoverbutton = document.createElement('button')
                hoverbutton.classList.add('tictakbutn')
                td.appendChild(hoverbutton)
                td.classList.add('field_td')
               
                tr.appendChild(td);
            }
            
            hovertable.appendChild(tr);
        }
        
        console.log('+')
        let styletd = document.querySelectorAll(".tictakbutn")
        // типа игра
        for(let i = 0;styletd.length > i; i++ ){
            if(i == 0){
                setTimeout(function() {
                    styletd[i].insertAdjacentHTML('afterBegin', `<svg class="icon-toc">
                    <use xlink:href="#circle_icon-icons.com_70254"></use>
                  </svg>`);
                }, 2000)     
            }
            
            if(i == 1){
                setTimeout(function() {
                    styletd[i].insertAdjacentHTML('afterBegin', `<svg class="icon-tic">
                    <use xlink:href="#cross-small-svgrepo-com"></use>
                  </svg>`);
                }, 3000)     
            }
    
            if(i == 4){
    
                setTimeout(function() {
                    styletd[i].insertAdjacentHTML('afterBegin', `<svg class="icon-tic">
                    <use xlink:href="#cross-small-svgrepo-com"></use>
                  </svg>`);
                }, 1000)
                
            }
    
            if(i == 7){
                setTimeout(function() {
                    styletd[i].insertAdjacentHTML('afterBegin', `<svg class="icon-tic">
                    <use xlink:href="#cross-small-svgrepo-com"></use>
                  </svg>`);
                }, 5000)
            }

            if(i == 8){
                setTimeout(function() {
                    styletd[i].insertAdjacentHTML('afterBegin', `<svg class="icon-toc">
                    <use xlink:href="#circle_icon-icons.com_70254"></use>
                  </svg>`);
                }, 4000)     
            }
        }
    
      
        
        tl.play()
       
        
        TicTacToeButtonHover.removeEventListener('mouseover',demonstrationTicktack)
    }
    
    TicTacToeButton.addEventListener('mouseout', function(){
        hoverGames.innerHTML = ''
        TicTacToeButtonHover.addEventListener('mouseover',demonstrationTicktack)
        tl.revert()
        tl.reverse()

    })



    btnChoiceGames.addEventListener('click', function(){
        gameMode2.innerHTML = ''
        gameMode2.innerHTML = 'Сменить режим игры'
        generalButtonGames.classList.remove('games-of')
        hoverGames.classList.remove('games-of')       
        
    })

    butnComp.addEventListener('click',function(){
        player = 'comp'
        gameMode.classList.add('games-of')
        gameMode2.insertAdjacentHTML('afterBegin', `<svg class="icon_comp">
        <use xlink:href="#open-laptop-computer_icon-icons.com_73474"></use>
      </svg>`);
    })
    butnHumen.addEventListener('click',function(){
        player = 'human'
        gameMode.classList.add('games-of')
        gameMode2.insertAdjacentHTML('afterBegin', `<svg class="icon_human">
        <use xlink:href="#-person_90382"></use>
      </svg>`);
        
    })

    TicTacToeButton.addEventListener('click', function strat() {
        containerTicTacToeGames.classList.remove('games-of')
        generalContainerGames.classList.remove('games-of')
        generalButtonGames.classList.add('games-of')
        hoverGames.classList.add('games-of')
        hoverGames.innerHTML = ''
        tl.reverse();

            for ( elem of cell) {
               
                elem.addEventListener('click',  func)
                 

            }       
    })

function func (){
            
            counter++
            console.log(counter)
        if (player == 'comp') {
            this.insertAdjacentHTML('afterBegin', `<svg class="icon-tic">
            <use xlink:href="#cross-small-svgrepo-com"></use>
          </svg>`);
            this.removeEventListener('click', func)
            computer(cell)       
            
        }

        else if (player == 'human'){
            if(counter % 2 === 0){
                this.removeEventListener('click', func)
                this.insertAdjacentHTML('afterBegin', `<svg class="icon-tic">
                <use xlink:href="#cross-small-svgrepo-com"></use>
                 </svg>`);
            }
            else if(counter % 2 !== 0){
                this.removeEventListener('click', func)
                this.insertAdjacentHTML('afterBegin', `<svg class="icon-toc">
                <use xlink:href="#circle_icon-icons.com_70254"></use>
              </svg>`);
            }
        }  
            
            
        

        if (victori(cell)) {
            console.log(elem.textContent)
        } 
                 
        else if (counter == 9) {
            console.log('ничья')
        }
        
        

        againGames.addEventListener('click',function(){
            counter = 0;
            arrComp = [];
            for(let elem of cell){ 
                elem.innerHTML = null;
                elem.classList.remove('border')
                elem.addEventListener('click',  func) 
            }
        })

        
        
}

function computer(cell) {
    let i = -1;
    arrComp = [];
    for (let elem of cell) {
        i++
        if (elem.textContent == '') {
            arrComp.push(i)
        }
    }
    let x = arrComp[(Math.random() * arrComp.length) | 0]
    cell.forEach(function (elem, ind) {
        if (ind == x) {
            elem.insertAdjacentHTML('afterBegin', `<svg class="icon-toc">
            <use xlink:href="#circle_icon-icons.com_70254"></use>
          </svg>`);
            
        }
    });
}

function victori(cell) {
            let combs = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (let elem of combs) {
                if (cell[elem[0]].textContent == cell[elem[1]].textContent &&
                    cell[elem[1]].textContent == cell[elem[2]].textContent &&
                    cell[elem[0]].textContent != '') {
                        cell[elem[0]].classList.add("border")
                        cell[elem[1]].classList.add("border")
                        cell[elem[2]].classList.add("border")
                    return true
                    
                }
            }
}

btnChoiceGames.addEventListener('click',function(){
    if(containerTicTacToeGames.classList.contains('games-of') != true){
        containerTicTacToeGames.classList.add('games-of')
        generalContainerGames.classList.add('games-of')
        generalButtonGames.classList.remove('games-of')
        gameMode.classList.remove('games-of')
        TicTacToeButtonHover.addEventListener('mouseover',demonstrationTicktack)
        
    }
})

gameMode2.addEventListener('click', function(){
    counter = 0;
    arrComp = [];
    for(let elem of cell){ 
        elem.innerHTML = null;
        elem.classList.remove('border')
        elem.addEventListener('click',  func) 
    }

    if (player == 'human'){
        player = 'comp'
        gameMode2.innerHTML = '';
        gameMode2.innerHTML = 'Сменить режим игры'
        elem.addEventListener('click',  func) 
        gameMode2.insertAdjacentHTML('afterBegin', `<svg class="icon_comp">
        <use xlink:href="#open-laptop-computer_icon-icons.com_73474"></use>
      </svg>`);
        
        
    }else {
        player = 'human'
        gameMode2.innerHTML = '';
        gameMode2.innerHTML = 'Сменить режим игры'
        gameMode2.insertAdjacentHTML('afterBegin', `<svg class="icon_human">
        <use xlink:href="#-person_90382"></use>
      </svg>`);
    }

    console.log(player)
})